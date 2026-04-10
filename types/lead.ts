import type { ObjectId } from "mongodb";

export type Gender = "homme" | "femme" | "autre";

export interface LeadDocument {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  createdAt: Date;
}

export interface LeadDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  createdAt: string;
}
