import Animal from "../features/Animal";
import { AnimalSampleList } from "../utils/data";
import { axiosInstance } from "./oauthToken";

export interface AnimalData {
  animals: Animal[];
  pagination: Pagination;
}

export interface Breeds {
  primary: string;
  secondary?: any;
  mixed: boolean;
  unknown: boolean;
}

export interface Colors {
  primary?: any;
  secondary?: any;
  tertiary?: any;
}

export interface Attributes {
  spayed_neutered: boolean;
  house_trained: boolean;
  declawed?: any;
  special_needs: boolean;
  shots_current: boolean;
}

export interface Environment {
  children: boolean;
  dogs: boolean;
  cats: boolean;
}

export interface Photo {
  small: string;
  medium: string;
  large: string;
  full: string;
}

export interface Video {
  embed: string;
}

export interface Address {
  address1: string;
  address2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: Address;
}

export interface Self {
  href: string;
}

export interface Type {
  href: string;
}

export interface Organization {
  href: string;
}

export interface Links {
  self: Self;
  type: Type;
  organization: Organization;
}

export interface Animal {
  id: number;
  organization_id: string;
  url: string;
  type: string;
  species: string;
  breeds: Breeds;
  colors: Colors;
  age: string;
  gender: string;
  size: string;
  coat?: any;
  attributes: Attributes;
  environment: Environment;
  tags: string[];
  name: string;
  description: string;
  photos: Photo[];
  videos: Video[];
  status: string;
  published_at: Date;
  contact: Contact;
  _links: Links;
}

export interface Pagination {
  count_per_page: number;
  total_count: number;
  current_page: number;
  total_pages: number;
  _links: Links;
}



export const getAnimalsAPI = async (): Promise<any> => {
  // console.log(await axiosInstance.get("animals"));
  
  return await axiosInstance.get("animals");
};

export const getMockAnimals  =(): any => {
  return AnimalSampleList
}