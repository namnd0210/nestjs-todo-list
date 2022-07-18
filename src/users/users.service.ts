import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'user1',
      username: 'user1',
      password: '1',
    },
    {
      id: 2,
      name: 'user2',
      username: 'user2',
      password: '2',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
