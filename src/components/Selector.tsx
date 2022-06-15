import { MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";
import React, { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
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
};

export const Selector: FC<Props> = (props) => {
  const {
    register,
    formState: { errors, isSubmitted },
  } = useFormContext();
  const [region, setRegion] = useState("Almaty");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setRegion(event.target.value as string);
  };
  const selectRegion = register(region, {
    required: { value: true, message: "Fill it" },
  });
  return (
    <CustomSelect
      value={region}
      defaultValue={region}
      {...selectRegion}
      onChange={(e) => {
        selectRegion.onChange(e);
        handleChange(e);
      }}
    >
      {props.options?.map((option) => (
        <CustomMenuItem value={option.value} key={option.value}>
          {option.label}
        </CustomMenuItem>
      ))}
    </CustomSelect>
  );
};
