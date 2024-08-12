"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

interface Registration {
  id: number;
  guardian1_name: string;
  guardian1_contact_no: string;
  guardian2_name: string;
  guardian2_contact_no: string;
  main_contact: string;
  email: string;
  payment_image?: string;
}

interface RegistrationTableProps {
  registrations: Registration[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onViewReceipt: (imagePath: string) => void;
}

const RegistrationTable: React.FC<RegistrationTableProps> = ({
  registrations,
  onEdit,
  onDelete,
  onViewReceipt,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRegistrations = registrations.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <Paper className="overflow-hidden">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Main Contact</TableCell>
              <TableCell>Guardian 1 Name</TableCell>
              <TableCell>Guardian 2 Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="center">Receipt</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRegistrations.map((registration, index) => (
              <TableRow key={registration.id}>
                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                <TableCell>{registration.main_contact}</TableCell>
                <TableCell>{registration.guardian1_name}</TableCell>
                <TableCell>{registration.guardian2_name}</TableCell>
                <TableCell>{registration.email}</TableCell>
                <TableCell align="center">
                  {registration.payment_image ? (
                    <IconButton
                      color="primary"
                      onClick={() => onViewReceipt(registration.payment_image!)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  ) : (
                    "N/A"
                  )}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    onClick={() => onEdit(registration.id)}
                    size={isMobile ? "small" : "medium"}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => onDelete(registration.id)}
                    size={isMobile ? "small" : "medium"}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={registrations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default RegistrationTable;
