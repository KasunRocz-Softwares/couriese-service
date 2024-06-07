import { Module } from "@nestjs/common";
import { CourierAgentModuleBase } from "./base/courierAgent.module.base";
import { CourierAgentService } from "./courierAgent.service";
import { CourierAgentController } from "./courierAgent.controller";
import { CourierAgentResolver } from "./courierAgent.resolver";

@Module({
  imports: [CourierAgentModuleBase],
  controllers: [CourierAgentController],
  providers: [CourierAgentService, CourierAgentResolver],
  exports: [CourierAgentService],
})
export class CourierAgentModule {}
