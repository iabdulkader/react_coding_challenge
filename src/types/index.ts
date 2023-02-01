export interface DataType {
    _id?: string;
    id: number;
    value: string;
    children?: DataType[];
}

export interface User {
  _id?: string;
  name: string;
  seletctedOption: DataType;
  agreedToTerms: boolean;
}