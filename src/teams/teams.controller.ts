import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TeamsDto } from './teams.dto';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) {}

  @Post()
  async create(@Body() createTeamsDto: TeamsDto) {
    return this.teamsService.createTeam(createTeamsDto);
  }

  @Get()
  async getTeams() {
    return this.teamsService.getTeams();
  }

  @Get(':id')
  async getTeamsById(@Param('id') id: string) {
    return this.teamsService.getTeamsId(id);
  }
}
