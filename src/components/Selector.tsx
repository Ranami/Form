import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

type SelectOptionType = {
  value: string;
  label: string;
};
type Props = {
  options: SelectOptionType[];
};

export const Selector = (props: Props) => {
  const [region, setRegion] = useState("Almaty");

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  return (
    <Select
      value={region}
      defaultValue={region}
      onChange={handleChange}
      sx={{ width: "280px" }}
    >
      {props.options.map((option) => (
        <MenuItem value={option.value}>{option.label}</MenuItem>
      ))}
    </Select>
  );
};
