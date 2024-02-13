import { Document, Schema, model, Model } from "mongoose";

export type Contact = {
  email: string;
  data: Date;
  replied: boolean;
};

// Interface to model the User Schema.
export interface IContactDocument extends Contact, Document {}

// Define the schema
const contactSchema = new Schema<IContactDocument>({
  email: { type: String, required: true },
  data: { type: Date, required: true, default: Date.now() },
  replied: { type: Boolean, required: true, default: false },
});

// Using the singleton pattern to prevent model redefinition
let ContactModel: Model<IContactDocument>;

try {
  // check model is already defined
  ContactModel = model<IContactDocument>("Contact");
} catch {
  // is not defined, define it
  ContactModel = model<IContactDocument>("Contact", contactSchema);
}

export { ContactModel };
