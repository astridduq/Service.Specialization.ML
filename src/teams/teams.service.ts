import { Injectable, Logger } from '@nestjs/common';
import { Teams, TeamsDocument } from './teams.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DatabaseConnection } from 'src/enums/database.connection';

@Injectable()
export class TeamsService { 
  private readonly logger = new Logger(TeamsService.name);
  constructor(
    @InjectModel(Teams.name) private teamsModel: Model<TeamsDocument>,
  ) {}
  
  async createTeam(teamData: any): Promise<any> {
    this.logger.log("Iniciando la creación...")
    const newTeam = await this.teamsModel.create(teamData);
    return {status: true,
      newTeam
    };
}

  async getTeams() {
    return this.teamsModel.find();
 }

 async getTeamsId(id:string) {
    return this.teamsModel.findById(id);
 } 
}
