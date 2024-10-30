import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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
        return this.songsService.findAll()
    }

    @Get(':id')
    findOne() {
        return 'Find song based on ID'
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