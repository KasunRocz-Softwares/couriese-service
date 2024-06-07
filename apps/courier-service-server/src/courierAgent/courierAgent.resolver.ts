import * as graphql from "@nestjs/graphql";
import { CourierAgentResolverBase } from "./base/courierAgent.resolver.base";
import { CourierAgent } from "./base/CourierAgent";
import { CourierAgentService } from "./courierAgent.service";

@graphql.Resolver(() => CourierAgent)
export class CourierAgentResolver extends CourierAgentResolverBase {
  constructor(protected readonly service: CourierAgentService) {
    super(service);
  }
}
