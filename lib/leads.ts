import type { Collection } from "mongodb";
import { MongoServerError } from "mongodb";
import type { LeadDocument, LeadDto } from "@/types/lead";
import { getDb } from "@/lib/mongodb";

const COLLECTION = "leads";
let indexesEnsured = false;

async function getCollection(): Promise<Collection<LeadDocument>> {
  const db = await getDb();
  return db.collection<LeadDocument>(COLLECTION);
}

async function ensureIndexes(collection: Collection<LeadDocument>): Promise<void> {
  if (indexesEnsured) return;
  await collection.createIndex({ email: 1 }, { unique: true });
  indexesEnsured = true;
}

function toDto(doc: LeadDocument): LeadDto {
  if (!doc._id) {
    throw new Error("Lead document missing _id");
  }
  return {
    id: doc._id.toHexString(),
    firstName: doc.firstName,
    lastName: doc.lastName,
    email: doc.email,
    gender: doc.gender,
    createdAt: doc.createdAt.toISOString(),
  };
}

export async function insertLead(
  input: Omit<LeadDocument, "_id" | "createdAt">,
): Promise<{ ok: true; lead: LeadDto } | { ok: false; duplicate: true }> {
  const collection = await getCollection();
  await ensureIndexes(collection);
  const doc: LeadDocument = {
    ...input,
    email: input.email.toLowerCase().trim(),
    createdAt: new Date(),
  };
  try {
    const result = await collection.insertOne(doc);
    const inserted = await collection.findOne({ _id: result.insertedId });
    if (!inserted) {
      throw new Error("Insert succeeded but document not found");
    }
    return { ok: true, lead: toDto(inserted) };
  } catch (err) {
    if (err instanceof MongoServerError && err.code === 11000) {
      return { ok: false, duplicate: true };
    }
    throw err;
  }
}

export async function listLeads(): Promise<LeadDto[]> {
  const collection = await getCollection();
  await ensureIndexes(collection);
  const cursor = collection.find({}).sort({ createdAt: -1 });
  const docs = await cursor.toArray();
  return docs.map(toDto);
}
