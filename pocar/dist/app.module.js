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
const report_module_1 = require("./report/report.module");
const user_module_1 = require("./user/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./user/user.entity");
const report_entity_1 = require("./report/report.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), user_module_1.UserModule, report_module_1.ReportModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DATABSE_DOMAIN,
                port: parseInt(process.env.DATABSE_PORT),
                username: process.env.DATABSE_USER,
                password: process.env.DATABSE_PASS,
                database: process.env.DATABSE_NAME,
                entities: [user_entity_1.User, report_entity_1.Report],
                synchronize: true,
            })]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map