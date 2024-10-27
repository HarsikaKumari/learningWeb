import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {

  //inject notes repository
  constructor(@InjectRepository(Note) private readonly noteRepository: Repository<Note> ) { }

  create(createNoteDto: CreateNoteDto) : Promise<Note> {
    let note: Note = new Note();
    note.id = createNoteDto.id;
    note.title = createNoteDto.title;
    note.description = createNoteDto.description;
    note.isActive = createNoteDto.isActive;

    return this.noteRepository.save(note);
  }

  findAll() : Promise<Note[]> {
    return this.noteRepository.find();
  }

  findOne(id: number): Promise<Note> {
    return this.noteRepository.findOne({where: {id}});
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    let note: Note = new Note();
    note.id = updateNoteDto.id;
    note.title = updateNoteDto.title;
    note.description = updateNoteDto.description;
    note.isActive = updateNoteDto.isActive;
    note.id = id;

    return this.noteRepository.save(note);
  }

  remove(id: number) {
    return this.noteRepository.delete(id);
  }
}
