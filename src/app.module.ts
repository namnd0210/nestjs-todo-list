import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { AuthorsModule } from './authors/authors.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [BookModule, AuthorsModule, AuthModule, UsersModule, SampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
