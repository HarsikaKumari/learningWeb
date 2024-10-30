import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/Create-song-dto';
export declare class SongsController {
    private readonly songsService;
    constructor(songsService: SongsService);
    create(createSongDto: CreateSongDto): any[];
    findAll(): any[];
    findOne(): string;
    update(): string;
    delete(): string;
}
