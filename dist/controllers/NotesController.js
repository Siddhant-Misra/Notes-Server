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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesController = void 0;
const tsoa_1 = require("tsoa");
const Note_1 = require("../models/Note");
let NotesController = class NotesController {
    getNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            const notes = yield Note_1.NoteModel.find().exec();
            return notes.map(note => ({
                id: note._id.toHexString(),
                title: note.title,
                content: note.content
            }));
        });
    }
    createNote(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = new Note_1.NoteModel(body);
            const savedNote = yield note.save();
            return {
                id: savedNote._id.toHexString(),
                title: savedNote.title,
                content: savedNote.content
            };
        });
    }
    updateNote(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = yield Note_1.NoteModel.findByIdAndUpdate(id, body, { new: true });
            if (!note)
                return null;
            return {
                id: note._id.toHexString(),
                title: note.title,
                content: note.content
            };
        });
    }
    deleteNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Note_1.NoteModel.findByIdAndDelete(id);
            return { message: 'Note deleted successfully' };
        });
    }
};
exports.NotesController = NotesController;
__decorate([
    (0, tsoa_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getNotes", null);
__decorate([
    (0, tsoa_1.Post)('/'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "createNote", null);
__decorate([
    (0, tsoa_1.Put)('/{id}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "updateNote", null);
__decorate([
    (0, tsoa_1.Delete)('/{id}'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "deleteNote", null);
exports.NotesController = NotesController = __decorate([
    (0, tsoa_1.Route)('notes'),
    (0, tsoa_1.Tags)('Notes')
], NotesController);
