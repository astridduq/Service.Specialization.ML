import { Injectable, Logger } from '@nestjs/common';
import { Projects, ProjectsDocument } from './projects.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DatabaseConnection } from 'src/enums/database.connection';


@Injectable()
export class ProjectsService { 
  private readonly logger = new Logger(ProjectsService.name);
  constructor(
    @InjectModel(Projects.name) private projectsModel: Model<ProjectsDocument>,
  ) {}
  
  async createProject(projectsData: any): Promise<any> {
    this.logger.log("Iniciando la creación...")
    const newProjects = await this.projectsModel.create(projectsData);
    return {status: true,
      newProjects
    };
}

  async getProjects() {
    return this.projectsModel.find();
 }

  async getProjectsId(id:string) {
    return this.projectsModel.findById(id);
 } 

}