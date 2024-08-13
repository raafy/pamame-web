import React, { useState } from "react";
import {
  Modal,
  Button,
  TextField,
  Grid,
  InputLabel,
  IconButton,
} from "@mui/material";
import { Visibility as VisibilityIcon } from "@mui/icons-material";

interface Registration {
  id: number;
  guardian1_name: string;
  guardian1_contact_no: string;
  guardian1_id_type: string;
  guardian1_ic?: string | null;
  guardian1_passport?: string | null;
  guardian1_relationship: string;
  guardian2_name: string;
  guardian2_contact_no: string;
  guardian2_id_type: string;
  guardian2_ic?: string | null;
  guardian2_passport?: string | null;
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
  add_adult1_ic?: string | null;
  add_adult1_relationship?: string;
  add_adult2_name?: string;
  add_adult2_contact_no?: string;
  add_adult2_ic?: string | null;
  add_adult2_relationship?: string;
  add_adult3_name?: string;
  add_adult3_contact_no?: string;
  add_adult3_ic?: string | null;
  add_adult3_relationship?: string;
  children_amount: number;
  child1_name: string;
  child1_nickname: string;
  child1_gender: string;
  child1_age: number;
  child1_dob?: Date | null;
  child1_id_type: string;
  child1_ic?: string | null;
  child1_passport?: string | null;
  child2_name?: string;
  child2_nickname?: string;
  child2_gender?: string;
  child2_age?: number;
  child2_dob?: Date | null;
  child2_id_type?: string;
  child2_ic?: string | null;
  child2_passport?: string | null;
  child3_name?: string;
  child3_nickname?: string;
  child3_gender?: string;
  child3_age?: number;
  child3_dob?: Date | null;
  child3_id_type?: string;
  child3_ic?: string | null;
  child3_passport?: string | null;
  add_child_amount?: number;
  add_child1_name?: string;
  add_child1_nickname?: string;
  add_child1_gender?: string;
  add_child1_age?: number;
  add_child1_dob?: Date | null;
  add_child1_id_type?: string;
  add_child1_ic?: string | null;
  add_child1_passport?: string | null;
  add_child2_name?: string;
  add_child2_nickname?: string;
  add_child2_gender?: string;
  add_child2_age?: number;
  add_child2_dob?: Date | null;
  add_child2_id_type?: string;
  add_child2_ic?: string | null;
  add_child2_passport?: string | null;
  add_child3_name?: string;
  add_child3_nickname?: string;
  add_child3_gender?: string;
  add_child3_age?: number;
  add_child3_dob?: Date | null;
  add_child3_id_type?: string;
  add_child3_ic?: string | null;
  add_child3_passport?: string | null;
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


interface AddRegistrationModalProps {
  onClose: () => void;
  onSave: (newRegistration: Registration, receiptFile: File | null) => void;
}

const AddRegistrationModal: React.FC<AddRegistrationModalProps> = ({
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<Registration>({
    id: 0,
    guardian1_name: "",
    guardian1_contact_no: "",
    guardian1_id_type: "",
    guardian1_ic: null,
    guardian1_passport: null,
    guardian1_relationship: "",
    guardian2_name: "",
    guardian2_contact_no: "",
    guardian2_id_type: "",
    guardian2_ic: null,
    guardian2_passport: null,
    guardian2_relationship: "",
    main_contact: "",
    address: "",
    email: "",
    emergency_name: "",
    emergency_contact_no: "",
    emergency_relationship: "",
    add_adult_amount: 0,
    add_adult1_name: undefined,
    add_adult1_contact_no: undefined,
    add_adult1_ic: null,
    add_adult1_relationship: undefined,
    add_adult2_name: undefined,
    add_adult2_contact_no: undefined,
    add_adult2_ic: null,
    add_adult2_relationship: undefined,
    add_adult3_name: undefined,
    add_adult3_contact_no: undefined,
    add_adult3_ic: null,
    add_adult3_relationship: undefined,
    children_amount: 0,
    child1_name: "",
    child1_nickname: "",
    child1_gender: "",
    child1_age: 0,
    child1_dob: null,
    child1_id_type: "",
    child1_ic: null,
    child1_passport: null,
    child2_name: undefined,
    child2_nickname: undefined,
    child2_gender: undefined,
    child2_age: undefined,
    child2_dob: null,
    child2_id_type: undefined,
    child2_ic: null,
    child2_passport: null,
    child3_name: undefined,
    child3_nickname: undefined,
    child3_gender: undefined,
    child3_age: undefined,
    child3_dob: null,
    child3_id_type: undefined,
    child3_ic: null,
    child3_passport: null,
    add_child_amount: undefined,
    add_child1_name: undefined,
    add_child1_nickname: undefined,
    add_child1_gender: undefined,
    add_child1_age: undefined,
    add_child1_dob: null,
    add_child1_id_type: undefined,
    add_child1_ic: null,
    add_child1_passport: null,
    add_child2_name: undefined,
    add_child2_nickname: undefined,
    add_child2_gender: undefined,
    add_child2_age: undefined,
    add_child2_dob: null,
    add_child2_id_type: undefined,
    add_child2_ic: null,
    add_child2_passport: null,
    add_child3_name: undefined,
    add_child3_nickname: undefined,
    add_child3_gender: undefined,
    add_child3_age: undefined,
    add_child3_dob: null,
    add_child3_id_type: undefined,
    add_child3_ic: null,
    add_child3_passport: null,
    package_default: 0,
    addon_children_below_4: 0,
    addon_children_5_to_10: 0,
    addon_above_10: 0,
    heard_info: "",
    heard_info_others: undefined,
    heard_info_scode: undefined,
    payment_image: undefined,
    total_amount: "",
    created_at: new Date(),
    updated_at: new Date(),
  });

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setReceiptFile(e.target.files[0]);
    }
  };

  const handleSave = () => {
    onSave(formData, receiptFile);
  };

  return (
    <Modal className="overflow-y-scroll" open={true} onClose={onClose}>
      <div className="rounded-md bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold">Add New Registration</h2>
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
            <TextField
              type="file"
              fullWidth
              onChange={handleFileChange}
              inputProps={{ accept: "image/*,.pdf" }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} className="text-right">
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
          <Button onClick={onClose} variant="outlined" color="secondary">
            Cancel
          </Button>
        </Grid>
      </div>
    </Modal>
  );
};

export default AddRegistrationModal;
