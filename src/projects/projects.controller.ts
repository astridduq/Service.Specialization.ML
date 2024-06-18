import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectDto } from './projects.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() createProjectsDto: ProjectDto) {
    return this.projectsService.createProject(createProjectsDto);
  }

  @Get()
  async getProjects() {
    return this.projectsService.getProjects();
  }

  @Get(':id')
  async getProjectById(@Param('id') id: string) {
    return this.projectsService.getProjectsId(id);
  }
}
