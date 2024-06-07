import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CourierAgentService } from "./courierAgent.service";
import { CourierAgentControllerBase } from "./base/courierAgent.controller.base";

@swagger.ApiTags("courierAgents")
@common.Controller("courierAgents")
export class CourierAgentController extends CourierAgentControllerBase {
  constructor(protected readonly service: CourierAgentService) {
    super(service);
  }
}
