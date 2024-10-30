import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {

    @Post('create')
    create() {
        return 'Create a new song!'
    }

    @Get('songs')
    findAll() {
        return 'All songs find!'
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