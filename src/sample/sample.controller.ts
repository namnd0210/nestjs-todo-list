import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SampleService } from './sample.service';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { Sample } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Post()
  async create(@Body() createSampleDto: CreateSampleDto): Promise<Sample> {
    return await this.sampleService.create(createSampleDto);
  }

  @Get()
  async findAll(@Query('page') page?: number): Promise<{
    data: Sample[];
    total: number;
  }> {
    return await this.sampleService.findAll({ page });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<{
    data: Sample;
  }> {
    return await this.sampleService.findOne({ id: +id });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSampleDto: UpdateSampleDto,
  ): Promise<Sample> {
    return await this.sampleService.update({ id: +id }, updateSampleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Sample> {
    return await this.sampleService.remove({ id: +id });
  }
}
