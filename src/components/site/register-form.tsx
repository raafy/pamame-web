"use client";

import UploadIcon from "@/assets/icons/upload.svg";
import ThankYouGif from "@/assets/images/thank-you.gif";
import InputMask from "@mona-health/react-input-mask";
import { FileCopy } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContentText,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Controller, useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";

interface FormValues {
  guardian1Name: string;
  guardian1ContactNo: string;
  guardian1IDType: string;
  guardian1IC?: string;
  guardian1Passport?: string;
  guardian1Relationship: string;
  guardian2Name: string;
  guardian2ContactNo: string;
  guardian2IDType: string;
  guardian2IC?: string;
  guardian2Passport?: string;
  guardian2Relationship: string;
  mainContact: string[];
  address: string;
  email: string;
  emergencyName: string;
  emergencyContactNo: string;
  emergencyRelationship: string;
  addAdultAmount: number;
  addAdult1Name?: string;
  addAdult1ContactNo?: string;
  addAdult1IC?: string;
  addAdult1Relationship?: string;
  addAdult2Name?: string;
  addAdult2ContactNo?: string;
  addAdult2IC?: string;
  addAdult2Relationship?: string;
  addAdult3Name?: string;
  addAdult3ContactNo?: string;
  addAdult3IC?: string;
  addAdult3Relationship?: string;
  childrenAmount: number;
  child1Name: string;
  child1Nickname: string;
  child1Gender: string;
  child1Age: number;
  child1DOB: string | null;
  child1IDType: string;
  child1IC?: string;
  child1Passport?: string;
  child2Name?: string;
  child2Nickname?: string;
  child2Gender?: string;
  child2Age?: number;
  child2DOB?: string | null;
  child2IDType?: string;
  child2IC?: string;
  child2Passport?: string;
  child3Name?: string;
  child3Nickname: string;
  child3Gender?: string;
  child3Age?: number;
  child3DOB?: string | null;
  child3IDType?: string;
  child3IC?: string;
  child3Passport?: string;
  addChildAmount: number;
  addChild1Name: string;
  addChild1Nickname: string;
  addChild1Gender: string;
  addChild1Age: number;
  addChild1DOB: string | null;
  addChild1IDType: string;
  addChild1IC?: string;
  addChild1Passport?: string;
  addChild2Name?: string;
  addChild2Nickname?: string;
  addChild2Gender?: string;
  addChild2Age?: number;
  addChild2DOB?: string | null;
  addChild2IDType?: string;
  addChild2IC?: string;
  addChild2Passport?: string;
  addChild3Name?: string;
  addChild3Nickname: string;
  addChild3Gender?: string;
  addChild3Age?: number;
  addChild3DOB?: string | null;
  addChild3IDType?: string;
  addChild3IC?: string;
  addChild3Passport?: string;
  packageDefault: number;
  addonChildrenBelow4: number;
  addonChildren5to10: number;
  addonAbove10: number;
  heardInfo: string;
  heardInfoOthers?: string;
  heardInfoSCode?: string;
  paymentImage: File | null;
  term1: boolean;
  term2: boolean;
  term3: boolean;
  totalAmount: number;
}

interface DropzoneFieldProps {
  onDrop: (file: File) => void;
  file: File | null;
}

const DropzoneField: React.FC<DropzoneFieldProps> = ({ onDrop, file }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
      "application/pdf": [".pdf"],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onDrop(acceptedFiles[0]);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #000",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f7f7f7",
        borderRadius: "8px",
      }}
    >
      <input {...getInputProps()} />
      {!file && (
        <div className="flex flex-col items-center gap-2">
          <Image src={UploadIcon} alt="Upload Icon" width={30} />
          <p className="text-sm font-bold">
            Drag and drop payment receipt here, or click to select a file
          </p>
        </div>
      )}
      {file?.type.startsWith("image/") ? (
        <Image
          src={URL.createObjectURL(file)}
          alt={file.name}
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      ) : (
        <span>{file?.name}</span>
      )}
    </div>
  );
};

