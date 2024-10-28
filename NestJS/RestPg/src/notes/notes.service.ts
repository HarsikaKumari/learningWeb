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
    note.emailAddress = createNoteDto.emailAddress;
    note.password = createNoteDto.password;

    return this.noteRepository.save(note);
  }

  findAll() : Promise<Note[]> {
    return this.noteRepository.find();
  }

  findOne(id: string): Promise<Note> {
    return this.noteRepository.findOne({where: {id}});
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    let note: Note = new Note();
    note.emailAddress = updateNoteDto.emailAddress;
    note.password = updateNoteDto.password;
    note.id = id;

    return this.noteRepository.save(note);
  }

  remove(id: string) {
    return this.noteRepository.delete(id);
  }
}
