import { styled, TextField } from "@mui/material";
import { ChangeEventHandler, FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { StyleType } from "../constants/contractFields";
import { validationOptions } from "../utils/validationOptions";
import InputMask from "react-input-mask";

type Props = {
  type?: string;
  label: string;
  required: boolean;
  placeholder?: string;
  styleType?: StyleType;
  name: string;
};

// export type FormData = {
//   binIin: number;
//   companyName: string;
//   lastName: string;
//   firstName: string;
//   middleName?: string;
//   email: string;
//   phone: number;
//   jobTitle: string;
//   basisOfAuthority?: string;
//   region: string;
//   district: string;
//   legalAddress: string;
//   bank: string;
//   bik: number;
//   iik: string;
//   kbe: number;
// };

const StyledTextField = styled(TextField)`
  justify-self: center;
`;

const FieldSizes: Record<StyleType, string> = {
  text: "280px",
  number: "140px",
  shortNumber: "80px",
  phone: "160px",
};

export const CustomTextField: FC<Props> = ({ styleType, ...props }) => {
  const {
    register,
    formState: { errors, isSubmitted },
    getFieldState,
  } = useFormContext();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [bikNumber, setbikNumber] = useState("");
  const phoneMaskField = register("phone", {
    required: { value: true, message: "Fill it" },
  });
  const bikMaskField = register("bik", {
    required: { value: true, message: "Fill it" },
  });
  return (
    <div>
      {props.name === "phone" ? (
        <InputMask
          mask="+7 (999) 999 99 99"
          value={phoneNumber}
          {...phoneMaskField}
          onChange={(e) => {
            phoneMaskField.onChange(e);
            setPhoneNumber(e.target.value);
          }}
        />
      ) : props.name === "bik" ? (
        <InputMask
          mask="999 999 999"
          value={bikNumber}
          {...bikMaskField}
          onChange={(e) => {
            bikMaskField.onChange(e);
            setbikNumber(e.target.value);
          }}
        />
      ) : (
        <>
          <StyledTextField
            placeholder={props.placeholder}
            type={props.type}
            inputProps={{
              maxLength: 11,
              style: {
                boxSizing: "border-box",
                height: "32px",
                padding: "5px 12px",
                width: FieldSizes[styleType as keyof typeof FieldSizes],
                background: styleType === "number" ? "#F5F5F5" : "#FFFFFF",
              },
            }}
            {...register(props.name, validationOptions[props.name])}
            // error={
            //   isSubmitted &&
            //   getFieldState(props.name).isTouched &&
            //   !!getFieldState(props.name).error
            // }
            // helperText={
            //   isSubmitted &&
            //   getFieldState(props.name).isTouched &&
            //   !!getFieldState(props.name).error?.message
            // }
          />
          <br></br>
          <div style={{ color: "green", textAlign: "left" }}>
            {errors[props.name] && errors[props.name].message}
          </div>
        </>
      )}
    </div>
  );
};
