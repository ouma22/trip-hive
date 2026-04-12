import type { ObjectId } from "mongodb";

export type Gender = "homme" | "femme" | "autre";

/** How the person relates to Trip Hive (waitlist “Qui êtes-vous ?”). */
export type LeadProfile =
  | "voyageur"
  | "artisan"
  | "hebergeur"
  | "pro_tourisme"
  | "curieux"
  | "autre";

export interface LeadDocument {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  /** Absent on legacy documents created before phone was collected */
  phone?: string;
  gender: Gender;
  /** Absent on legacy documents created before profile was collected */
  profile?: LeadProfile;
  createdAt: Date;
}

export interface LeadDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
  profile: LeadProfile;
  createdAt: string;
}
