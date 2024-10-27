import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Repository } from 'typeorm';
import { Note } from './entities/note.entity';
export declare class NotesService {
    private readonly noteRepository;
    constructor(noteRepository: Repository<Note>);
    create(createNoteDto: CreateNoteDto): Promise<Note>;
    findAll(): Promise<Note[]>;
    findOne(id: number): Promise<Note>;
    update(id: number, updateNoteDto: UpdateNoteDto): Promise<Note>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
