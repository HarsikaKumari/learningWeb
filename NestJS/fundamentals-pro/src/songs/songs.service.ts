import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

    private readonly songs = [];

    create(song) {
        //saving the song in the database
        this.songs.push(song);
        return this.songs;
    }

    findAll() {
        // throw new Error("Got error while fetching");
        return this.songs;
    }
}
