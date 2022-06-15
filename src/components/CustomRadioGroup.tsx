import {
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
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
  name: string;
};

export const CustomRadioGroup: FC<Props> = ({
  defaultValue,
  options,
  required,
  name,
  ...rest
}) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value, ref } }) => (
          <RadioGroup value={value} onChange={onChange} {...rest}>
            {options?.map((option) => (
              <FormControlLabel
                key={option.value}
                control={<CustomRadio size="small" required={required} />}
                value={option.value}
                label={<CustomLabel>{option.value}</CustomLabel>}
                inputRef={ref}
              />
            ))}
          </RadioGroup>
        )}
      />
    </>
  );
};
