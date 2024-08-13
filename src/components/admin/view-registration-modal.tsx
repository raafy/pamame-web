import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { Registration } from "registration";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Image from "next/image";

interface ViewRegistrationModalProps {
  registration: Registration;
  onClose: () => void;
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


const ViewRegistrationModal: React.FC<ViewRegistrationModalProps> = ({
  registration,
  onClose,
}) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const isImage = (fileName: string) => {
    return /\.(jpg|jpeg|png|gif)$/i.test(fileName);
  };

  const isPDF = (fileName: string) => {
    return /\.pdf$/i.test(fileName);
  };
  
  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>View Registration</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2 className="font-bold mb-2">Main Contact Information</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Main Contact</TableCell>
                  <TableCell>{registration.main_contact}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>{registration.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Address</TableCell>
                  <TableCell>{registration.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Referral</TableCell>
                  <TableCell>{registration.heard_info}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>

          <Grid item xs={12}>
            <h2 className="font-bold mb-2">Guardian 1 Information</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Guardian 1 Name</TableCell>
                  <TableCell>{registration.guardian1_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Guardian 1 Contact No</TableCell>
                  <TableCell>{registration.guardian1_contact_no}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Guardian 1 ID Type</TableCell>
                  <TableCell>{registration.guardian1_id_type}</TableCell>
                </TableRow>
                {registration.guardian1_id_type === "NRIC" ? (
                  <TableRow>
                    <TableCell>Guardian 1 IC</TableCell>
                    <TableCell>{registration.guardian1_ic}</TableCell>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell>Guardian 1 Passport</TableCell>
                    <TableCell>{registration.guardian1_passport}</TableCell>
                  </TableRow>
                )}
                <TableRow>
                  <TableCell>Guardian 1 Relationship</TableCell>
                  <TableCell>{registration.guardian1_relationship}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>

          <Grid item xs={12}>
            <h2 className="font-bold mb-2">Guardian 2 Information</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Guardian 2 Name</TableCell>
                  <TableCell>{registration.guardian2_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Guardian 2 Contact No</TableCell>
                  <TableCell>{registration.guardian2_contact_no}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Guardian 2 ID Type</TableCell>
                  <TableCell>{registration.guardian2_id_type}</TableCell>
                </TableRow>
                {registration.guardian2_id_type === "NRIC" ? (
                  <TableRow>
                    <TableCell>Guardian 2 IC</TableCell>
                    <TableCell>{registration.guardian2_ic}</TableCell>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell>Guardian 2 Passport</TableCell>
                    <TableCell>{registration.guardian2_passport}</TableCell>
                  </TableRow>
                )}
                <TableRow>
                  <TableCell>Guardian 2 Relationship</TableCell>
                  <TableCell>{registration.guardian2_relationship}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>

          {registration.add_adult_amount > 0 && (
            <Grid item xs={12}>
              <h2 className="font-bold mb-2">Additional Adult 1 Information</h2>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Additional Adult 1 Name</TableCell>
                    <TableCell>{registration.add_adult1_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Adult 1 Contact No</TableCell>
                    <TableCell>{registration.add_adult1_contact_no}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Adult 1 IC</TableCell>
                    <TableCell>{registration.add_adult1_ic}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Adult 1 Relationship</TableCell>
                    <TableCell>
                      {registration.add_adult1_relationship}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          )}

          {registration.add_adult_amount > 1 && (
            <Grid item xs={12}>
              <h2 className="font-bold mb-2">Additional Adult 2 Information</h2>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Additional Adult 2 Name</TableCell>
                    <TableCell>{registration.add_adult2_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Adult 2 Contact No</TableCell>
                    <TableCell>{registration.add_adult2_contact_no}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Adult 2 IC</TableCell>
                    <TableCell>{registration.add_adult2_ic}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Adult 2 Relationship</TableCell>
                    <TableCell>
                      {registration.add_adult2_relationship}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          )}

          {registration.add_adult_amount > 2 && (
            <Grid item xs={12}>
              <h2 className="font-bold mb-2">Additional Adult 3 Information</h2>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Additional Adult 3 Name</TableCell>
                    <TableCell>{registration.add_adult3_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Adult 3 Contact No</TableCell>
                    <TableCell>{registration.add_adult3_contact_no}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Adult 3 IC</TableCell>
                    <TableCell>{registration.add_adult3_ic}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Adult 3 Relationship</TableCell>
                    <TableCell>
                      {registration.add_adult3_relationship}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          )}

          <Grid item xs={12}>
            <h2 className="font-bold mb-2">Child 1 Information</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Child 1 Name</TableCell>
                  <TableCell>{registration.child1_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Child 1 Nickname</TableCell>
                  <TableCell>{registration.child1_nickname}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Child 1 Gender</TableCell>
                  <TableCell>{registration.child1_gender}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Child 1 Age</TableCell>
                  <TableCell>{registration.child1_age}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Child 1 DOB</TableCell>
                  <TableCell>
                    {registration.child1_dob
                      ? new Date(registration.child1_dob).toLocaleDateString()
                      : ""}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Child 1 ID Type</TableCell>
                  <TableCell>{registration.child1_id_type}</TableCell>
                </TableRow>
                {registration.child1_id_type === "MyKid" ? (
                  <TableRow>
                    <TableCell>Child 1 MyKid No</TableCell>
                    <TableCell>{registration.child1_ic}</TableCell>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell>Child 1 Passport</TableCell>
                    <TableCell>{registration.child1_passport}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Grid>

          {registration.children_amount > 1 && (
            <Grid item xs={12}>
              <h2 className="font-bold mb-2">Child 2 Information</h2>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Child 2 Name</TableCell>
                    <TableCell>{registration.child2_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Child 2 Nickname</TableCell>
                    <TableCell>{registration.child2_nickname}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Child 2 Gender</TableCell>
                    <TableCell>{registration.child2_gender}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Child 2 Age</TableCell>
                    <TableCell>{registration.child2_age}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Child 2 DOB</TableCell>
                    <TableCell>
                      {registration.child2_dob
                        ? new Date(registration.child2_dob).toLocaleDateString()
                        : ""}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Child 2 ID Type</TableCell>
                    <TableCell>{registration.child2_id_type}</TableCell>
                  </TableRow>
                  {registration.child2_id_type === "MyKid" ? (
                    <TableRow>
                      <TableCell>Child 2 MyKid No</TableCell>
                      <TableCell>{registration.child2_ic}</TableCell>
                    </TableRow>
                  ) : (
                    <TableRow>
                      <TableCell>Child 2 Passport</TableCell>
                      <TableCell>{registration.child2_passport}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Grid>
          )}

          {registration.children_amount > 2 && (
            <Grid item xs={12}>
              <h2 className="font-bold mb-2">Child 3 Information</h2>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Child 3 Name</TableCell>
                    <TableCell>{registration.child3_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Child 3 Nickname</TableCell>
                    <TableCell>{registration.child3_nickname}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Child 3 Gender</TableCell>
                    <TableCell>{registration.child3_gender}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Child 3 Age</TableCell>
                    <TableCell>{registration.child3_age}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Child 3 DOB</TableCell>
                    <TableCell>
                      {registration.child3_dob
                        ? new Date(registration.child3_dob).toLocaleDateString()
                        : ""}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Child 3 ID Type</TableCell>
                    <TableCell>{registration.child3_id_type}</TableCell>
                  </TableRow>
                  {registration.child3_id_type === "MyKid" ? (
                    <TableRow>
                      <TableCell>Child 3 MyKid No</TableCell>
                      <TableCell>{registration.child3_ic}</TableCell>
                    </TableRow>
                  ) : (
                    <TableRow>
                      <TableCell>Child 3 Passport</TableCell>
                      <TableCell>{registration.child3_passport}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Grid>
          )}

          {registration.add_child_amount as number > 0 && (
            <Grid item xs={12}>
              <h2 className="font-bold mb-2">Additional Child 1 Information</h2>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Additional Child 1 Name</TableCell>
                    <TableCell>{registration.add_child1_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 1 Nickname</TableCell>
                    <TableCell>{registration.add_child1_nickname}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 1 Gender</TableCell>
                    <TableCell>{registration.add_child1_gender}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 1 Age</TableCell>
                    <TableCell>{registration.add_child1_age}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 1 DOB</TableCell>
                    <TableCell>
                      {registration.add_child1_dob
                        ? new Date(
                            registration.add_child1_dob,
                          ).toLocaleDateString()
                        : ""}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 1 ID Type</TableCell>
                    <TableCell>{registration.add_child1_id_type}</TableCell>
                  </TableRow>
                  {registration.add_child1_id_type === "MyKid" ? (
                    <TableRow>
                      <TableCell>Additional Child 1 MyKid No</TableCell>
                      <TableCell>{registration.add_child1_ic}</TableCell>
                    </TableRow>
                  ) : (
                    <TableRow>
                      <TableCell>Additional Child 1 Passport</TableCell>
                      <TableCell>{registration.add_child1_passport}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Grid>
          )}

          {registration.add_child_amount as number > 1 && (
            <Grid item xs={12}>
              <h2 className="font-bold mb-2">Additional Child 2 Information</h2>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Additional Child 2 Name</TableCell>
                    <TableCell>{registration.add_child2_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 2 Nickname</TableCell>
                    <TableCell>{registration.add_child2_nickname}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 2 Gender</TableCell>
                    <TableCell>{registration.add_child2_gender}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 2 Age</TableCell>
                    <TableCell>{registration.add_child2_age}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 2 DOB</TableCell>
                    <TableCell>
                      {registration.add_child2_dob
                        ? new Date(
                            registration.add_child2_dob,
                          ).toLocaleDateString()
                        : ""}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 2 ID Type</TableCell>
                    <TableCell>{registration.add_child2_id_type}</TableCell>
                  </TableRow>
                  {registration.add_child2_id_type === "MyKid" ? (
                    <TableRow>
                      <TableCell>Additional Child 2 MyKid No</TableCell>
                      <TableCell>{registration.add_child2_ic}</TableCell>
                    </TableRow>
                  ) : (
                    <TableRow>
                      <TableCell>Additional Child 2 Passport</TableCell>
                      <TableCell>{registration.add_child2_passport}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Grid>
          )}

          {registration.add_child_amount as number > 2 && (
            <Grid item xs={12}>
              <h2 className="font-bold mb-2">Additional Child 3 Information</h2>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Additional Child 3 Name</TableCell>
                    <TableCell>{registration.add_child3_name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 3 Nickname</TableCell>
                    <TableCell>{registration.add_child3_nickname}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 3 Gender</TableCell>
                    <TableCell>{registration.add_child3_gender}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 3 Age</TableCell>
                    <TableCell>{registration.add_child3_age}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 3 DOB</TableCell>
                    <TableCell>
                      {registration.add_child3_dob
                        ? new Date(
                            registration.add_child3_dob,
                          ).toLocaleDateString()
                        : ""}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Additional Child 3 ID Type</TableCell>
                    <TableCell>{registration.add_child3_id_type}</TableCell>
                  </TableRow>
                  {registration.add_child3_id_type === "MyKid" ? (
                    <TableRow>
                      <TableCell>Additional Child 3 MyKid No</TableCell>
                      <TableCell>{registration.add_child3_ic}</TableCell>
                    </TableRow>
                  ) : (
                    <TableRow>
                      <TableCell>Additional Child 3 Passport</TableCell>
                      <TableCell>{registration.add_child3_passport}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Grid>
          )}


          <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
          Package Details
        </Typography>
            <List>
              {registration.package_default === 2800 && (
                <ListItem>
                  <ListItemText primary="2 Adults 1 Child" />
                </ListItem>
              )}
              {registration.package_default === 1900 && (
                <ListItem>
                  <ListItemText primary="1 Adult 1 Child" />
                </ListItem>
              )}
              {registration.addon_children_below_4 > 0 && (
                <ListItem>
                  <ListItemText
                    primary={`添加额外孩子 (<4yo）Additional Child (<4yo) x ${
                      registration.addon_children_below_4 / 60
                    }`}
                  />
                </ListItem>
              )}
              {registration.addon_children_5_to_10 > 0 && (
                <ListItem>
                  <ListItemText
                    primary={`添加额外孩子 (5-10yo）Additional Child (5-10yo) x ${
                      registration.addon_children_5_to_10 / 900
                    }`}
                  />
                </ListItem>
              )}
              {registration.addon_above_10 > 0 && (
                <ListItem>
                  <ListItemText
                    primary={`添加额外成人 (>12yo）Additional Adult (>12yo) x ${
                      registration.addon_above_10 / 450
                    }`}
                  />
                </ListItem>
              )}
            </List>
            <Typography variant="subtitle1">
              <strong>Total Amount Paid: </strong>RM {registration.total_amount}
            </Typography>
          </Grid>
          <Grid item xs={12}>
          </Grid>

          {registration.payment_image && (
            <Grid item xs={12}>
              <Typography variant="h6">Receipt</Typography>
              {isImage(registration.payment_image) && (
                <Image
                  src={registration.payment_image}
                  alt="Receipt"
                  style={{ width: "100%", height: "auto" }}
                />
              )}
              {isPDF(registration.payment_image) && (
                <div>
                <Document file={registration.payment_image} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
              </div>
              )}
              {!isImage(registration.payment_image) && !isPDF(registration.payment_image) && (
                <Typography>Unsupported file type</Typography>
              )}
            </Grid>
          )}

        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewRegistrationModal;
