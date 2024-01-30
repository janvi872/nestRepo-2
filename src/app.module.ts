import { Module } from "@nestjs/common";
// import { UserModule } from "./user.module";
// import { ChatModule } from "./chat.module";
// import { OrderModule } from "./order.module";
import { UserController } from "./Users/user.controller";
import { UserService } from "./Users/user.service";
import { UserModule } from "./user.module";

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers : [UserService],
})
export class RootModule {
  constructor() {
    console.log("AppModule");
  }
}
