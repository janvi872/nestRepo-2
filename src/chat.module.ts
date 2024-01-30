/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { Feature2 } from "./feature2"

@Module({
  imports: [Feature2],
  controllers: [],
  providers: [],
})
export class ChatModule {
  constructor() {
    console.log("ChatModule")
  }
}
