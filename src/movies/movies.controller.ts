import { Controller,Get,Param,Delete,Post,Patch,Body,Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {

  }

  @Get()
  getAll():Movie[]{
    return this.moviesService.getAll();
  }
  
  // @Get("search")
  // search(@Query("year") searchingYear: number){
  //   return `We are searching for a movie made after: ${searchingYear}`;
  // }

  @Get(":id")
  getOne(@Param("id") movieId:number) : Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.create(movieData);
  }
  
  @Delete()
  remove(@Param('id') movieId:number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  path(@Param('id') movieId: number, @Body() upateData: UpdateMovieDTO) {
    return this.moviesService.update(movieId, upateData);
  }

}