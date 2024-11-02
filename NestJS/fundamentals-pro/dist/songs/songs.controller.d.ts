import { Connection } from 'src/common/constants/connection';
import { CreateSongDto } from './dto/Create-song-dto';
import { SongsService } from './songs.service';
export declare class SongsController {
    private songsService;
    private connection;
    constructor(songsService: SongsService, connection: Connection);
    create(createSongDto: CreateSongDto): any[];
    findAll(): any[];
    findOne(id: number): string;
    update(): string;
    delete(): string;
}
