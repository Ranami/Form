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

export interface IComponentProps {
  label: string;
  required: boolean;
  defaultValue?: string;
  options?: IOption[];
  row?: boolean;
  Component?: FC<IComponentProps>;
  type?: string;
  placeholder?: string;
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
