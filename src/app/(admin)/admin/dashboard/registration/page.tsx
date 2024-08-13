"use client";

import React, { useState, useEffect } from "react";
import RegistrationTable from "@/components/admin/registration-table";
import EditRegistrationModal from "@/components/admin/edit-registration-modal";
import AddRegistrationModal from "@/components/admin/new-registration-modal";
import { Button } from "@mui/material";
import type { Registration } from "registration";


const RegistrationManagement: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [selectedRegistration, setSelectedRegistration] =
    useState<Registration | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const response = await fetch("/api/registrations");
      const data: Registration[] = await response.json();
      setRegistrations(data);
    };

    fetchRegistrations();
  }, []);

  const handleEdit = (id: number) => {
    const registration = registrations.find((reg) => reg.id === id);
    if (registration) {
      setSelectedRegistration(registration);
      setIsEditModalOpen(true);
    }
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/registrations/${id}`, {
      method: "DELETE",
    });

    setRegistrations((prev) => prev.filter((reg) => reg.id !== id));
  };

  const handleSave = async (
    updatedRegistration: Registration,
    receiptFile: File | null,
  ) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(updatedRegistration));
    if (receiptFile) {
      formData.append("file", receiptFile);
    }

    await fetch(`/api/registrations/${updatedRegistration.id}`, {
      method: "PUT",
      body: formData,
    });

    setRegistrations((prev) =>
      prev.map((reg) =>
        reg.id === updatedRegistration.id ? updatedRegistration : reg,
      ),
    );
    setIsEditModalOpen(false);
  };

  const handleAdd = async (
    newRegistration: Registration,
    receiptFile: File | null,
  ) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(newRegistration));
    if (receiptFile) {
      formData.append("file", receiptFile);
    }

    const response = await fetch(`/api/registrations`, {
      method: "POST",
      body: formData,
    });

    const createdRegistration: Registration = await response.json();
    setRegistrations((prev) => [createdRegistration, ...prev]);
    setIsAddModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedRegistration(null);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleViewReceipt = (imagePath: string) => {
    window.open(imagePath, "_blank");
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-semibold">Registration Management</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsAddModalOpen(true)}
        className="mb-4"
      >
        Add Registration
      </Button>
      <RegistrationTable
        registrations={registrations}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewReceipt={handleViewReceipt}
      />
      {isEditModalOpen && selectedRegistration && (
        <EditRegistrationModal
          registration={selectedRegistration}
          onClose={handleCloseEditModal}
          onSave={handleSave}
          onViewReceipt={handleViewReceipt}
        />
      )}
      {isAddModalOpen && (
        <AddRegistrationModal
          onClose={handleCloseAddModal}
          onSave={handleAdd}
        />
      )}
    </div>
  );
};

export default RegistrationManagement;
