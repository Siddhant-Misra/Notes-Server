import { Get, Post, Delete, Route, Body, Tags, Path, Put } from 'tsoa';
import { NoteModel, Note } from '../models/Note';
import { Types } from 'mongoose';

@Route('notes')
@Tags('Notes')
export class NotesController {
  @Get('/')
  public async getNotes(): Promise<Note[]> {
    const notes = await NoteModel.find().exec();
    return notes.map(note => ({
      id: (note._id as Types.ObjectId).toHexString(), 
      title: note.title,
      content: note.content
    }));
  }

  @Post('/')
  public async createNote(
    @Body() body: { title: string; content: string }
  ): Promise<Note> {
    const note = new NoteModel(body);
    const savedNote = await note.save();
    return {
      id: (savedNote._id as Types.ObjectId).toHexString(), 
      title: savedNote.title,
      content: savedNote.content
    };
  }

  @Put('/{id}')
  public async updateNote(
    @Path() id: string,
    @Body() body: { title: string; content: string }
  ): Promise<Note | null> {
    const note = await NoteModel.findByIdAndUpdate(id, body, { new: true });
    if (!note) return null;
    return {
      id: (note._id as Types.ObjectId).toHexString(), 
      title: note.title,
      content: note.content
    };
  }

  @Delete('/{id}')
  public async deleteNote(
    @Path() id: string
  ): Promise<{ message: string }> {
    await NoteModel.findByIdAndDelete(id);
    return { message: 'Note deleted successfully' };
  }
}
