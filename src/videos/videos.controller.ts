import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VideosDto } from './videos.dto';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
    constructor(private readonly videosService: VideosService) {}

  @Post()
  async create(@Body() createVideosDto: VideosDto) {
    return this.videosService.createVideo(createVideosDto);
  }

  @Get()
  async getVideos() {
    return this.videosService.getVideos();
  }

  @Get(':id')
  async getVideosById(@Param('id') id: string) {
    return this.videosService.getVideosId(id);
  }
}
