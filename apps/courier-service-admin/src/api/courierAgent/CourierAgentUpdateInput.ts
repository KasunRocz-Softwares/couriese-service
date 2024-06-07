import { DeliveryUpdateManyWithoutCourierAgentsInput } from "./DeliveryUpdateManyWithoutCourierAgentsInput";

export type CourierAgentUpdateInput = {
  deliveries?: DeliveryUpdateManyWithoutCourierAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
