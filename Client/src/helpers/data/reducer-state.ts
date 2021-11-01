export const initialState: Signup = {
  fname: "",
  surname: "",
  email: "",
  photo_url: "",
  area_code: "",
  city: "",
  street: "",
  appartment: "",
  country: "",
  phone: "",
  display_name: "",
  password: "",
};
export const initialErrorState: ErrorTypes = {
  fname: null,
  surname: null,
  email: null,
  photo_url: null,
  area_code: null,
  city: null,
  street: null,
  appartment: null,
  country: null,
  phone: null,
  display_name: null,
  password: null,
};
export interface Signup {
  fname: string;
  surname: string;
  email: string;
  photo_url?: string;
  area_code: string;
  city: string;
  street: string;
  appartment: string;
  country: string;
  phone: string;
  display_name: string;
  password: string;
}

export interface ErrorTypes {
  fname: null | string;
  surname: null | string;
  email: null | string;
  photo_url: null | string;
  area_code: null | string;
  city: null | string;
  street: null | string;
  appartment: null | string;
  country: null | string;
  phone: null | string;
  display_name: null | string;
  password: null | string;
}
