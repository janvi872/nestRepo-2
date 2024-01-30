import { Injectable } from "@nestjs/common";
import { User } from "./data/user.dto";

@Injectable()
export class UserService {
  public users: User[] = [];
  addUser(user: User): string {
    this.users.push(user);
    return JSON.stringify(this.users[this.users.length - 1]);
    // return `User added successfully. ${this.users}`;
  }

  findAllUsers(): User[] {
    return this.users;
  }
  
  updateUser(userId: string, user: User): string {
    console.log(userId, this.users);
    const data = this.users.findIndex((currentUser) => {
      const searchId: number = parseInt(userId);
      return currentUser.id === searchId;
    });
    this.users[data] = {id: user.id, name:user.name, age: user.age};
    return `User updatated successfully ${JSON.stringify(user)}`;
  }

  deleteUser(userId: number, user: User): string {
    const data = this.users.filter((user) => {
      return user.id !== userId;
    });
    console.log(data);
    return `User deleted successfully ${JSON.stringify(user)}`;
  }}

  

  
  // findOne(): string {
  //   return "This action return ID of user.";
  // }

  