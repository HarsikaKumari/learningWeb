"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const middleware_middleware_1 = require("./common/middleware/middleware.middleware");
const songs_controller_1 = require("./songs/songs.controller");
const songs_service_1 = require("./songs/songs.service");
const songs_module_1 = require("./songs/songs.module");
const connection_1 = require("./common/constants/connection");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(middleware_middleware_1.MiddlewareMiddleware).forRoutes(songs_controller_1.SongsController);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [songs_module_1.SongsModule],
        controllers: [app_controller_1.AppController, songs_controller_1.SongsController],
        providers: [app_service_1.AppService,
            songs_service_1.SongsService,
            {
                provide: 'CONNECTION',
                useValue: connection_1.connection,
            }
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map