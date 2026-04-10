import type { ObjectId } from "mongodb";

export type Gender = "homme" | "femme" | "autre";

export interface LeadDocument {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  /** Absent on legacy documents created before phone was collected */
  phone?: string;
  gender: Gender;
  createdAt: Date;
}

export interface LeadDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
  createdAt: string;
}
