"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import type { Registration } from "registration";

interface RegistrationTableProps {
  registrations: Registration[];
  onView: (registration: Registration) => void;
  onDeleteRequest: (registration: Registration) => void;
}

const RegistrationTable: React.FC<RegistrationTableProps> = ({
  registrations,
  onView,
  onDeleteRequest,
}) => {
  const sortedRegistrations = [...registrations].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="font-bold">No.</TableCell>
            <TableCell className="font-bold">Created Date</TableCell>
            <TableCell className="font-bold">Name</TableCell>
            <TableCell className="font-bold">Phone Number</TableCell>
            <TableCell className="font-bold">Pax</TableCell>
            <TableCell className="font-bold">Amount Paid</TableCell>
            <TableCell className="font-bold">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRegistrations.map((registration, index) => (
            <TableRow key={registration.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                {new Date(registration.created_at).toLocaleDateString("ms-MY")}
              </TableCell>
              <TableCell>
                {registration.main_contact === "Guardian 1"
                  ? registration.guardian1_name
                  : registration.guardian2_name}
              </TableCell>
              <TableCell>
                {registration.main_contact === "Guardian 2"
                  ? registration.guardian1_contact_no
                  : registration.guardian2_contact_no}
              </TableCell>
              <TableCell>
                {registration.package_default === 2800
                  ? Math.floor(2 + registration.addon_above_10 / 450)
                  : Math.floor(1 + registration.addon_above_10 / 450)}{" "}
                Adult(s){" "}
                {Math.floor(
                  registration.addon_children_below_4 / 60 +
                    registration.addon_children_5_to_10 / 900 +
                    1,
                )}{" "}
                Kid(s)
              </TableCell>
              <TableCell>RM {registration.total_amount}</TableCell>
              <TableCell>
                <IconButton onClick={() => onView(registration)}>
                  <VisibilityIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => onDeleteRequest(registration)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegistrationTable;
