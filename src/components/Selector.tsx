import { MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";
import React, { FC, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IOption } from "../constants/contractFields";

const CustomSelect = styled(Select)`
  width: 280px;
  height: 32px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  line-height: 22px;
`;

const CustomMenuItem = styled(MenuItem)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

type Props = {
  options?: IOption[];
  defaultValue?: string;
  name: string;
};

export const Selector: FC<Props> = ({ name, defaultValue, ...props }) => {
  const {
    register,
    formState: { errors, isSubmitted },
    getFieldState,
    control,
  } = useFormContext();
  // const [region, setRegion] = useState("Almaty");

  // const handleChange = (event: SelectChangeEvent<unknown>) => {
  //   setRegion(event.target.value as string);
  // };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{ required: { value: true, message: "Заполните поле" } }}
        render={({ field: { onChange, value } }) => (
          <CustomSelect value={value} onChange={onChange}>
            {props.options?.map((option) => (
              <CustomMenuItem value={option.value} key={option.value}>
                {option.label}
              </CustomMenuItem>
            ))}
          </CustomSelect>
        )}
      />
      <div style={{ color: "green", textAlign: "left" }}>
        {errors[name] && errors[name].message}
      </div>
    </div>
  );
};
