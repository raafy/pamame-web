"use client";

interface Registration {
  id: number;
  guardian1_name: string;
  guardian1_contact_no: string;
  guardian1_id_type: string;
  guardian1_ic?: string;
  guardian1_passport?: string;
  guardian1_relationship: string;
  guardian2_name: string;
  guardian2_contact_no: string;
  guardian2_id_type: string;
  guardian2_ic?: string;
  guardian2_passport?: string;
  guardian2_relationship: string;
  main_contact: string;
  address: string;
  email: string;
  emergency_name: string;
  emergency_contact_no: string;
  emergency_relationship: string;
  add_adult_amount: number;
  add_adult1_name?: string;
  add_adult1_contact_no?: string;
  add_adult1_ic?: string;
  add_adult1_relationship?: string;
  add_adult2_name?: string;
  add_adult2_contact_no?: string;
  add_adult2_ic?: string;
  add_adult2_relationship?: string;
  add_adult3_name?: string;
  add_adult3_contact_no?: string;
  add_adult3_ic?: string;
  add_adult3_relationship?: string;
  children_amount: number;
  child1_name: string;
  child1_nickname: string;
  child1_gender: string;
  child1_age: number;
  child1_dob?: Date;
  child1_id_type: string;
  child1_ic?: string;
  child1_passport?: string;
  child2_name?: string;
  child2_nickname?: string;
  child2_gender?: string;
  child2_age?: number;
  child2_dob?: Date;
  child2_id_type?: string;
  child2_ic?: string;
  child2_passport?: string;
  child3_name?: string;
  child3_nickname?: string;
  child3_gender?: string;
  child3_age?: number;
  child3_dob?: Date;
  child3_id_type?: string;
  child3_ic?: string;
  child3_passport?: string;
  add_child_amount?: number;
  add_child1_name?: string;
  add_child1_nickname?: string;
  add_child1_gender?: string;
  add_child1_age?: number;
  add_child1_dob?: Date;
  add_child1_id_type?: string;
  add_child1_ic?: string;
  add_child1_passport?: string;
  add_child2_name?: string;
  add_child2_nickname?: string;
  add_child2_gender?: string;
  add_child2_age?: number;
  add_child2_dob?: Date;
  add_child2_id_type?: string;
  add_child2_ic?: string;
  add_child2_passport?: string;
  add_child3_name?: string;
  add_child3_nickname?: string;
  add_child3_gender?: string;
  add_child3_age?: number;
  add_child3_dob?: Date;
  add_child3_id_type?: string;
  add_child3_ic?: string;
  add_child3_passport?: string;
  package_default: number;
  addon_children_below_4: number;
  addon_children_5_to_10: number;
  addon_above_10: number;
  heard_info: string;
  heard_info_others?: string;
  heard_info_scode?: string;
  payment_image?: string;
  total_amount: string;
  created_at: Date;
  updated_at: Date;
}

import React, { useState, useEffect } from "react";
import RegistrationTable from "@/components/admin/registration-table";
import EditRegistrationModal from "@/components/admin/edit-registration-modal";
import AddRegistrationModal from "@/components/admin/new-registration-modal";
import { Button } from "@mui/material";

interface NewRegistration {
  guardian1_name: string;
  guardian1_contact_no: string;
  guardian1_id_type: string;
  guardian1_ic?: string;
  guardian1_passport?: string;
  guardian1_relationship: string;
  guardian2_name: string;
  guardian2_contact_no: string;
  guardian2_id_type: string;
  guardian2_ic?: string;
  guardian2_passport?: string;
  guardian2_relationship: string;
  main_contact: string;
  address: string;
  email: string;
  emergency_name: string;
  emergency_contact_no: string;
  emergency_relationship: string;
  add_adult_amount: number;
  add_adult1_name?: string;
  add_adult1_contact_no?: string;
  add_adult1_ic?: string;
  add_adult1_relationship?: string;
  add_adult2_name?: string;
  add_adult2_contact_no?: string;
  add_adult2_ic?: string;
  add_adult2_relationship?: string;
  add_adult3_name?: string;
  add_adult3_contact_no?: string;
  add_adult3_ic?: string;
  add_adult3_relationship?: string;
  children_amount: number;
  child1_name: string;
  child1_nickname: string;
  child1_gender: string;
  child1_age: number;
  child1_dob?: Date;
  child1_id_type: string;
  child1_ic?: string;
  child1_passport?: string;
  child2_name?: string;
  child2_nickname?: string;
  child2_gender?: string;
  child2_age?: number;
  child2_dob?: Date;
  child2_id_type?: string;
  child2_ic?: string;
  child2_passport?: string;
  child3_name?: string;
  child3_nickname?: string;
  child3_gender?: string;
  child3_age?: number;
  child3_dob?: Date;
  child3_id_type?: string;
  child3_ic?: string;
  child3_passport?: string;
  add_child_amount?: number;
  add_child1_name?: string;
  add_child1_nickname?: string;
  add_child1_gender?: string;
  add_child1_age?: number;
  add_child1_dob?: Date;
  add_child1_id_type?: string;
  add_child1_ic?: string;
  add_child1_passport?: string;
  add_child2_name?: string;
  add_child2_nickname?: string;
  add_child2_gender?: string;
  add_child2_age?: number;
  add_child2_dob?: Date;
  add_child2_id_type?: string;
  add_child2_ic?: string;
  add_child2_passport?: string;
  add_child3_name?: string;
  add_child3_nickname?: string;
  add_child3_gender?: string;
  add_child3_age?: number;
  add_child3_dob?: Date;
  add_child3_id_type?: string;
  add_child3_ic?: string;
  add_child3_passport?: string;
  package_default: number;
  addon_children_below_4: number;
  addon_children_5_to_10: number;
  addon_above_10: number;
  heard_info: string;
  heard_info_others?: string;
  heard_info_scode?: string;
  payment_image?: string;
  total_amount: string;
}

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
    newRegistration: NewRegistration,
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
