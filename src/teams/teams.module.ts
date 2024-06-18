import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teams, TeamsSchema } from './teams.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teams.name, schema: TeamsSchema }]),
  ],
  providers: [TeamsService],
  controllers: [TeamsController]
})
export class TeamsModule {}
