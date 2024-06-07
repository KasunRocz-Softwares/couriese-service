/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CourierAgent } from "./CourierAgent";
import { CourierAgentCountArgs } from "./CourierAgentCountArgs";
import { CourierAgentFindManyArgs } from "./CourierAgentFindManyArgs";
import { CourierAgentFindUniqueArgs } from "./CourierAgentFindUniqueArgs";
import { CreateCourierAgentArgs } from "./CreateCourierAgentArgs";
import { UpdateCourierAgentArgs } from "./UpdateCourierAgentArgs";
import { DeleteCourierAgentArgs } from "./DeleteCourierAgentArgs";
import { DeliveryFindManyArgs } from "../../delivery/base/DeliveryFindManyArgs";
import { Delivery } from "../../delivery/base/Delivery";
import { CourierAgentService } from "../courierAgent.service";
@graphql.Resolver(() => CourierAgent)
export class CourierAgentResolverBase {
  constructor(protected readonly service: CourierAgentService) {}

  async _courierAgentsMeta(
    @graphql.Args() args: CourierAgentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CourierAgent])
  async courierAgents(
    @graphql.Args() args: CourierAgentFindManyArgs
  ): Promise<CourierAgent[]> {
    return this.service.courierAgents(args);
  }

  @graphql.Query(() => CourierAgent, { nullable: true })
  async courierAgent(
    @graphql.Args() args: CourierAgentFindUniqueArgs
  ): Promise<CourierAgent | null> {
    const result = await this.service.courierAgent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CourierAgent)
  async createCourierAgent(
    @graphql.Args() args: CreateCourierAgentArgs
  ): Promise<CourierAgent> {
    return await this.service.createCourierAgent({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CourierAgent)
  async updateCourierAgent(
    @graphql.Args() args: UpdateCourierAgentArgs
  ): Promise<CourierAgent | null> {
    try {
      return await this.service.updateCourierAgent({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CourierAgent)
  async deleteCourierAgent(
    @graphql.Args() args: DeleteCourierAgentArgs
  ): Promise<CourierAgent | null> {
    try {
      return await this.service.deleteCourierAgent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Delivery], { name: "deliveries" })
  async findDeliveries(
    @graphql.Parent() parent: CourierAgent,
    @graphql.Args() args: DeliveryFindManyArgs
  ): Promise<Delivery[]> {
    const results = await this.service.findDeliveries(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
