import { FormControlLabel, Radio, RadioGroup, styled } from "@mui/material";
import React, { FC } from "react";

const CustomRadio = styled(Radio)`
  &:checked {
    color: #dc1832;
  }
  font-size: 20px;
`;

type Props = {
  defaultValue?: string;
  options: string[];
  row: boolean;
  required?: boolean;
};

export const CustomRadioGroup: FC<Props> = ({
  defaultValue,
  options,
  required,
  ...rest
}) => {
  return (
    <RadioGroup defaultValue={defaultValue} {...rest}>
      {options.map((option) => (
        <FormControlLabel
          control={<CustomRadio size="small" required={required} />}
          value={option}
          label={option}
        />
      ))}
    </RadioGroup>
  );
};
