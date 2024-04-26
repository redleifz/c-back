import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config/ormconfig';


@Module({
  imports: [
    PatientsModule,
    TypeOrmModule.forRoot(config),
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
