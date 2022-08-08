import { Injectable } from '@nestjs/common';
import { Prisma, Sample } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SampleService {
  constructor(private prisma: PrismaService) {}

  create(createSampleDto: Prisma.SampleCreateInput): Promise<Sample> {
    return this.prisma.sample.create({
      data: createSampleDto,
    });
  }

  async findAll({ page = 1 }: { page?: number }): Promise<{
    data: Sample[];
    total: number;
  }> {
    const [total, data] = await this.prisma.$transaction([
      this.prisma.sample.count(),
      this.prisma.sample.findMany({
        take: 10,
        skip: 10 * (page - 1),
      }),
    ]);

    return {
      data,
      total,
    };
  }

  async findOne(
    sampleWhereUniqueInput: Prisma.SampleWhereUniqueInput,
  ): Promise<{
    data: Sample;
  }> {
    const result = await this.prisma.sample.findUnique({
      where: sampleWhereUniqueInput,
    });

    return {
      data: result,
    };
  }

  update(
    where: Prisma.SampleWhereUniqueInput,
    data: Prisma.SampleUpdateInput,
  ): Promise<Sample> {
    return this.prisma.sample.update({
      where,
      data,
    });
  }

  remove(where: Prisma.SampleWhereUniqueInput): Promise<Sample> {
    return this.prisma.sample.delete({
      where,
    });
  }
}
