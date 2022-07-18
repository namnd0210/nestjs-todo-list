import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { AuthorsModule } from './authors/authors.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BookModule, AuthorsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
