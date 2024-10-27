import { CreateNoteDto } from './create-note.dto';
declare const UpdateNoteDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateNoteDto>>;
export declare class UpdateNoteDto extends UpdateNoteDto_base {
    id: number;
    title: string;
    description: string;
    isActive: boolean;
}
export {};
