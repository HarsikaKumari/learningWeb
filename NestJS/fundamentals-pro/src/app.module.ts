import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiddlewareMiddleware } from './common/middleware/middleware.middleware';
import { SongsController } from './songs/songs.controller';
import { SongsService } from './songs/songs.service';
import { SongsModule } from './songs/songs.module';
import { connection } from './common/constants/connection';

// const mockSongService = {
//   findAll() {
//     return [{ id: 1, title: 'hello uncle', artist: ['Arijit'] }]
//   },
// };

@Module({
  imports: [SongsModule],
  controllers: [AppController, SongsController],
  providers: [AppService, 
    // {
    //   provide: SongsService,
    //   // useClass: SongsService,
    //   useValue: mockSongService,
    // },
    SongsService,
    {
      provide: 'CONNECTION',
      useValue: connection,
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(MiddlewareMiddleware).forRoutes('songs');
    // consumer.apply(MiddlewareMiddleware).forRoutes({path:'songs', method:RequestMethod.POST})
    consumer.apply(MiddlewareMiddleware).forRoutes(SongsController);
  }
}
