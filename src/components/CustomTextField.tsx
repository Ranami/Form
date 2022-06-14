import { styled, TextField } from "@mui/material";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

type Props = {
  type?: string;
  label: string;
  required: boolean;
  placeholder?: string;
};

type FormData = {
  binIin: number;
  companyName: string;
  lastName: string;
  firstName: string;
  middleName?: string;
  email: string;
  phone: number;
  jobTitle: string;
  basisOfAuthority?: string;
};

const StyledTextField = styled(TextField)`
  display: block;
  justify-self: center;
`;

export const CustomTextField: FC<Props> = (props) => {
  const {
    register,
    setValue,
    handleSubmit,
    getFieldState,
    formState: { isSubmitted },
  } = useForm({
    mode: "onChange",
  });
  return (
    <StyledTextField
      placeholder={props.placeholder}
      required={props.required}
      type={props.type}
      inputProps={{
        style: {
          padding: "5px 12px",
          width: props.type === "number" ? "140px" : "280px",
          background: props.type === "number" ? "#F5F5F5" : "#FFFFFF",
        },
      }}
      {...register(props.label!, {
        required: { value: props.required!, message: "Fill field" },
      })}
    />
  );
};
