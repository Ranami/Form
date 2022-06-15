export const validationOptions: Record<string, any> = {
  name: {
    required: { value: true, message: "Заполните поле" },
    minLength: {
      value: 3,
      message: "at least 3 symbols",
    },
  },
  fullName: {
    required: { value: true, message: "Заполните поле" },
    minLength: {
      value: 3,
      message: "не менее 3 символов",
    },
    maxLength: {
      value: 24,
      message: "не более 12 символов",
    },
  },
  biin: {
    required: { value: true, message: "Заполните поле" },
    minLength: {
      value: 3,
      message: "не менее 3 символов",
    },
    maxLength: {
      value: 12,
      message: "не более 12 символов",
    },
  },
  email: {
    required: { value: true, message: "Заполните поле" },
    pattern: { value: /^\S+@\S+$/i, message: "invalid" },
  },
  phone: {
    required: { value: true, message: "Заполните поле" },
    pattern: {
      value: /[0-9]+[0-9]\{911}/g,
      message: "Invalid",
    },
    minLength: {
      value: 11,
      message: "Phone  must have at least 11 characters",
    },
    maxLength: {
      value: 12,
      message: "Phone must have 11 characters",
    },
  },
  role: { required: "Role is required" },
};