const RegisterForm: React.FC = () => {
  const { toast } = useToast();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [total, setTotal] = useState(0);

  const router = useRouter();

  const steps = [`Adult's Details`, `Child's Details`, `Payment`];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setTimeout(() => {
      executeScroll();
    }, 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setTimeout(() => {
      executeScroll();
    }, 1);
  };

  const handleClose = () => {
    setOpen(false);
    if (success) {
      router.push("/");
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (activeStep === steps.length - 1) {
      setLoading(true);
      setOpen(true);
      try {
        const formData = new FormData();
        formData.set("file", data.paymentImage as File);
        formData.set("total", total.toString());
        formData.set("data", JSON.stringify(data));

        const response = await fetch("/api/registrations", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          setLoading(false);
          setSuccess(true);
        } else {
          setLoading(false);
          setSuccess(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
        setSuccess(false);
      }
    } else {
      handleNext();
    }
  };

  async function copyText(entryText: string) {
    try {
      await navigator.clipboard.writeText(entryText);
    } catch (e) {
      console.log(e);
    }
  }

  const form = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      childrenAmount: 1,
      packageDefault: 0,
      mainContact: [""],
      addAdultAmount: 0,
      guardian1IDType: "NRIC",
      guardian2IDType: "NRIC",
      child1IDType: "MyKid",
      child2IDType: "MyKid",
      child3IDType: "MyKid",
      addChild1IDType: "MyKid",
      addChild2IDType: "MyKid",
      addChild3IDType: "MyKid",
      addChildAmount: 0,
      paymentImage: null,
      child1DOB: null,
      child2DOB: null,
      child3DOB: null,
      addChild1DOB: null,
      addChild2DOB: null,
      addChild3DOB: null,
      guardian1Relationship: "爸爸 Father",
      guardian2Relationship: "爸爸 Father",
      addAdult1Relationship: "哥哥 Brother",
      addAdult2Relationship: "哥哥 Brother",
      addAdult3Relationship: "哥哥 Brother",
    },
  });

  const { register, handleSubmit, formState, watch, control } = form;
  const { errors } = formState;
  const {
    childrenAmount,
    addonChildrenBelow4,
    addonChildren5to10,
    addonAbove10,
    packageDefault,
    heardInfo,
    mainContact,
    guardian1IDType,
    guardian2IDType,
    addAdultAmount,
    child1IDType,
    child2IDType,
    child3IDType,
    addChild1IDType,
    addChild2IDType,
    addChild3IDType,
    addChildAmount,
    term1,
    term2,
    term3,
    guardian1Relationship,
    guardian2Relationship,
    addAdult1Relationship,
    addAdult2Relationship,
    addAdult3Relationship,
    child1Gender,
    child2Gender,
    child3Gender,
    addChild1Gender,
    addChild2Gender,
    addChild3Gender,
  } = watch();

  useEffect(() => {
    setTotal(
      Number(packageDefault) +
        Number(addonChildrenBelow4) +
        Number(addonChildren5to10) +
        Number(addonAbove10),
    );
  }, [packageDefault, addonChildrenBelow4, addonChildren5to10, addonAbove10]);

  const copyHandle = () => {
    copyText("8605345668");
    toast({ title: "Copied Account Number to Clipboard!" });
  };

  const formRef = useRef<HTMLFormElement | null>(null);

  const executeScroll = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <article>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form
          ref={formRef}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 flex w-full max-w-screen-sm flex-col gap-12 rounded-2xl bg-white p-8 drop-shadow-lg"
        >
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>
                    <p className="text-center font-beachday text-xs sm:text-base">
                      {label}
                    </p>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === 0 && (
            <>
              <div>
                <p>
                  <strong>活动详情：</strong>
                  <br />
                  <br />
                  📅 日期 Date：31st Oct - 2nd Nov 2024 (Thursday- Saturday)
                  <br />
                  📍 地点 Location：Camp Lù Yīng, Kampung Bukit Tinggi, Bentong
                  <br />
                  <br />
                  报到时间 Check-in Time: 9.30am - 10.30am
                  <br />
                  出营时间 Check-out Time: 12pm - 12.30pm
                  <br />
                  <br />
                </p>
              </div>
              <h1 className="font-beachday text-xl md:text-3xl">
                监护人资料 Adult&apos;s Details
              </h1>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <FormControlLabel
                    required
                    value="Guardian 1"
                    disabled={mainContact[0] === "Guardian 2" ? true : false}
                    control={
                      <Checkbox
                        checked={mainContact[0] === "Guardian 1" ? true : false}
                        {...register("mainContact", {
                          required: true,
                        })}
                      />
                    }
                    label="主要联系人 Main Contact Person"
                  />
                  <FormHelperText error={!!errors.mainContact}>
                    {!!errors.mainContact && "This field is required"}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    label="监护人1全名 Guardian 1 Full Name"
                    type="text"
                    fullWidth
                    required
                    {...register("guardian1Name", {
                      required: "This field is required",
                    })}
                    error={!!errors.guardian1Name}
                    helperText={errors.guardian1Name?.message}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    label="联络方式 Contact No"
                    type="tel"
                    fullWidth
                    required
                    {...register("guardian1ContactNo", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^(?:[+]6)?0(([0-9]{2}((\s[0-9]{3,4}\s[0-9]{4})|(-[0-9]{3,4}\s[0-9]{4})|(-[0-9]{7,8})))|([0-9]{9,10}))$/gm,
                        message: "Enter a valid phone number",
                      },
                    })}
                    error={!!errors.guardian1ContactNo}
                    helperText={errors.guardian1ContactNo?.message}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl required fullWidth>
                    <InputLabel id="guardian1-relationship">
                      关系 Relationship
                    </InputLabel>
                    <Select
                      variant="outlined"
                      labelId="guardian1-relationship"
                      label="关系 Relationship"
                      defaultValue={"爸爸 Father"}
                      value={guardian1Relationship}
                      error={!!errors.guardian1Relationship}
                      {...register("guardian1Relationship", {
                        required: true,
                      })}
                    >
                      <MenuItem value={"爸爸 Father"}>爸爸 Father</MenuItem>
                      <MenuItem value={"妈妈 Mother"}>妈妈 Mother</MenuItem>
                      <MenuItem value={"阿姨 Aunty"}>阿姨 Aunty</MenuItem>
                      <MenuItem value={"叔叔 Uncle"}>叔叔 Uncle</MenuItem>
                      <MenuItem value={"公公 Grandfather"}>
                        公公 Grandfather
                      </MenuItem>
                      <MenuItem value={"婆婆 Grandmother"}>
                        婆婆 Grandmother
                      </MenuItem>
                      <MenuItem value={"其他 Others"}>其他 Others</MenuItem>
                    </Select>
                    <FormHelperText error={!!errors.guardian1Relationship}>
                      {!!errors.guardian1Relationship &&
                        "This field is required"}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl required fullWidth>
                    <InputLabel id="guardian1-id-type">ID Type</InputLabel>
                    <Select
                      variant="outlined"
                      labelId="guardian1-id-type"
                      label="ID Type"
                      value={guardian1IDType}
                      error={!!errors.guardian1IDType}
                      {...register("guardian1IDType", {
                        required: true,
                      })}
                    >
                      <MenuItem value={"NRIC"}>NRIC</MenuItem>
                      <MenuItem value={"Passport"}>
                        Passport (for foreigners only)
                      </MenuItem>
                    </Select>
                    <FormHelperText error={!!errors.guardian1IDType}>
                      {!!errors.guardian1IDType && "This field is required"}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                {guardian1IDType === "NRIC" ? (
                  <Grid item xs={12} md={12}>
                    <Controller
                      name="guardian1IC"
                      control={control}
                      rules={{
                        required: "This field is required",
                        pattern: {
                          value: /^\d{6}-\d{2}-\d{4}$/,
                          message: "Enter a valid IC number",
                        },
                      }}
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <InputMask
                          mask={"999999-99-9999"}
                          maskPlaceholder="X"
                          value={value}
                          onChange={onChange}
                        >
                          <TextField
                            variant="outlined"
                            label="监护人1 IC号码 Guardian 1’s IC No"
                            type="text"
                            fullWidth
                            required
                            error={!!errors.guardian1IC}
                            helperText={errors.guardian1IC?.message}
                          />
                        </InputMask>
                      )}
                    />
                  </Grid>
                ) : guardian1IDType === "Passport" ? (
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="Guardian 护照号码 Guardian’s Passport No"
                      type="text"
                      fullWidth
                      required
                      {...register("guardian1Passport", {
                        required: "This field is required",
                      })}
                      error={!!errors.guardian1Passport}
                      helperText={errors.guardian1Passport?.message}
                    />
                  </Grid>
                ) : null}
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <FormControlLabel
                    required
                    value="Guardian 2"
                    disabled={mainContact[0] === "Guardian 1" ? true : false}
                    control={
                      <Checkbox
                        {...register("mainContact", { required: true })}
                      />
                    }
                    label="主要联系人 Main Contact Person"
                  />
                  <FormHelperText error={!!errors.mainContact}>
                    {!!errors.mainContact && "This field is required"}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    label="监护人2全名 Guardian 2 Full Name"
                    type="text"
                    fullWidth
                    required
                    {...register("guardian2Name", {
                      required: "This field is required",
                    })}
                    error={!!errors.guardian2Name}
                    helperText={errors.guardian2Name?.message}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    label="联络方式 Contact No"
                    type="tel"
                    fullWidth
                    required
                    {...register("guardian2ContactNo", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^(?:[+]6)?0(([0-9]{2}((\s[0-9]{3,4}\s[0-9]{4})|(-[0-9]{3,4}\s[0-9]{4})|(-[0-9]{7,8})))|([0-9]{9,10}))$/gm,
                        message: "Enter a valid phone number",
                      },
                    })}
                    error={!!errors.guardian2ContactNo}
                    helperText={errors.guardian2ContactNo?.message}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl required fullWidth>
                    <InputLabel id="guardian2-relationship">
                      关系 Relationship
                    </InputLabel>
                    <Select
                      variant="outlined"
                      labelId="guardian2-relationship"
                      label="关系 Relationship"
                      value={guardian2Relationship}
                      error={!!errors.guardian2Relationship}
                      {...register("guardian2Relationship", {
                        required: true,
                      })}
                    >
                      <MenuItem value={"爸爸 Father"}>爸爸 Father</MenuItem>
                      <MenuItem value={"妈妈 Mother"}>妈妈 Mother</MenuItem>
                      <MenuItem value={"阿姨 Aunty"}>阿姨 Aunty</MenuItem>
                      <MenuItem value={"叔叔 Uncle"}>叔叔 Uncle</MenuItem>
                      <MenuItem value={"公公 Grandfather"}>
                        公公 Grandfather
                      </MenuItem>
                      <MenuItem value={"婆婆 Grandmother"}>
                        婆婆 Grandmother
                      </MenuItem>
                      <MenuItem value={"其他 Others"}>其他 Others</MenuItem>
                    </Select>
                    <FormHelperText error={!!errors.guardian2Relationship}>
                      {!!errors.guardian2Relationship &&
                        "This field is required"}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl required fullWidth>
                    <InputLabel id="guardian2-id-type">ID Type</InputLabel>
                    <Select
                      variant="outlined"
                      labelId="guardian2-id-type"
                      label="ID Type"
                      value={guardian2IDType}
                      error={!!errors.guardian2IDType}
                      {...register("guardian2IDType", {
                        required: true,
                      })}
                    >
                      <MenuItem value={"NRIC"}>NRIC</MenuItem>
                      <MenuItem value={"Passport"}>
                        Passport (for foreigners only)
                      </MenuItem>
                    </Select>
                    <FormHelperText error={!!errors.guardian2IDType}>
                      {!!errors.guardian2IDType && "This field is required"}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                {guardian2IDType === "NRIC" ? (
                  <Grid item xs={12} md={12}>
                    <Controller
                      name="guardian2IC"
                      control={control}
                      rules={{
                        required: "This field is required",
                        pattern: {
                          value: /^\d{6}-\d{2}-\d{4}$/,
                          message: "Enter a valid IC number",
                        },
                      }}
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <InputMask
                          mask={"999999-99-9999"}
                          maskPlaceholder="X"
                          value={value}
                          onChange={onChange}
                        >
                          <TextField
                            variant="outlined"
                            label="监护人2 IC号码 Guardian 2’s IC No"
                            type="text"
                            fullWidth
                            required
                            error={!!errors.guardian2IC}
                            helperText={errors.guardian2IC?.message}
                          />
                        </InputMask>
                      )}
                    />
                  </Grid>
                ) : guardian2IDType === "Passport" ? (
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="Guardian 护照号码 Guardian’s Passport No"
                      type="text"
                      fullWidth
                      required
                      {...register("guardian2Passport", {
                        required: "This field is required",
                      })}
                      error={!!errors.guardian2Passport}
                      helperText={errors.guardian2Passport?.message}
                    />
                  </Grid>
                ) : null}
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    variant="outlined"
                    label="地址 Address"
                    type="text"
                    fullWidth
                    required
                    {...register("address", {
                      required: "This field is required",
                    })}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                        message: "Enter a valid email address",
                      },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    variant="outlined"
                    label="紧急联系人姓名 Emergency Contact Person Name"
                    type="text"
                    fullWidth
                    required
                    {...register("emergencyName", {
                      required: "This field is required",
                    })}
                    error={!!errors.emergencyName}
                    helperText={errors.emergencyName?.message}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    label="紧急联络方式 Phone Number"
                    type="tel"
                    fullWidth
                    required
                    {...register("emergencyContactNo", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^(?:[+]6)?0(([0-9]{2}((\s[0-9]{3,4}\s[0-9]{4})|(-[0-9]{3,4}\s[0-9]{4})|(-[0-9]{7,8})))|([0-9]{9,10}))$/gm,
                        message: "Enter a valid phone number",
                      },
                    })}
                    error={!!errors.emergencyContactNo}
                    helperText={errors.emergencyContactNo?.message}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    label="与监护人的关系 Relationship with Guardian"
                    type="text"
                    fullWidth
                    required
                    {...register("emergencyRelationship", {
                      required: "This field is required",
                    })}
                    error={!!errors.emergencyRelationship}
                    helperText={errors.emergencyRelationship?.message}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <Controller
                    name="heardInfo"
                    control={control}
                    rules={{ required: true }}
                    render={() => {
                      return (
                        <FormControl
                          error={!!errors.heardInfo}
                          required
                          fullWidth
                        >
                          <FormLabel id="radio-group-id">
                            请问您是从哪个管道得知PaMaMe此次活动信息？
                            <br />
                            How did you find out about this PaMaMe event? (Tick
                            Box, only 1)
                          </FormLabel>
                          <RadioGroup aria-labelledby="radio-group-id">
                            <FormControlLabel
                              value="小森活 Moment (Little Life Moment)"
                              control={
                                <Radio
                                  checked={
                                    heardInfo ===
                                    "小森活 Moment (Little Life Moment)"
                                      ? true
                                      : false
                                  }
                                  {...register("heardInfo")}
                                />
                              }
                              label="小森活 Moment (Little Life Moment)"
                            />
                            <FormControlLabel
                              value="PaMaMe 粑粑麻麻与我"
                              control={
                                <Radio
                                  checked={
                                    heardInfo === "PaMaMe 粑粑麻麻与我"
                                      ? true
                                      : false
                                  }
                                  {...register("heardInfo")}
                                />
                              }
                              label="PaMaMe 粑粑麻麻与我"
                            />
                            <FormControlLabel
                              value="家人/友人介绍 Family/Friends"
                              control={
                                <Radio
                                  checked={
                                    heardInfo === "家人/友人介绍 Family/Friends"
                                      ? true
                                      : false
                                  }
                                  {...register("heardInfo")}
                                />
                              }
                              label="家人/友人介绍 Family/Friends"
                            />
                            <FormControlLabel
                              value="Dr Shane (Neucleus Education)"
                              control={
                                <Radio
                                  checked={
                                    heardInfo ===
                                    "Dr Shane (Neucleus Education)"
                                      ? true
                                      : false
                                  }
                                  {...register("heardInfo")}
                                />
                              }
                              label="Dr Shane (Neucleus Education)"
                            />
                            <FormControlLabel
                              value="Super Avatar"
                              control={<Radio {...register("heardInfo")} />}
                              label="Super Avatar"
                            />
                            <FormControlLabel
                              value="SuperMum"
                              control={
                                <Radio
                                  checked={
                                    heardInfo === "SuperMum" ? true : false
                                  }
                                  {...register("heardInfo")}
                                />
                              }
                              label="SuperMum"
                            />
                            <div className="mb-4 flex w-full flex-col">
                              <FormControlLabel
                                value="others"
                                control={
                                  <Radio
                                    checked={
                                      heardInfo === "others" ? true : false
                                    }
                                    {...register("heardInfo")}
                                  />
                                }
                                label="其他 Others：（请填写:）"
                              />
                              <TextField
                                type="text"
                                variant="outlined"
                                size="small"
                                margin="dense"
                                fullWidth
                                disabled={heardInfo === "others" ? false : true}
                                label="其他 Others：（请填写:）"
                                {...register("heardInfoOthers")}
                              />
                            </div>
                          </RadioGroup>
                        </FormControl>
                      );
                    }}
                  />
                </Grid>
              </Grid>
              <div>
                <h1 className="font-beachday text-xl md:text-3xl">
                  额外成人资料 Additional Adult Details
                </h1>
                <h2 className="font-beachday text-lg opacity-50 md:text-xl">
                  13岁或以上 Age 13 and above
                </h2>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="add-adult">
                      请列出添加额外参与者（成人）How many additional adults are
                      attending?
                    </InputLabel>
                    <Select
                      variant="outlined"
                      labelId="add-adult"
                      label="请列出添加额外参与者（成人) How many additional adults are attending?"
                      value={addAdultAmount}
                      {...register("addAdultAmount")}
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {addAdultAmount > 0 && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <h2 className="font-beachday text-xl">Adult 1</h2>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="成人全名 Adult’s Full Name "
                      type="text"
                      fullWidth
                      required
                      {...register("addAdult1Name", {
                        required: "This field is required",
                      })}
                      error={!!errors.addAdult1Name}
                      helperText={errors.addAdult1Name?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="联络方式 Contact No"
                      type="tel"
                      fullWidth
                      required
                      {...register("addAdult1ContactNo", {
                        required: "This field is required",
                        pattern: {
                          value:
                            /^(?:[+]6)?0(([0-9]{2}((\s[0-9]{3,4}\s[0-9]{4})|(-[0-9]{3,4}\s[0-9]{4})|(-[0-9]{7,8})))|([0-9]{9,10}))$/gm,
                          message: "Enter a valid phone number",
                        },
                      })}
                      error={!!errors.addAdult1ContactNo}
                      helperText={errors.addAdult1ContactNo?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Controller
                      name="addAdult1IC"
                      control={control}
                      rules={{
                        required: "This field is required",
                        pattern: {
                          value: /^\d{6}-\d{2}-\d{4}$/,
                          message: "Enter a valid IC number",
                        },
                      }}
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <InputMask
                          mask={"999999-99-9999"}
                          maskPlaceholder="X"
                          value={value}
                          onChange={onChange}
                        >
                          <TextField
                            variant="outlined"
                            label="成人IC号码 Adult’s IC No"
                            type="text"
                            fullWidth
                            required
                            error={!!errors.addAdult1IC}
                            helperText={errors.addAdult1IC?.message}
                          />
                        </InputMask>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <FormControl required fullWidth>
                      <InputLabel id="addAdult1-relationship">
                        与孩子的关系 Relationship with Child
                      </InputLabel>
                      <Select
                        variant="outlined"
                        labelId="addAdult1-relationship"
                        label="与孩子的关系 Relationship with Child"
                        defaultValue={"哥哥 Brother"}
                        value={addAdult1Relationship}
                        error={!!errors.addAdult1Relationship}
                        {...register("addAdult1Relationship", {
                          required: true,
                        })}
                      >
                        <MenuItem value={"哥哥 Brother"}>哥哥 Brother</MenuItem>
                        <MenuItem value={"姐姐 Sister"}>姐姐 Sister</MenuItem>
                        <MenuItem value={"爸爸 Father"}>爸爸 Father</MenuItem>
                        <MenuItem value={"妈妈 Mother"}>妈妈 Mother</MenuItem>
                        <MenuItem value={"阿姨 Aunty"}>阿姨 Aunty</MenuItem>
                        <MenuItem value={"叔叔 Uncle"}>叔叔 Uncle</MenuItem>
                        <MenuItem value={"公公 Grandfather"}>
                          公公 Grandfather
                        </MenuItem>
                        <MenuItem value={"婆婆 Grandmother"}>
                          婆婆 Grandmother
                        </MenuItem>
                        <MenuItem value={"其他 Others"}>其他 Others</MenuItem>
                      </Select>
                      <FormHelperText error={!!errors.addAdult1Relationship}>
                        {!!errors.addAdult1Relationship &&
                          "This field is required"}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
              )}
              {addAdultAmount > 1 && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <h2 className="font-beachday text-xl">Adult 2</h2>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="成人全名 Adult’s Full Name "
                      type="text"
                      fullWidth
                      required
                      {...register("addAdult2Name", {
                        required: "This field is required",
                      })}
                      error={!!errors.addAdult2Name}
                      helperText={errors.addAdult2Name?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="联络方式 Contact No"
                      type="tel"
                      fullWidth
                      required
                      {...register("addAdult2ContactNo", {
                        required: "This field is required",
                        pattern: {
                          value:
                            /^(?:[+]6)?0(([0-9]{2}((\s[0-9]{3,4}\s[0-9]{4})|(-[0-9]{3,4}\s[0-9]{4})|(-[0-9]{7,8})))|([0-9]{9,10}))$/gm,
                          message: "Enter a valid phone number",
                        },
                      })}
                      error={!!errors.addAdult2ContactNo}
                      helperText={errors.addAdult2ContactNo?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Controller
                      name="addAdult2IC"
                      control={control}
                      rules={{
                        required: "This field is required",
                        pattern: {
                          value: /^\d{6}-\d{2}-\d{4}$/,
                          message: "Enter a valid IC number",
                        },
                      }}
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <InputMask
                          mask={"999999-99-9999"}
                          maskPlaceholder="X"
                          value={value}
                          onChange={onChange}
                        >
                          <TextField
                            variant="outlined"
                            label="成人IC号码 Adult’s IC No"
                            type="text"
                            fullWidth
                            required
                            error={!!errors.addAdult2IC}
                            helperText={errors.addAdult2IC?.message}
                          />
                        </InputMask>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <FormControl required fullWidth>
                      <InputLabel id="addAdult2-relationship">
                        与孩子的关系 Relationship with Child
                      </InputLabel>
                      <Select
                        variant="outlined"
                        labelId="addAdult2-relationship"
                        label="与孩子的关系 Relationship with Child"
                        defaultValue={"哥哥 Brother"}
                        value={addAdult2Relationship}
                        error={!!errors.addAdult2Relationship}
                        {...register("addAdult2Relationship", {
                          required: true,
                        })}
                      >
                        <MenuItem value={"哥哥 Brother"}>哥哥 Brother</MenuItem>
                        <MenuItem value={"姐姐 Sister"}>姐姐 Sister</MenuItem>
                        <MenuItem value={"爸爸 Father"}>爸爸 Father</MenuItem>
                        <MenuItem value={"妈妈 Mother"}>妈妈 Mother</MenuItem>
                        <MenuItem value={"阿姨 Aunty"}>阿姨 Aunty</MenuItem>
                        <MenuItem value={"叔叔 Uncle"}>叔叔 Uncle</MenuItem>
                        <MenuItem value={"公公 Grandfather"}>
                          公公 Grandfather
                        </MenuItem>
                        <MenuItem value={"婆婆 Grandmother"}>
                          婆婆 Grandmother
                        </MenuItem>
                        <MenuItem value={"其他 Others"}>其他 Others</MenuItem>
                      </Select>
                      <FormHelperText error={!!errors.addAdult2Relationship}>
                        {!!errors.addAdult2Relationship &&
                          "This field is required"}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
              )}
              {addAdultAmount > 2 && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <h2 className="font-beachday text-xl">Adult 3</h2>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="成人全名 Adult’s Full Name "
                      type="text"
                      fullWidth
                      required
                      {...register("addAdult3Name", {
                        required: "This field is required",
                      })}
                      error={!!errors.addAdult3Name}
                      helperText={errors.addAdult3Name?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="联络方式 Contact No"
                      type="tel"
                      fullWidth
                      required
                      {...register("addAdult3ContactNo", {
                        required: "This field is required",
                        pattern: {
                          value:
                            /^(?:[+]6)?0(([0-9]{2}((\s[0-9]{3,4}\s[0-9]{4})|(-[0-9]{3,4}\s[0-9]{4})|(-[0-9]{7,8})))|([0-9]{9,10}))$/gm,
                          message: "Enter a valid phone number",
                        },
                      })}
                      error={!!errors.addAdult3ContactNo}
                      helperText={errors.addAdult3ContactNo?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Controller
                      name="addAdult3IC"
                      control={control}
                      rules={{
                        required: "This field is required",
                        pattern: {
                          value: /^\d{6}-\d{2}-\d{4}$/,
                          message: "Enter a valid IC number",
                        },
                      }}
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <InputMask
                          mask={"999999-99-9999"}
                          maskPlaceholder="X"
                          value={value}
                          onChange={onChange}
                        >
                          <TextField
                            variant="outlined"
                            label="成人IC号码 Adult’s IC No"
                            type="text"
                            fullWidth
                            required
                            error={!!errors.addAdult3IC}
                            helperText={errors.addAdult3IC?.message}
                          />
                        </InputMask>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <FormControl required fullWidth>
                      <InputLabel id="addAdult3-relationship">
                        与孩子的关系 Relationship with Child
                      </InputLabel>
                      <Select
                        variant="outlined"
                        labelId="addAdult3-relationship"
                        label="与孩子的关系 Relationship with Child"
                        defaultValue={"哥哥 Brother"}
                        value={addAdult3Relationship}
                        error={!!errors.addAdult3Relationship}
                        {...register("addAdult3Relationship", {
                          required: true,
                        })}
                      >
                        <MenuItem value={"哥哥 Brother"}>哥哥 Brother</MenuItem>
                        <MenuItem value={"姐姐 Sister"}>姐姐 Sister</MenuItem>
                        <MenuItem value={"爸爸 Father"}>爸爸 Father</MenuItem>
                        <MenuItem value={"妈妈 Mother"}>妈妈 Mother</MenuItem>
                        <MenuItem value={"阿姨 Aunty"}>阿姨 Aunty</MenuItem>
                        <MenuItem value={"叔叔 Uncle"}>叔叔 Uncle</MenuItem>
                        <MenuItem value={"公公 Grandfather"}>
                          公公 Grandfather
                        </MenuItem>
                        <MenuItem value={"婆婆 Grandmother"}>
                          婆婆 Grandmother
                        </MenuItem>
                        <MenuItem value={"其他 Others"}>其他 Others</MenuItem>
                      </Select>
                      <FormHelperText error={!!errors.addAdult3Relationship}>
                        {!!errors.addAdult3Relationship &&
                          "This field is required"}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
              )}
            </>
          )}
          {activeStep === 1 && (
            <>
              <h1 className="font-beachday text-xl md:text-3xl">
                孩子资料 Child&apos;s Details
              </h1>
              <h2 className="text-md font-beachday md:text-xl">
                活动仅适合5至10岁的儿童参与
                <br />
                Activity are suitable only for children aged 5-10 years old
              </h2>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="children-amount">
                      有多少孩子参加和加入活动？ How many children are attending
                      and joining activities?
                    </InputLabel>
                    <Select
                      variant="outlined"
                      labelId="children-amount"
                      label="有多少孩子参加和加入活动？ How many children are attending and joining activities?"
                      defaultValue={1}
                      value={childrenAmount}
                      {...register("childrenAmount")}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {childrenAmount > 0 && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子全名 Full name as per IC"
                      type="text"
                      fullWidth
                      required
                      {...register("child1Name", {
                        required: "This field is required",
                      })}
                      error={!!errors.child1Name}
                      helperText={errors.child1Name?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子昵称 Child’s Nickname"
                      type="text"
                      fullWidth
                      required
                      {...register("child1Nickname", {
                        required: "This field is required",
                      })}
                      error={!!errors.child1Nickname}
                      helperText={errors.child1Nickname?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="child1-gender">性别 Gender</InputLabel>
                      <Select
                        variant="outlined"
                        labelId="child1-gender"
                        label="性别 Gender"
                        defaultValue={"男 Boy"}
                        value={child1Gender}
                        {...register("child1Gender")}
                      >
                        <MenuItem value={"男 Boy"}>男 Boy</MenuItem>
                        <MenuItem value={"女 Girl"}>女 Girl</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      variant="outlined"
                      label="孩子岁数 Child's Age"
                      type="number"
                      fullWidth
                      required
                      {...register("child1Age", {
                        required: "This field is required",
                        min: {
                          value: 4,
                          message: "Age is not valid to join activities",
                        },
                        max: {
                          value: 12,
                          message: "Age is not valid to join activities",
                        },
                      })}
                      error={!!errors.child1Age}
                      helperText={errors.child1Age?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Controller
                      control={control}
                      name="child1DOB"
                      rules={{
                        required: {
                          message: "This field is required",
                          value: true,
                        },
                      }}
                      render={({ field }) => {
                        return (
                          <DatePicker
                            label="孩子出生日期 Child's Date of Birth"
                            format="DD/MM/YYYY"
                            disableFuture
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                required: true,
                                error: !!errors.child1DOB,
                                helperText: errors.child1DOB?.message,
                              },
                            }}
                            inputRef={field.ref}
                            onChange={(date) => {
                              if (date) {
                                const normalizedDte = date
                                  .startOf("day")
                                  .format("YYYY-MM-DD");
                                field.onChange(normalizedDte);
                              }
                              console.log(field.value);
                            }}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <FormControl required fullWidth>
                      <InputLabel id="child1-id-type">ID Type</InputLabel>
                      <Select
                        variant="outlined"
                        labelId="child1-id-type"
                        label="ID Type"
                        defaultValue={"MyKid"}
                        value={child1IDType}
                        error={!!errors.child1IDType}
                        {...register("child1IDType", {
                          required: true,
                        })}
                      >
                        <MenuItem value={"MyKid"}>MyKid</MenuItem>
                        <MenuItem value={"Passport"}>
                          Passport (for foreigners only)
                        </MenuItem>
                      </Select>
                      <FormHelperText error={!!errors.child1IDType}>
                        {!!errors.child1IDType && "This field is required"}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  {child1IDType === "MyKid" ? (
                    <Grid item xs={12} md={12}>
                      <Controller
                        name="child1IC"
                        control={control}
                        rules={{
                          required: "This field is required",
                          pattern: {
                            value: /^\d{6}-\d{2}-\d{4}$/,
                            message: "Enter a valid IC number",
                          },
                        }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <InputMask
                            mask={"999999-99-9999"}
                            maskPlaceholder="X"
                            value={value}
                            onChange={onChange}
                          >
                            <TextField
                              variant="outlined"
                              label="孩子MyKid号码 Child’s MyKid No"
                              type="text"
                              fullWidth
                              required
                              error={!!errors.child1IC}
                              helperText={errors.child1IC?.message}
                            />
                          </InputMask>
                        )}
                      />
                    </Grid>
                  ) : child1IDType === "Passport" ? (
                    <Grid item xs={12} md={12}>
                      <TextField
                        variant="outlined"
                        label="孩子护照号码 Child’s Passport No"
                        type="text"
                        fullWidth
                        required
                        {...register("child1Passport", {
                          required: "This field is required",
                        })}
                        error={!!errors.child1Passport}
                        helperText={errors.child1Passport?.message}
                      />
                    </Grid>
                  ) : null}
                </Grid>
              )}
              {childrenAmount > 1 && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子全名 Full name as per IC"
                      type="text"
                      fullWidth
                      required
                      {...register("child2Name", {
                        required: "This field is required",
                      })}
                      error={!!errors.child2Name}
                      helperText={errors.child2Name?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子昵称 Child’s Nickname"
                      type="text"
                      fullWidth
                      required
                      {...register("child2Nickname", {
                        required: "This field is required",
                      })}
                      error={!!errors.child2Nickname}
                      helperText={errors.child2Nickname?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="child2-gender">性别 Gender</InputLabel>
                      <Select
                        variant="outlined"
                        labelId="child2-gender"
                        label="性别 Gender"
                        defaultValue={"男 Boy"}
                        value={child2Gender}
                        {...register("child2Gender")}
                      >
                        <MenuItem value={"男 Boy"}>男 Boy</MenuItem>
                        <MenuItem value={"女 Girl"}>女 Girl</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      variant="outlined"
                      label="孩子岁数 Child's Age"
                      type="number"
                      fullWidth
                      required
                      {...register("child2Age", {
                        required: "This field is required",
                        min: {
                          value: 4,
                          message: "Age is not valid to join activities",
                        },
                        max: {
                          value: 12,
                          message: "Age is not valid to join activities",
                        },
                      })}
                      error={!!errors.child2Age}
                      helperText={errors.child2Age?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Controller
                      control={control}
                      name="child2DOB"
                      rules={{
                        required: {
                          message: "This field is required",
                          value: true,
                        },
                      }}
                      render={({ field }) => {
                        return (
                          <DatePicker
                            label="孩子出生日期 Child's Date of Birth"
                            format="DD/MM/YYYY"
                            disableFuture
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                required: true,
                                error: !!errors.child2DOB,
                                helperText: errors.child2DOB?.message,
                              },
                            }}
                            inputRef={field.ref}
                            onChange={(date) => {
                              if (date) {
                                const normalizedDte = date
                                  .startOf("day")
                                  .format("YYYY-MM-DD");
                                field.onChange(normalizedDte);
                              }
                              console.log(field.value);
                            }}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <FormControl required fullWidth>
                      <InputLabel id="child2-id-type">ID Type</InputLabel>
                      <Select
                        variant="outlined"
                        labelId="child2-id-type"
                        label="ID Type"
                        defaultValue={"MyKid"}
                        value={child2IDType}
                        error={!!errors.child2IDType}
                        {...register("child2IDType", {
                          required: true,
                        })}
                      >
                        <MenuItem value={"MyKid"}>MyKid</MenuItem>
                        <MenuItem value={"Passport"}>
                          Passport (for foreigners only)
                        </MenuItem>
                      </Select>
                      <FormHelperText error={!!errors.child2IDType}>
                        {!!errors.child2IDType && "This field is required"}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  {child2IDType === "MyKid" ? (
                    <Grid item xs={12} md={12}>
                      <Controller
                        name="child2IC"
                        control={control}
                        rules={{
                          required: "This field is required",
                          pattern: {
                            value: /^\d{6}-\d{2}-\d{4}$/,
                            message: "Enter a valid IC number",
                          },
                        }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <InputMask
                            mask={"999999-99-9999"}
                            maskPlaceholder="X"
                            value={value}
                            onChange={onChange}
                          >
                            <TextField
                              variant="outlined"
                              label="孩子MyKid号码 Child’s MyKid No"
                              type="text"
                              fullWidth
                              required
                              error={!!errors.child2IC}
                              helperText={errors.child2IC?.message}
                            />
                          </InputMask>
                        )}
                      />
                    </Grid>
                  ) : child2IDType === "Passport" ? (
                    <Grid item xs={12} md={12}>
                      <TextField
                        variant="outlined"
                        label="孩子护照号码 Child’s Passport No"
                        type="text"
                        fullWidth
                        required
                        {...register("child2Passport", {
                          required: "This field is required",
                        })}
                        error={!!errors.child2Passport}
                        helperText={errors.child2Passport?.message}
                      />
                    </Grid>
                  ) : null}
                </Grid>
              )}
              {childrenAmount > 2 && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子全名 Full name as per IC"
                      type="text"
                      fullWidth
                      required
                      {...register("child3Name", {
                        required: "This field is required",
                      })}
                      error={!!errors.child3Name}
                      helperText={errors.child3Name?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子昵称 Child’s Nickname"
                      type="text"
                      fullWidth
                      required
                      {...register("child3Nickname", {
                        required: "This field is required",
                      })}
                      error={!!errors.child3Nickname}
                      helperText={errors.child3Nickname?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="child3-gender">性别 Gender</InputLabel>
                      <Select
                        variant="outlined"
                        labelId="child3-gender"
                        label="性别 Gender"
                        defaultValue={"男 Boy"}
                        value={child3Gender}
                        {...register("child3Gender")}
                      >
                        <MenuItem value={"男 Boy"}>男 Boy</MenuItem>
                        <MenuItem value={"女 Girl"}>女 Girl</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      variant="outlined"
                      label="孩子岁数 Child's Age"
                      type="number"
                      fullWidth
                      required
                      {...register("child3Age", {
                        required: "This field is required",
                        min: {
                          value: 4,
                          message: "Age is not valid to join activities",
                        },
                        max: {
                          value: 12,
                          message: "Age is not valid to join activities",
                        },
                      })}
                      error={!!errors.child3Age}
                      helperText={errors.child3Age?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Controller
                      control={control}
                      name="child3DOB"
                      rules={{
                        required: {
                          message: "This field is required",
                          value: true,
                        },
                      }}
                      render={({ field }) => {
                        return (
                          <DatePicker
                            label="孩子出生日期 Child's Date of Birth"
                            format="DD/MM/YYYY"
                            disableFuture
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                required: true,
                                error: !!errors.child3DOB,
                                helperText: errors.child3DOB?.message,
                              },
                            }}
                            inputRef={field.ref}
                            onChange={(date) => {
                              if (date) {
                                const normalizedDte = date
                                  .startOf("day")
                                  .format("YYYY-MM-DD");
                                field.onChange(normalizedDte);
                              }
                              console.log(field.value);
                            }}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <FormControl required fullWidth>
                      <InputLabel id="child3-id-type">ID Type</InputLabel>
                      <Select
                        variant="outlined"
                        labelId="child3-id-type"
                        label="ID Type"
                        defaultValue={"MyKid"}
                        value={child3IDType}
                        error={!!errors.child3IDType}
                        {...register("child3IDType", {
                          required: true,
                        })}
                      >
                        <MenuItem value={"MyKid"}>MyKid</MenuItem>
                        <MenuItem value={"Passport"}>
                          Passport (for foreigners only)
                        </MenuItem>
                      </Select>
                      <FormHelperText error={!!errors.child3IDType}>
                        {!!errors.child3IDType && "This field is required"}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  {child3IDType === "MyKid" ? (
                    <Grid item xs={12} md={12}>
                      <Controller
                        name="child3IC"
                        control={control}
                        rules={{
                          required: "This field is required",
                          pattern: {
                            value: /^\d{6}-\d{2}-\d{4}$/,
                            message: "Enter a valid IC number",
                          },
                        }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <InputMask
                            mask={"999999-99-9999"}
                            maskPlaceholder="X"
                            value={value}
                            onChange={onChange}
                          >
                            <TextField
                              variant="outlined"
                              label="孩子MyKid号码 Child’s MyKid No"
                              type="text"
                              fullWidth
                              required
                              error={!!errors.child3IC}
                              helperText={errors.child3IC?.message}
                            />
                          </InputMask>
                        )}
                      />
                    </Grid>
                  ) : child3IDType === "Passport" ? (
                    <Grid item xs={12} md={12}>
                      <TextField
                        variant="outlined"
                        label="孩子护照号码 Child’s Passport No"
                        type="text"
                        fullWidth
                        required
                        {...register("child3Passport", {
                          required: "This field is required",
                        })}
                        error={!!errors.child3Passport}
                        helperText={errors.child3Passport?.message}
                      />
                    </Grid>
                  ) : null}
                </Grid>
              )}
              <div>
                <h1 className="font-beachday text-xl md:text-3xl">
                  额外孩子资料 Additional Child Details
                </h1>
                <h2 className="text-md font-beachday md:text-xl">
                  仅限4岁或以下 Age 4 or below 4
                </h2>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="add-child">
                      有多少孩子参加但不加入活动？ How many children are
                      attending but not joining activities?
                    </InputLabel>
                    <Select
                      variant="outlined"
                      labelId="add-child"
                      label="有多少孩子参加但不加入活动？ How many children are attending but not joining activities?"
                      defaultValue={0}
                      value={addChildAmount}
                      {...register("addChildAmount")}
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {addChildAmount > 0 && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子全名 Full name as per IC"
                      type="text"
                      fullWidth
                      required
                      {...register("addChild1Name", {
                        required: "This field is required",
                      })}
                      error={!!errors.addChild1Name}
                      helperText={errors.addChild1Name?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子昵称 Child’s Nickname"
                      type="text"
                      fullWidth
                      required
                      {...register("addChild1Nickname", {
                        required: "This field is required",
                      })}
                      error={!!errors.addChild1Nickname}
                      helperText={errors.addChild1Nickname?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="add-child1-gender">
                        性别 Gender
                      </InputLabel>
                      <Select
                        variant="outlined"
                        labelId="add-child1-gender"
                        label="性别 Gender"
                        defaultValue={"男 Boy"}
                        value={addChild1Gender}
                        {...register("addChild1Gender")}
                      >
                        <MenuItem value={"男 Boy"}>男 Boy</MenuItem>
                        <MenuItem value={"女 Girl"}>女 Girl</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      variant="outlined"
                      label="孩子岁数 Child's Age"
                      type="number"
                      fullWidth
                      required
                      {...register("addChild1Age", {
                        required: "This field is required",
                        max: { value: 4, message: "Age is not valid" },
                      })}
                      error={!!errors.addChild1Age}
                      helperText={errors.addChild1Age?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Controller
                      control={control}
                      name="addChild1DOB"
                      rules={{
                        required: {
                          message: "This field is required",
                          value: true,
                        },
                      }}
                      render={({ field }) => {
                        return (
                          <DatePicker
                            label="孩子出生日期 Child's Date of Birth"
                            format="DD/MM/YYYY"
                            disableFuture
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                required: true,
                                error: !!errors.addChild1DOB,
                                helperText: errors.addChild1DOB?.message,
                              },
                            }}
                            inputRef={field.ref}
                            onChange={(date) => {
                              if (date) {
                                const normalizedDte = date
                                  .startOf("day")
                                  .format("YYYY-MM-DD");
                                field.onChange(normalizedDte);
                              }
                              console.log(field.value);
                            }}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <FormControl required fullWidth>
                      <InputLabel id="add-child1-id-type">ID Type</InputLabel>
                      <Select
                        variant="outlined"
                        labelId="add-child1-id-type"
                        label="ID Type"
                        defaultValue={"MyKid"}
                        value={addChild1IDType}
                        error={!!errors.addChild1IDType}
                        {...register("addChild1IDType", {
                          required: true,
                        })}
                      >
                        <MenuItem value={"MyKid"}>MyKid</MenuItem>
                        <MenuItem value={"Passport"}>
                          Passport (for foreigners only)
                        </MenuItem>
                      </Select>
                      <FormHelperText error={!!errors.addChild1IDType}>
                        {!!errors.addChild1IDType && "This field is required"}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  {addChild1IDType === "MyKid" ? (
                    <Grid item xs={12} md={12}>
                      <Controller
                        name="addChild1IC"
                        control={control}
                        rules={{
                          required: "This field is required",
                          pattern: {
                            value: /^\d{6}-\d{2}-\d{4}$/,
                            message: "Enter a valid IC number",
                          },
                        }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <InputMask
                            mask={"999999-99-9999"}
                            maskPlaceholder="X"
                            value={value}
                            onChange={onChange}
                          >
                            <TextField
                              variant="outlined"
                              label="孩子MyKid号码 Child’s MyKid No"
                              type="text"
                              fullWidth
                              required
                              error={!!errors.addChild1IC}
                              helperText={errors.addChild1IC?.message}
                            />
                          </InputMask>
                        )}
                      />
                    </Grid>
                  ) : addChild1IDType === "Passport" ? (
                    <Grid item xs={12} md={12}>
                      <TextField
                        variant="outlined"
                        label="孩子护照号码 Child’s Passport No"
                        type="text"
                        fullWidth
                        required
                        {...register("addChild1Passport", {
                          required: "This field is required",
                        })}
                        error={!!errors.addChild1Passport}
                        helperText={errors.addChild1Passport?.message}
                      />
                    </Grid>
                  ) : null}
                </Grid>
              )}
              {addChildAmount > 1 && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子全名 Full name as per IC"
                      type="text"
                      fullWidth
                      required
                      {...register("addChild2Name", {
                        required: "This field is required",
                      })}
                      error={!!errors.addChild2Name}
                      helperText={errors.addChild2Name?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子昵称 Child’s Nickname"
                      type="text"
                      fullWidth
                      required
                      {...register("addChild2Nickname", {
                        required: "This field is required",
                      })}
                      error={!!errors.addChild2Nickname}
                      helperText={errors.addChild2Nickname?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="add-child2-gender">
                        性别 Gender
                      </InputLabel>
                      <Select
                        variant="outlined"
                        labelId="add-child2-gender"
                        label="性别 Gender"
                        defaultValue={"男 Boy"}
                        value={addChild2Gender}
                        {...register("addChild2Gender")}
                      >
                        <MenuItem value={"男 Boy"}>男 Boy</MenuItem>
                        <MenuItem value={"女 Girl"}>女 Girl</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      variant="outlined"
                      label="孩子岁数 Child's Age"
                      type="number"
                      fullWidth
                      required
                      {...register("addChild2Age", {
                        required: "This field is required",
                        max: { value: 4, message: "Age is not valid" },
                      })}
                      error={!!errors.addChild2Age}
                      helperText={errors.addChild2Age?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Controller
                      control={control}
                      name="addChild2DOB"
                      rules={{
                        required: {
                          message: "This field is required",
                          value: true,
                        },
                      }}
                      render={({ field }) => {
                        return (
                          <DatePicker
                            label="孩子出生日期 Child's Date of Birth"
                            format="DD/MM/YYYY"
                            disableFuture
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                required: true,
                                error: !!errors.addChild2DOB,
                                helperText: errors.addChild2DOB?.message,
                              },
                            }}
                            inputRef={field.ref}
                            onChange={(date) => {
                              if (date) {
                                const normalizedDte = date
                                  .startOf("day")
                                  .format("YYYY-MM-DD");
                                field.onChange(normalizedDte);
                              }
                              console.log(field.value);
                            }}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <FormControl required fullWidth>
                      <InputLabel id="add-child2-id-type">ID Type</InputLabel>
                      <Select
                        variant="outlined"
                        labelId="add-child2-id-type"
                        label="ID Type"
                        defaultValue={"MyKid"}
                        value={addChild2IDType}
                        error={!!errors.addChild2IDType}
                        {...register("addChild2IDType", {
                          required: true,
                        })}
                      >
                        <MenuItem value={"MyKid"}>MyKid</MenuItem>
                        <MenuItem value={"Passport"}>
                          Passport (for foreigners only)
                        </MenuItem>
                      </Select>
                      <FormHelperText error={!!errors.addChild2IDType}>
                        {!!errors.addChild2IDType && "This field is required"}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  {addChild2IDType === "MyKid" ? (
                    <Grid item xs={12} md={12}>
                      <Controller
                        name="addChild2IC"
                        control={control}
                        rules={{
                          required: "This field is required",
                          pattern: {
                            value: /^\d{6}-\d{2}-\d{4}$/,
                            message: "Enter a valid IC number",
                          },
                        }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <InputMask
                            mask={"999999-99-9999"}
                            maskPlaceholder="X"
                            value={value}
                            onChange={onChange}
                          >
                            <TextField
                              variant="outlined"
                              label="孩子MyKid号码 Child’s MyKid No"
                              type="text"
                              fullWidth
                              required
                              error={!!errors.addChild2IC}
                              helperText={errors.addChild2IC?.message}
                            />
                          </InputMask>
                        )}
                      />
                    </Grid>
                  ) : addChild2IDType === "Passport" ? (
                    <Grid item xs={12} md={12}>
                      <TextField
                        variant="outlined"
                        label="孩子护照号码 Child’s Passport No"
                        type="text"
                        fullWidth
                        required
                        {...register("addChild2Passport", {
                          required: "This field is required",
                        })}
                        error={!!errors.addChild2Passport}
                        helperText={errors.addChild2Passport?.message}
                      />
                    </Grid>
                  ) : null}
                </Grid>
              )}
              {addChildAmount > 2 && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子全名 Full name as per IC"
                      type="text"
                      fullWidth
                      required
                      {...register("addChild3Name", {
                        required: "This field is required",
                      })}
                      error={!!errors.addChild3Name}
                      helperText={errors.addChild3Name?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      label="孩子昵称 Child’s Nickname"
                      type="text"
                      fullWidth
                      required
                      {...register("addChild3Nickname", {
                        required: "This field is required",
                      })}
                      error={!!errors.addChild3Nickname}
                      helperText={errors.addChild3Nickname?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="add-child3-gender">
                        性别 Gender
                      </InputLabel>
                      <Select
                        variant="outlined"
                        labelId="add-child3-gender"
                        label="性别 Gender"
                        defaultValue={"男 Boy"}
                        value={addChild3Gender}
                        {...register("addChild3Gender")}
                      >
                        <MenuItem value={"男 Boy"}>男 Boy</MenuItem>
                        <MenuItem value={"女 Girl"}>女 Girl</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      variant="outlined"
                      label="孩子岁数 Child's Age"
                      type="number"
                      fullWidth
                      required
                      {...register("addChild3Age", {
                        required: "This field is required",
                        max: { value: 4, message: "Age is not valid" },
                      })}
                      error={!!errors.addChild3Age}
                      helperText={errors.addChild3Age?.message}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Controller
                      control={control}
                      name="addChild3DOB"
                      rules={{
                        required: {
                          message: "This field is required",
                          value: true,
                        },
                      }}
                      render={({ field }) => {
                        return (
                          <DatePicker
                            label="孩子出生日期 Child's Date of Birth"
                            format="DD/MM/YYYY"
                            disableFuture
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                required: true,
                                error: !!errors.addChild3DOB,
                                helperText: errors.addChild3DOB?.message,
                              },
                            }}
                            inputRef={field.ref}
                            onChange={(date) => {
                              if (date) {
                                const normalizedDte = date
                                  .startOf("day")
                                  .format("YYYY-MM-DD");
                                field.onChange(normalizedDte);
                              }
                              console.log(field.value);
                            }}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <FormControl required fullWidth>
                      <InputLabel id="add-child3-id-type">ID Type</InputLabel>
                      <Select
                        variant="outlined"
                        labelId="add-child3-id-type"
                        label="ID Type"
                        defaultValue={"MyKid"}
                        value={addChild3IDType}
                        error={!!errors.addChild3IDType}
                        {...register("addChild3IDType", {
                          required: true,
                        })}
                      >
                        <MenuItem value={"MyKid"}>MyKid</MenuItem>
                        <MenuItem value={"Passport"}>
                          Passport (for foreigners only)
                        </MenuItem>
                      </Select>
                      <FormHelperText error={!!errors.addChild3IDType}>
                        {!!errors.addChild3IDType && "This field is required"}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  {addChild3IDType === "MyKid" ? (
                    <Grid item xs={12} md={12}>
                      <Controller
                        name="addChild3IC"
                        control={control}
                        rules={{
                          required: "This field is required",
                          pattern: {
                            value: /^\d{6}-\d{2}-\d{4}$/,
                            message: "Enter a valid IC number",
                          },
                        }}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                          <InputMask
                            mask={"999999-99-9999"}
                            maskPlaceholder="X"
                            value={value}
                            onChange={onChange}
                          >
                            <TextField
                              variant="outlined"
                              label="孩子MyKid号码 Child’s MyKid No"
                              type="text"
                              fullWidth
                              required
                              error={!!errors.addChild3IC}
                              helperText={errors.addChild3IC?.message}
                            />
                          </InputMask>
                        )}
                      />
                    </Grid>
                  ) : addChild3IDType === "Passport" ? (
                    <Grid item xs={12} md={12}>
                      <TextField
                        variant="outlined"
                        label="孩子护照号码 Child’s Passport No"
                        type="text"
                        fullWidth
                        required
                        {...register("addChild3Passport", {
                          required: "This field is required",
                        })}
                        error={!!errors.addChild3Passport}
                        helperText={errors.addChild3Passport?.message}
                      />
                    </Grid>
                  ) : null}
                </Grid>
              )}
            </>
          )}
          {activeStep === 2 && (
            <>
              <div>
                <h1 className="font-beachday text-xl md:text-3xl">
                  付款详情 Payment Details
                </h1>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name={"packageDefault"}
                    render={() => (
                      <FormGroup>
                        <FormLabel
                          error={!!errors.packageDefault}
                          required
                          component="legend"
                        >
                          请选择配套 (Select Your Package)
                        </FormLabel>
                        <FormControl fullWidth>
                          <RadioGroup>
                            <FormControlLabel
                              control={
                                <Radio
                                  value={2800}
                                  {...register("packageDefault", {
                                    required: "This field is required",
                                  })}
                                />
                              }
                              label="2 Adults 1 Child (RM2800)"
                            />
                            <FormControlLabel
                              control={
                                <Radio
                                  value={1900}
                                  {...register("packageDefault", {
                                    required: "This field is required",
                                  })}
                                />
                              }
                              label="1 Adult 1 Child (RM1900)"
                            />
                          </RadioGroup>
                        </FormControl>
                      </FormGroup>
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="addonChildrenBelow4">
                      添加额外孩子 &#40;&lt;4yo&#41; Additional Child
                      &#40;&lt;4yo&#41; - RM60
                    </InputLabel>
                    <Select
                      variant="outlined"
                      labelId="addonChildrenBelow4"
                      label="添加额外孩子 (<4yo）Additional Child (<4yo) - RM60"
                      defaultValue={0}
                      {...register("addonChildrenBelow4")}
                    >
                      <MenuItem value={0}>None</MenuItem>
                      <MenuItem value={60}>1</MenuItem>
                      <MenuItem value={120}>2</MenuItem>
                      <MenuItem value={180}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="addonChildren5to10">
                      添加额外孩子 &#40;5-10yo&#41;Additional Child
                      &#40;5-10yo&#41; RM 900
                    </InputLabel>
                    <Select
                      variant="outlined"
                      labelId="addonChildren5to10"
                      label="添加额外孩子 (5-10yo）Additional Child (5-10yo) RM 900"
                      defaultValue={0}
                      {...register("addonChildren5to10")}
                    >
                      <MenuItem value={0}>None</MenuItem>
                      <MenuItem value={900}>1</MenuItem>
                      <MenuItem value={1800}>2</MenuItem>
                      <MenuItem value={2700}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="addonChildren5to10">
                      添加额外成人 &#40;&gt;12yo&#41; Additional Adult
                      &#40;&gt;12yo&#41; RM 450
                    </InputLabel>
                    <Select
                      variant="outlined"
                      labelId="addonAbove10"
                      label="添加额外成人 (>12yo）Additional Adult (>12yo) RM 450"
                      defaultValue={0}
                      {...register("addonAbove10")}
                    >
                      <MenuItem value={0}>None</MenuItem>
                      <MenuItem value={450}>1</MenuItem>
                      <MenuItem value={900}>2</MenuItem>
                      <MenuItem value={1350}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <div className="flex flex-col items-center">
                <h2 className="font-bold opacity-50">Total Amount Payable</h2>
                <p className="text-2xl font-bold">RM {total}</p>
              </div>
              <div className="flex flex-col gap-8">
                <p>
                  <span className="font-bold">
                    请在付款前仔细阅读所有条款
                    <br />
                    Please ensure you have read all terms and conditions before
                    proceeding to the payment section below.
                  </span>
                </p>
                <p>
                  <strong>
                    Terms & Condition <br />
                  </strong>
                  <br />
                  1) 活动适合5岁至10岁的儿童
                  <br />
                  Activities are suitable for kids aged 5 years old to 10 years
                  old.
                  <br />
                  <br />
                  2)
                  若遇到恶劣天气或其他无法预计的意外，主办方会启动应急计划，并视当时的情况做出最佳安排后，再另行通知参与者
                  <br />
                  In the event of adverse weather conditions on the day of
                  event, the organizers will implement an emergency plan and
                  make the best possible arrangements based on the situation at
                  hand. Participants will be notified accordingly.
                  <br />
                  <br />
                  3)
                  如果在2024年8月31日或之前提出退款请求，参与者将获得已支付总费用30%退款。
                  <br />
                  Participants are entitled to a 30% refund of the total fee
                  paid if the refund request is made on or before August 31st
                  2024.
                  <br />
                  <br />
                  从2024年9月1日起，任何退款或理由均不予退款
                  <br />
                  No refunds will be provided for any requests or reasons made
                  on or after September 1st 2024.
                  <br />
                  <br />
                  4) 成功报名者将于2个工作日内通过WhatsApp接获通知信息。
                  <br />
                  You will be informed of your successful registration via
                  WhatsApp PM within 2 working days.
                  <br />
                  <br />
                  5) 收据将在3-5个工作日内通过 WhatsApp 私信发送。
                  <br />
                  A receipt will be issued within 3-5 working days via WhatsApp
                  PM.
                  <br />
                  <br />
                  6)
                  活动门票可转让他人，但须在2024年10月23日之前告知主办方，以获取认可。
                  <br />
                  Spot transfer allowed with prior notice to organizers, and
                  with approval by organizers before October 23rd 2024.
                  <br />
                  <br />
                  <br />
                  <strong>请把活动费用通过线上转账 (Online Transfer) 至</strong>
                  <br />
                  Please make the payment through online transfer to the
                  following bank account:
                  <br />
                  <br />
                  <strong>账户名 Account Name:</strong> PAMAME SDN BHD
                  <br />
                  <strong>银行名 Bank Name:</strong> CIMB
                  <br />
                  <strong>银行户口 Account Number:</strong> 8605345668
                  <br />
                </p>
                <Button
                  variant="outlined"
                  onClick={copyHandle}
                  startIcon={<FileCopy />}
                >
                  Copy Account Number
                </Button>
                <div className="flex w-full items-center justify-center">
                  <Image
                    src={"/register/qr-code.webp"}
                    alt="Bank QR Code"
                    width={766}
                    height={1080}
                    className="h-auto w-full max-w-sm"
                  />
                </div>
              </div>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Controller
                    control={control}
                    name="paymentImage"
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <DropzoneField
                        onDrop={field.onChange}
                        file={field.value}
                      />
                    )}
                  />
                  {!!errors.paymentImage && (
                    <FormHelperText error={!!errors.paymentImage}>
                      Please upload a file/image
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="flex flex-col items-center">
                    <h2 className="font-bold opacity-50">
                      Total Amount Payable
                    </h2>
                    <p className="text-2xl font-bold">RM {total}</p>
                  </div>
                </Grid>
              </Grid>
              <FormGroup className="flex items-start gap-4">
                <FormControlLabel
                  control={<Checkbox size="small" {...register("term1")} />}
                  label={
                    <p className="ml-2 text-sm">
                      *I hereby give my consent for the collection and use of
                      personal information as described in this form. I
                      understand that this information will be used solely to
                      ensure safety and well-being during activities. I also
                      acknowledge my responsibility to inform the relevant
                      authorities of any changes to the information provided.
                      <br />
                      *我同意让主办方收集和使用本表格中描述的个人信息。我理解这些信息仅用于确保活动期间时个人的安全和健康。我也同意会及时通知主办方有关任何资料变更。
                    </p>
                  }
                />
                <FormControlLabel
                  control={<Checkbox size="small" {...register("term2")} />}
                  label={
                    <p className="ml-2 text-sm">
                      *By submitting this form, I agree that the organizer and
                      related organizations may use event photos for marketing
                      purposes.
                      <br />
                      *通过呈交此表格，我同意让主办方及相关团体使用该活动照片作为宣传用途。
                    </p>
                  }
                />
                <FormControlLabel
                  control={<Checkbox size="small" {...register("term3")} />}
                  label={
                    <p className="ml-2 text-sm">
                      *I agree to all the terms and conditions stated above. 
                      <br />
                      *我同意以上列出的所有条款。
                    </p>
                  }
                />
              </FormGroup>
            </>
          )}
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                <p className="font-beachday text-lg">Back</p>
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button
                disabled={
                  activeStep === steps.length - 1 &&
                  (!term1 || !term2 || !term3)
                    ? true
                    : false
                }
                type="submit"
              >
                {activeStep === steps.length - 1 ? (
                  <p className="font-beachday text-lg">Submit</p>
                ) : (
                  <p className="font-beachday text-lg">Next</p>
                )}
              </Button>
            </Box>
          </React.Fragment>
        </form>
      </LocalizationProvider>
      <Dialog
        open={open}
        onClose={loading ? () => {} : handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="flex flex-col items-center justify-center p-[46px]">
          {loading ? (
            <div className="flex flex-col items-center gap-8">
              <CircularProgress />
              <p className="text-sm font-bold">
                Please wait while we process your request
              </p>
            </div>
          ) : (
            <DialogContentText id="alert-dialog-description">
              {success && !loading ? (
                <div className="flex w-full flex-col items-center text-center">
                  <Image
                    src={ThankYouGif}
                    alt="Thank you"
                    className="h-auto w-[70vw]"
                    unoptimized
                  />
                  <p>
                    您将收到一封包含您详细信息的电子邮件。
                    <br />
                    You will receive an email with your details shortly.
                    <br />
                    <br />
                    我们的客服将在两天内通过私信联系您
                    <br />
                    You will be informed of your successful registration via PM
                    within 2 working days.
                    <br />
                    <br />
                    收据将在5个工作日内通过 WhatsApp 私信发送。
                    <br />
                    A receipt will be issued within 5 working days via WhatsApp
                    PM.
                    <br />
                    <br />
                  </p>
                </div>
              ) : (
                <p>
                  Something went wrong
                  <br />
                  Please try again later
                </p>
              )}
            </DialogContentText>
          )}
        </div>
        {!loading && (
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </article>
  );
};

export default RegisterForm;
