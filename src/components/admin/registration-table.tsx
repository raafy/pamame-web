"use client";

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { Visibility as VisibilityIcon, Delete as DeleteIcon } from '@mui/icons-material';
import type { Registration } from 'registration';

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
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRegistrations.map((registration, index) => (
            <TableRow key={registration.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{registration.main_contact === "Guardian 1" ? registration.guardian1_name : registration.guardian2_name}</TableCell>
              <TableCell>{registration.main_contact === "Guardian 2" ? registration.guardian1_contact_no : registration.guardian2_contact_no}</TableCell>
              <TableCell>
                {new Date(registration.created_at).toLocaleDateString()}
              </TableCell>
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
