import { Injectable, Logger } from '@nestjs/common';
import { Videos, VideosDocument } from './videos.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DatabaseConnection } from 'src/enums/database.connection';

@Injectable()
export class VideosService { 
  private readonly logger = new Logger(VideosService.name);
  constructor(
    @InjectModel(Videos.name) private videosModel: Model<VideosDocument>,
  ) {}
  
  async createVideo(videosData: any): Promise<any> {
    this.logger.log("Iniciando la creación...")
    const newVideo = await this.videosModel.create(videosData);
    return {status: true,
      newVideo
    };
}

  async getVideos() {
    return this.videosModel.find();
 }

 async getVideosId(id:string) {
    return this.videosModel.findById(id);
 } 

}
