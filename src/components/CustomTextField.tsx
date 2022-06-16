import { styled, TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
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
    control,
  } = useFormContext();

  return (
    <div>
      {props.name === "phone" ? (
        <>
          <Controller
            name={props.name}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <InputMask
                mask="+7 (999) 999 99 99"
                value={value}
                onChange={onChange}
                disabled={false}
              >
                <StyledTextField
                  placeholder={props.placeholder}
                  inputProps={{
                    style: {
                      boxSizing: "border-box",
                      height: "32px",
                      padding: "5px 12px",
                      width: FieldSizes[styleType as keyof typeof FieldSizes],
                      background:
                        styleType === "number" ? "#F5F5F5" : "#FFFFFF",
                    },
                  }}
                />
              </InputMask>
            )}
          />
        </>
      ) : props.name === "bik" ? (
        <>
          <Controller
            name={props.name}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <InputMask
                mask="9999 9999 9999"
                value={value}
                onChange={onChange}
                disabled={false}
              >
                <StyledTextField
                  placeholder={props.placeholder}
                  inputProps={{
                    style: {
                      boxSizing: "border-box",
                      height: "32px",
                      padding: "5px 12px",
                      width: FieldSizes[styleType as keyof typeof FieldSizes],
                      background:
                        styleType === "number" ? "#F5F5F5" : "#FFFFFF",
                    },
                  }}
                />
              </InputMask>
            )}
          />
        </>
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
