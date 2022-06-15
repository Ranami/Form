export const validatePhoneNumber = (str: string): string => {
  const numbers = str.match(/\d+\d{11}/g)?.join("") ?? "";
  return numbers;
};

export const validateName = (str: string): string => {
  const name = str.match(/[a-zA-Z][a-zA-Z ]{2,}/)?.join("") ?? "";
  return name;
};

export const validateSureName = (str: string): string => {
  const name = str.match(/[a-zA-Z][a-zA-Z ]{2,}/)?.join("") ?? "";
  return name;
};

export const validateEmail = (str: string): string => {
  const email = str.match(/\S+@\S+\.\S+/)?.join("") ?? "";
  return email;
};

export function validateText(str: string): boolean {
  const comment = str ?? "";
  return comment.length >= 5 && comment.length < 24;
}
