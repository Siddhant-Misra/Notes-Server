import { Schema, model, Document, Types } from 'mongoose';

export interface NoteDocument extends Document {
  _id: Types.ObjectId; 
  title: string;
  content: string;
}

const noteSchema = new Schema<NoteDocument>({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export const NoteModel = model<NoteDocument>('Note', noteSchema);

export interface Note {
  id: string;
  title: string;
  content: string;
}
