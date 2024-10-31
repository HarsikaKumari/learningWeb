import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/Create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) { }

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