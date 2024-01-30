/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { Feature1 } from "./feature1.module"
@Module({
  imports: [Feature1],
  controllers: [],
  providers: [],
})
export class OrderModule {
  constructor() {
    console.log("OrderModule")
  }
}
