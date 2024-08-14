"use client";

import React, { useState, useEffect } from "react";
import RegistrationTable from "@/components/admin/registration-table";
import ViewRegistrationModal from "@/components/admin/view-registration-modal";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import type { Registration } from "registration";

const RegistrationManagement: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('/api/registrations');
        const data: Registration[] = await response.json();
        setRegistrations(data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };

    fetchRegistrations();
  }, []);

  const handleView = (registration: Registration) => {
    setSelectedRegistration(registration);
    setIsViewModalOpen(true);
  };

  const handleDeleteRequest = (registration: Registration) => {
    setSelectedRegistration(registration);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (selectedRegistration) {
      try {
        await fetch(`/api/registrations/${selectedRegistration.id}`, {
          method: 'DELETE',
        });
        setRegistrations((prev) => prev.filter((reg) => reg.id !== selectedRegistration.id));
        setDeleteDialogOpen(false);
        setSelectedRegistration(null);
      } catch (error) {
        console.error('Error deleting registration:', error);
      }
    }
  };

  const cancelDelete = () => {
    setDeleteDialogOpen(false);
    setSelectedRegistration(null);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedRegistration(null);
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-semibold">Registration Management</h1>
      <RegistrationTable
        registrations={registrations}
        onView={handleView}
        onDeleteRequest={handleDeleteRequest}
      />

      {isViewModalOpen && selectedRegistration && (
        <ViewRegistrationModal
          registration={selectedRegistration}
          onClose={closeViewModal}
        />
      )}

      <Dialog
        open={deleteDialogOpen}
        onClose={cancelDelete}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>Are you sure you want to delete this registration?</DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete}>Cancel</Button>
          <Button
            onClick={confirmDelete}
            color="secondary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RegistrationManagement;
