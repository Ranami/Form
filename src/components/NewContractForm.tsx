import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { CustomRadioGroup } from "./CustomRadioGroup";
import { CustomTextField } from "./CustomTextField";
import { Selector } from "./Selector";

const Wrapper = styled(Box)`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Header = styled(Typography)`
  color: #002877;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  font-family: "Montserrat";
  font-style: normal;
  margin-bottom: 35px;
  margin-top: 30px;
`;

const CustomLabel = styled(FormLabel)`
  font-family: "Montserrat";
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  color: #293452;
`;

const Field = styled("div")`
  display: flex;
  gap: 18px;
  align-items: center;
  margin-bottom: 24px;
`;

const UnnecessaryText = styled("span")`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.25);
`;

const Asterisk = styled("span")`
  color: #dc1832;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

const BlockWrapper = styled("div")`
  border-bottom: 1px solid #e8e8e8;
  &:last-child {
    border-bottom: none;
  }
  width: 1160px;
`;

type Props = {};

interface IContractField {
  label: string;
  required: boolean;
  defaultValue: string;
  options: string[];
  row: boolean;
  Component: FC;
}

export const ContractFieldsData = [
  {
    title: "Данные об организации",
    fields: [
      {
        label: "Организационно-правовая форма",
        required: true,
        defaultValue: "АО",
        options: ["АО", "ТОО", "ИП"],
        row: true,
        Component: CustomRadioGroup,
      },
      {
        label: "БИН/ИИН",
        required: true,
        type: "number",
        placeholder: "Введите",
        Component: CustomTextField,
      },
      {
        label: "Полное наименование",
        type: "text",
        placeholder: "Введите",
        required: true,
        Component: CustomTextField,
      },
    ],
  },
  {
    title: "Данные представления",
    fields: [
      {
        label: "Фамилия",
        required: true,
        placeholder: "Введите",
        type: "text",
        Component: CustomTextField,
      },
      {
        label: "Имя",
        placeholder: "Введите",
        required: true,
        type: "text",
        Component: CustomTextField,
      },
      {
        label: "Отчество",
        type: "text",
        placeholder: "Введите",
        required: false,
        Component: CustomTextField,
      },
      {
        label: "Электронная почта",
        placeholder: "Введите",
        type: "text",
        required: true,
        Component: CustomTextField,
      },
      {
        label: "Телефон",
        type: "text",
        placeholder: "Введите",
        required: true,
        Component: CustomTextField,
      },
      {
        label: "Должность",
        placeholder: "Введите",
        type: "text",
        required: true,
        Component: CustomTextField,
      },
      {
        label: "Основание полномочий",
        placeholder: "Введите",
        type: "text",
        required: false,
        Component: CustomTextField,
      },
    ],
  },
  {
    title: "Адрес",
    fields: [
      {
        label: "Регион",
        type: "text",
        required: true,
        options: [
          { value: "Almaty", label: "Алматинская область" },
          { value: "East", label: "Восточно-Казахстанская область" },
          { value: "West", label: "Западно-Казахстанская область" },
        ],
        Component: Selector,
      },
      {
        label: "Населенный пункт / Район",
        placeholder: "Введите",
        type: "text",
        required: true,
        Component: CustomTextField,
      },
      {
        label: "Юридический адрес",
        placeholder: "Введите",
        type: "text",
        required: true,
        Component: CustomTextField,
      },
    ],
  },
  {
    title: "Банк",
    fields: [
      {
        label: "Банк",
        placeholder: "Напр. Halyk Bank",
        type: "text",
        required: true,
        Component: CustomTextField,
      },
      {
        label: "БИК",
        placeholder: "Введите",
        type: "number",
        required: true,
        Component: CustomTextField,
      },
      {
        label: "ИИК",
        placeholder: "Введите",
        type: "text",
        required: true,
        Component: CustomTextField,
      },
      {
        label: "Кбе",
        placeholder: "0",
        type: "text",
        required: true,
        Component: CustomTextField,
      },
    ],
  },
];

export const NewContractForm = (props: Props) => {
  return (
    <Wrapper>
      <FormControl>
        {ContractFieldsData.map((block) => (
          <BlockWrapper>
            <Header>{block.title}</Header>
            {block.fields.map(
              ({ label, Component = Input, required, ...field }) => (
                <Field>
                  <CustomLabel focused={false}>
                    {required && <Asterisk>* </Asterisk>}
                    {label}
                    {!required && (
                      <UnnecessaryText> (необязательный)</UnnecessaryText>
                    )}
                    :
                  </CustomLabel>
                  <Component {...field} label={label} required={required} />
                </Field>
              )
            )}
          </BlockWrapper>
        ))}
      </FormControl>
    </Wrapper>
  );
};
