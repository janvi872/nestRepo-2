import { User } from "./data/user.dto";
import { UserService } from "./user.service";
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("/add")
  addUser(@Body() user: User): string {
    return this.userService.addUser(user);
  }

  @Put("/update/:id")
  updateUser(@Param("id") userId: string, @Body() user: User): string {
    console.log(userId, user);
    return this.userService.updateUser(userId, user);
  }

  @Delete("/delete/:id")
  deleteUser(@Param("id") userId: number, @Body() user: User): string {
    return this.userService.deleteUser(userId, user);
  }

  @Get("/findall")
  findAllUsers(): User[] {
    return this.userService.findAllUsers();
  }
  // @Get("/findOne/:id")
  // findOne(): string {
  //   return this.userService.findOne();
  // }
}
