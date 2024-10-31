import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiddlewareMiddleware } from './common/middleware/middleware.middleware';
import { SongsController } from './songs/songs.controller';
import { SongsService } from './songs/songs.service';
import path from 'path';

@Module({
  imports: [],
  controllers: [AppController, SongsController],
  providers: [AppService, SongsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(MiddlewareMiddleware).forRoutes('songs');
    // consumer.apply(MiddlewareMiddleware).forRoutes({path:'songs', method:RequestMethod.POST})
    consumer.apply(MiddlewareMiddleware).forRoutes(SongsController);
  }
}
