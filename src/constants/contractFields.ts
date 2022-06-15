import { FC } from "react";
import { CustomRadioGroup } from "../components/CustomRadioGroup";
import { CustomTextField } from "../components/CustomTextField";
import { Selector } from "../components/Selector";

export interface IContractFieldsData {
  title: string;
  fields: IComponentProps[];
}

export interface IOption {
  label: string;
  value: string;
}

export type StyleType = "text" | "number" | "shortNumber" | "phone";

export interface IComponentProps {
  label: string;
  required: boolean;
  defaultValue?: string;
  options?: IOption[];
  row?: boolean;
  Component?: FC<IComponentProps>;
  type?: string;
  placeholder?: string;
  styleType?: StyleType;
}

export const ContractFieldsData: IContractFieldsData[] = [
  {
    title: "Данные об организации",
    fields: [
      {
        label: "Организационно-правовая форма",
        required: true,
        defaultValue: "АО",
        options: [
          { label: "АО", value: "AO" },
          { label: "ТОО", value: "TOO" },
          { label: "ИП", value: "IP" },
        ],
        row: true,
        Component: CustomRadioGroup,
      },
      {
        label: "БИН/ИИН",
        required: true,
        type: "number",
        placeholder: "Введите",
        Component: CustomTextField,
        styleType: "number",
      },
      {
        label: "Полное наименование",
        type: "text",
        placeholder: "Введите",
        required: true,
        Component: CustomTextField,
        styleType: "text",
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
        styleType: "text",
      },
      {
        label: "Имя",
        placeholder: "Введите",
        required: true,
        type: "text",
        Component: CustomTextField,
        styleType: "text",
      },
      {
        label: "Отчество",
        type: "text",
        placeholder: "Введите",
        required: false,
        Component: CustomTextField,
        styleType: "text",
      },
      {
        label: "Электронная почта",
        placeholder: "Введите",
        type: "text",
        required: true,
        Component: CustomTextField,
        styleType: "text",
      },
      {
        label: "Телефон",
        type: "text",
        placeholder: "Введите",
        required: true,
        Component: CustomTextField,
        styleType: "phone",
      },
      {
        label: "Должность",
        placeholder: "Введите",
        type: "text",
        required: true,
        Component: CustomTextField,
        styleType: "text",
      },
      {
        label: "Основание полномочий",
        placeholder: "Введите",
        type: "text",
        required: false,
        Component: CustomTextField,
        styleType: "text",
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
        styleType: "text",
      },
      {
        label: "Юридический адрес",
        placeholder: "Введите",
        type: "text",
        required: true,
        Component: CustomTextField,
        styleType: "text",
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
        styleType: "text",
      },
      {
        label: "БИК",
        placeholder: "Введите",
        type: "number",
        required: true,
        Component: CustomTextField,
        styleType: "number",
      },
      {
        label: "ИИК",
        placeholder: "Введите",
        type: "text",
        required: true,
        Component: CustomTextField,
        styleType: "text",
      },
      {
        label: "Кбе",
        placeholder: "0",
        type: "number",
        required: true,
        Component: CustomTextField,
        styleType: "shortNumber",
      },
    ],
  },
];
