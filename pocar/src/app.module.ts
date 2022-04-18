import { Module } from '@nestjs/common';
import { ReportModule } from './report/report.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/user.entity';
import { Report } from './report/report.entity';

@Module({
    imports:[ConfigModule.forRoot(),UserModule,ReportModule,TypeOrmModule.forRoot({
        type: 'postgres',
        host:  process.env.DATABSE_DOMAIN,
        port:  parseInt(process.env.DATABSE_PORT),
        username: process.env.DATABSE_USER,
        password:  process.env.DATABSE_PASS,
        database:  process.env.DATABSE_NAME,
        entities: [User,Report],
        synchronize: true,
    })]
})
export class AppModule {}
