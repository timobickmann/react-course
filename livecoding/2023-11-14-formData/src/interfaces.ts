export interface IEmployee {
  firstName: string;
  lastName: string;
  hireDate: string;
  employeeNumber: string;
  age: number;
  notes: string;
  id: number;
}

export interface IFormField {
  label: string;
  value: string;
  isRequired: boolean;
  isValid: boolean;
}

export interface IFormFields {
  firstName: IFormField;
  lastName: IFormField;
  age: IFormField;
}

export interface IFormInfo {
  status: string;
  message: string;
  fields: IFormFields;
}

