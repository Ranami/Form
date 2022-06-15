import {
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { IOption } from "../constants/contractFields";

const CustomRadio = styled(Radio)`
  color: rgba(41, 52, 82, 0.25);
`;

const CustomLabel = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

type Props = {
  defaultValue?: string;
  options?: IOption[];
  row?: boolean;
  required: boolean;
};

export const CustomRadioGroup: FC<Props> = ({
  defaultValue,
  options,
  required,
  ...rest
}) => {
  return (
    <RadioGroup defaultValue={defaultValue} {...rest}>
      {options?.map((option) => (
        <FormControlLabel
          key={option.value}
          control={<CustomRadio size="small" required={required} />}
          value={option.label}
          label={<CustomLabel>{option.value}</CustomLabel>}
        />
      ))}
    </RadioGroup>
  );
};
