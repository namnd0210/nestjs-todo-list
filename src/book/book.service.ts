import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  create(createBookDto: Prisma.BookCreateInput) {
    return this.prisma.book.create({
      data: createBookDto,
    });
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(bookWhereUniqueInput: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.findUnique({
      where: bookWhereUniqueInput,
    });
  }

  update(where: Prisma.BookWhereUniqueInput, data: Prisma.BookUpdateInput) {
    return this.prisma.book.update({
      where,
      data,
    });
  }

  remove(where: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.delete({
      where,
    });
  }
}
