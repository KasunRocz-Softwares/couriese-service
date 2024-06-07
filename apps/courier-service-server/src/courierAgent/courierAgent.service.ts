import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourierAgentServiceBase } from "./base/courierAgent.service.base";

@Injectable()
export class CourierAgentService extends CourierAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
