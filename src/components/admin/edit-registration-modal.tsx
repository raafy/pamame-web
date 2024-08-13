"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  TextField,
  IconButton,
  InputLabel,
} from "@mui/material";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import type { Registration } from "registration";

interface EditRegistrationModalProps {
  registration: Registration;
  onClose: () => void;
  onSave: (updatedRegistration: Registration, receiptFile: File | null) => void;
  onViewReceipt: (imagePath: string) => void;
}

const EditRegistrationModal: React.FC<EditRegistrationModalProps> = ({
  registration,
  onClose,
  onSave,
  onViewReceipt,
}) => {
  const [formData, setFormData] = useState<Registration>({ ...registration });
  const [receiptFile, setReceiptFile] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReceiptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setReceiptFile(e.target.files[0]);
    }
  };

  const handleSave = () => {
    // Ensure all necessary fields are properly formatted
    const formattedData: Registration = {
      id: formData.id,
      guardian1_name: formData.guardian1_name,
      guardian1_contact_no: formData.guardian1_contact_no,
      guardian1_id_type: formData.guardian1_id_type,
      guardian1_ic: formData.guardian1_ic ?? null,
      guardian1_passport: formData.guardian1_passport ?? null,
      guardian1_relationship: formData.guardian1_relationship,
      guardian2_name: formData.guardian2_name,
      guardian2_contact_no: formData.guardian2_contact_no,
      guardian2_id_type: formData.guardian2_id_type,
      guardian2_ic: formData.guardian2_ic ?? null,
      guardian2_passport: formData.guardian2_passport ?? null,
      guardian2_relationship: formData.guardian2_relationship,
      main_contact: formData.main_contact,
      address: formData.address,
      email: formData.email,
      emergency_name: formData.emergency_name,
      emergency_contact_no: formData.emergency_contact_no,
      emergency_relationship: formData.emergency_relationship,
      add_adult_amount: Number(formData.add_adult_amount), // Convert to number
      add_adult1_name: formData.add_adult1_name ?? undefined,
      add_adult1_contact_no: formData.add_adult1_contact_no ?? undefined,
      add_adult1_ic: formData.add_adult1_ic ?? null,
      add_adult1_relationship: formData.add_adult1_relationship ?? undefined,
      add_adult2_name: formData.add_adult2_name ?? undefined,
      add_adult2_contact_no: formData.add_adult2_contact_no ?? undefined,
      add_adult2_ic: formData.add_adult2_ic ?? null,
      add_adult2_relationship: formData.add_adult2_relationship ?? undefined,
      add_adult3_name: formData.add_adult3_name ?? undefined,
      add_adult3_contact_no: formData.add_adult3_contact_no ?? undefined,
      add_adult3_ic: formData.add_adult3_ic ?? null,
      add_adult3_relationship: formData.add_adult3_relationship ?? undefined,
      children_amount: Number(formData.children_amount), // Convert to number
      child1_name: formData.child1_name,
      child1_nickname: formData.child1_nickname,
      child1_gender: formData.child1_gender,
      child1_age: Number(formData.child1_age), // Convert to number
      child1_dob: formData.child1_dob ? new Date(formData.child1_dob) : null,
      child1_id_type: formData.child1_id_type,
      child1_ic: formData.child1_ic ?? null,
      child1_passport: formData.child1_passport ?? null,
      child2_name: formData.child2_name ?? undefined,
      child2_nickname: formData.child2_nickname ?? undefined,
      child2_gender: formData.child2_gender ?? undefined,
      child2_age: formData.child2_age ? Number(formData.child2_age) : undefined, // Convert to number
      child2_dob: formData.child2_dob ? new Date(formData.child2_dob) : null,
      child2_id_type: formData.child2_id_type ?? undefined,
      child2_ic: formData.child2_ic ?? null,
      child2_passport: formData.child2_passport ?? null,
      child3_name: formData.child3_name ?? undefined,
      child3_nickname: formData.child3_nickname ?? undefined,
      child3_gender: formData.child3_gender ?? undefined,
      child3_age: formData.child3_age ? Number(formData.child3_age) : undefined, // Convert to number
      child3_dob: formData.child3_dob ? new Date(formData.child3_dob) : null,
      child3_id_type: formData.child3_id_type ?? undefined,
      child3_ic: formData.child3_ic ?? null,
      child3_passport: formData.child3_passport ?? null,
      add_child_amount: formData.add_child_amount ? Number(formData.add_child_amount) : undefined, // Convert to number
      add_child1_name: formData.add_child1_name ?? undefined,
      add_child1_nickname: formData.add_child1_nickname ?? undefined,
      add_child1_gender: formData.add_child1_gender ?? undefined,
      add_child1_age: formData.add_child1_age ? Number(formData.add_child1_age) : undefined, // Convert to number
      add_child1_dob: formData.add_child1_dob ? new Date(formData.add_child1_dob) : null,
      add_child1_id_type: formData.add_child1_id_type ?? undefined,
      add_child1_ic: formData.add_child1_ic ?? null,
      add_child1_passport: formData.add_child1_passport ?? null,
      add_child2_name: formData.add_child2_name ?? undefined,
      add_child2_nickname: formData.add_child2_nickname ?? undefined,
      add_child2_gender: formData.add_child2_gender ?? undefined,
      add_child2_age: formData.add_child2_age ? Number(formData.add_child2_age) : undefined, // Convert to number
      add_child2_dob: formData.add_child2_dob ? new Date(formData.add_child2_dob) : null,
      add_child2_id_type: formData.add_child2_id_type ?? undefined,
      add_child2_ic: formData.add_child2_ic ?? null,
      add_child2_passport: formData.add_child2_passport ?? null,
      add_child3_name: formData.add_child3_name ?? undefined,
      add_child3_nickname: formData.add_child3_nickname ?? undefined,
      add_child3_gender: formData.add_child3_gender ?? undefined,
      add_child3_age: formData.add_child3_age ? Number(formData.add_child3_age) : undefined, // Convert to number
      add_child3_dob: formData.add_child3_dob ? new Date(formData.add_child3_dob) : null,
      add_child3_id_type: formData.add_child3_id_type ?? undefined,
      add_child3_ic: formData.add_child3_ic ?? null,
      add_child3_passport: formData.add_child3_passport ?? null,
      package_default: Number(formData.package_default), // Convert to number
      addon_children_below_4: Number(formData.addon_children_below_4), // Convert to number
      addon_children_5_to_10: Number(formData.addon_children_5_to_10), // Convert to number
      addon_above_10: Number(formData.addon_above_10), // Convert to number
      heard_info: formData.heard_info,
      heard_info_others: formData.heard_info_others ?? undefined,
      heard_info_scode: formData.heard_info_scode ?? undefined,
      payment_image: formData.payment_image ?? undefined,
      total_amount: parseFloat(formData.total_amount).toFixed(2),
      created_at: formData.created_at,
      updated_at: new Date(), // Update the updated_at field with the current date
    };
  
    // Call the onSave function with the formatted data and receipt file
    onSave(formattedData, receiptFile);
  };

  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Edit Registration</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} className="my-4">
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 1 Name"
              name="guardian1_name"
              value={formData.guardian1_name}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 1 Contact"
              name="guardian1_contact_no"
              value={formData.guardian1_contact_no}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 1 ID Type"
              name="guardian1_id_type"
              value={formData.guardian1_id_type}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 1 IC"
              name="guardian1_ic"
              value={formData.guardian1_ic ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 1 Passport"
              name="guardian1_passport"
              value={formData.guardian1_passport ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 1 Relationship"
              name="guardian1_relationship"
              value={formData.guardian1_relationship}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Guardian 2 */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 2 Name"
              name="guardian2_name"
              value={formData.guardian2_name}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 2 Contact"
              name="guardian2_contact_no"
              value={formData.guardian2_contact_no}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 2 ID Type"
              name="guardian2_id_type"
              value={formData.guardian2_id_type}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 2 IC"
              name="guardian2_ic"
              value={formData.guardian2_ic ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 2 Passport"
              name="guardian2_passport"
              value={formData.guardian2_passport ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Guardian 2 Relationship"
              name="guardian2_relationship"
              value={formData.guardian2_relationship}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Main Contact Information */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Main Contact"
              name="main_contact"
              value={formData.main_contact}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              fullWidth
              multiline
            />
          </Grid>

          {/* Emergency Contact Information */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Emergency Contact Name"
              name="emergency_name"
              value={formData.emergency_name}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Emergency Contact Number"
              name="emergency_contact_no"
              value={formData.emergency_contact_no}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Emergency Contact Relationship"
              name="emergency_relationship"
              value={formData.emergency_relationship}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Additional Adults Information */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adults Amount"
              name="add_adult_amount"
              value={formData.add_adult_amount.toString()}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Adult 1 */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 1 Name"
              name="add_adult1_name"
              value={formData.add_adult1_name ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 1 Contact"
              name="add_adult1_contact_no"
              value={formData.add_adult1_contact_no ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 1 IC"
              name="add_adult1_ic"
              value={formData.add_adult1_ic ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 1 Relationship"
              name="add_adult1_relationship"
              value={formData.add_adult1_relationship ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Adult 2 */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 2 Name"
              name="add_adult2_name"
              value={formData.add_adult2_name ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 2 Contact"
              name="add_adult2_contact_no"
              value={formData.add_adult2_contact_no ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 2 IC"
              name="add_adult2_ic"
              value={formData.add_adult2_ic ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 2 Relationship"
              name="add_adult2_relationship"
              value={formData.add_adult2_relationship ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Adult 3 */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 3 Name"
              name="add_adult3_name"
              value={formData.add_adult3_name ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 3 Contact"
              name="add_adult3_contact_no"
              value={formData.add_adult3_contact_no ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 3 IC"
              name="add_adult3_ic"
              value={formData.add_adult3_ic ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Adult 3 Relationship"
              name="add_adult3_relationship"
              value={formData.add_adult3_relationship ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Children Information */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Children Amount"
              name="children_amount"
              value={formData.children_amount.toString()}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Child 1 */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 1 Name"
              name="child1_name"
              value={formData.child1_name}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 1 Nickname"
              name="child1_nickname"
              value={formData.child1_nickname}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 1 Gender"
              name="child1_gender"
              value={formData.child1_gender}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 1 Age"
              name="child1_age"
              value={formData.child1_age.toString()}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 1 DOB"
              name="child1_dob"
              type="date"
              value={
                formData.child1_dob
                  ? new Date(formData.child1_dob).toISOString().split("T")[0]
                  : ""
              }
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 1 ID Type"
              name="child1_id_type"
              value={formData.child1_id_type}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 1 IC"
              name="child1_ic"
              value={formData.child1_ic ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 1 Passport"
              name="child1_passport"
              value={formData.child1_passport ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Child 2 */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 2 Name"
              name="child2_name"
              value={formData.child2_name ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 2 Nickname"
              name="child2_nickname"
              value={formData.child2_nickname ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 2 Gender"
              name="child2_gender"
              value={formData.child2_gender ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 2 Age"
              name="child2_age"
              value={formData.child2_age?.toString() ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 2 DOB"
              name="child2_dob"
              type="date"
              value={
                formData.child2_dob
                  ? new Date(formData.child2_dob).toISOString().split("T")[0]
                  : ""
              }
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 2 ID Type"
              name="child2_id_type"
              value={formData.child2_id_type ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 2 IC"
              name="child2_ic"
              value={formData.child2_ic ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 2 Passport"
              name="child2_passport"
              value={formData.child2_passport ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Child 3 */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 3 Name"
              name="child3_name"
              value={formData.child3_name ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 3 Nickname"
              name="child3_nickname"
              value={formData.child3_nickname ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 3 Gender"
              name="child3_gender"
              value={formData.child3_gender ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 3 Age"
              name="child3_age"
              value={formData.child3_age?.toString() ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 3 DOB"
              name="child3_dob"
              type="date"
              value={
                formData.child3_dob
                  ? new Date(formData.child3_dob).toISOString().split("T")[0]
                  : ""
              }
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 3 ID Type"
              name="child3_id_type"
              value={formData.child3_id_type ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 3 IC"
              name="child3_ic"
              value={formData.child3_ic ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Child 3 Passport"
              name="child3_passport"
              value={formData.child3_passport ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Additional Child 1 */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 1 Name"
              name="add_child1_name"
              value={formData.add_child1_name ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 1 Nickname"
              name="add_child1_nickname"
              value={formData.add_child1_nickname ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 1 Gender"
              name="add_child1_gender"
              value={formData.add_child1_gender ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 1 Age"
              name="add_child1_age"
              value={formData.add_child1_age?.toString() ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 1 DOB"
              name="add_child1_dob"
              type="date"
              value={
                formData.add_child1_dob
                  ? new Date(formData.add_child1_dob)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 1 ID Type"
              name="add_child1_id_type"
              value={formData.add_child1_id_type ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 1 IC"
              name="add_child1_ic"
              value={formData.add_child1_ic ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 1 Passport"
              name="add_child1_passport"
              value={formData.add_child1_passport ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Additional Child 2 */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 2 Name"
              name="add_child2_name"
              value={formData.add_child2_name ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 2 Nickname"
              name="add_child2_nickname"
              value={formData.add_child2_nickname ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 2 Gender"
              name="add_child2_gender"
              value={formData.add_child2_gender ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 2 Age"
              name="add_child2_age"
              value={formData.add_child2_age?.toString() ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 2 DOB"
              name="add_child2_dob"
              type="date"
              value={
                formData.add_child2_dob
                  ? new Date(formData.add_child2_dob)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 2 ID Type"
              name="add_child2_id_type"
              value={formData.add_child2_id_type ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 2 IC"
              name="add_child2_ic"
              value={formData.add_child2_ic ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 2 Passport"
              name="add_child2_passport"
              value={formData.add_child2_passport ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Additional Child 3 */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 3 Name"
              name="add_child3_name"
              value={formData.add_child3_name ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 3 Nickname"
              name="add_child3_nickname"
              value={formData.add_child3_nickname ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 3 Gender"
              name="add_child3_gender"
              value={formData.add_child3_gender ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 3 Age"
              name="add_child3_age"
              value={formData.add_child3_age?.toString() ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 3 DOB"
              name="add_child3_dob"
              type="date"
              value={
                formData.add_child3_dob
                  ? new Date(formData.add_child3_dob)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 3 ID Type"
              name="add_child3_id_type"
              value={formData.add_child3_id_type ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 3 IC"
              name="add_child3_ic"
              value={formData.add_child3_ic ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Child 3 Passport"
              name="add_child3_passport"
              value={formData.add_child3_passport ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>

          {/* Package and Payment Information */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Package Default"
              name="package_default"
              value={formData.package_default.toString()}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Addon Children Below 4"
              name="addon_children_below_4"
              value={formData.addon_children_below_4.toString()}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Addon Children 5 to 10"
              name="addon_children_5_to_10"
              value={formData.addon_children_5_to_10.toString()}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Addon Above 10"
              name="addon_above_10"
              value={formData.addon_above_10.toString()}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="How Did You Hear About Us?"
              name="heard_info"
              value={formData.heard_info}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Other Referral Information"
              name="heard_info_others"
              value={formData.heard_info_others ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Referral Code"
              name="heard_info_scode"
              value={formData.heard_info_scode ?? ""}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Total Amount"
              name="total_amount"
              value={formData.total_amount}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Upload New Receipt (optional)</InputLabel>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleReceiptChange}
            />
            {formData.payment_image && (
              <IconButton
                onClick={() => onViewReceipt(formData.payment_image ?? "")}
              >
                <VisibilityIcon />
                View Receipt
              </IconButton>
            )}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditRegistrationModal;
