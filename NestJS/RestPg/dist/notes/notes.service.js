"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const note_entity_1 = require("./entities/note.entity");
let NotesService = class NotesService {
    constructor(noteRepository) {
        this.noteRepository = noteRepository;
    }
    create(createNoteDto) {
        let note = new note_entity_1.Note();
        note.id = createNoteDto.id;
        note.title = createNoteDto.title;
        note.description = createNoteDto.description;
        note.isActive = createNoteDto.isActive;
        return this.noteRepository.save(note);
    }
    findAll() {
        return this.noteRepository.find();
    }
    findOne(id) {
        return this.noteRepository.findOne({ where: { id } });
    }
    update(id, updateNoteDto) {
        let note = new note_entity_1.Note();
        note.id = updateNoteDto.id;
        note.title = updateNoteDto.title;
        note.description = updateNoteDto.description;
        note.isActive = updateNoteDto.isActive;
        note.id = id;
        return this.noteRepository.save(note);
    }
    remove(id) {
        return this.noteRepository.delete(id);
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(note_entity_1.Note)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], NotesService);
//# sourceMappingURL=notes.service.js.map