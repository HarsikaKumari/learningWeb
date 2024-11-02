import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Connection } from 'src/common/constants/connection';
import { CreateSongDto } from './dto/Create-song-dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(
        private songsService: SongsService,
        @Inject('CONNECTION')
        private connection: Connection,
    ) {
        console.log(`This is connection String ${this.connection.CONNECTION_STRING}`);
     }

    @Post()
    create(@Body() createSongDto: CreateSongDto) {
        return this.songsService.create(createSongDto);
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
        } catch (e) {
            console.log(e);
            throw new HttpException(
                "I'am getting an server error",
                HttpStatus.INTERNAL_SERVER_ERROR,
                {
                    cause: e
                },
            );
        }
    }

    @Get(':id')
    //validate input arguments using pipe
    findOne(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
        id: number
    ) {
        return `Find song based on ${typeof id}`
    }

    @Put(':id')
    update() {
        return 'Update song based on ID'
    }

    @Delete(':id')
    delete() {
        return "Delete song based on ID"
    }
}