import { CourierAgent as TCourierAgent } from "../api/courierAgent/CourierAgent";

export const COURIERAGENT_TITLE_FIELD = "name";

export const CourierAgentTitle = (record: TCourierAgent): string => {
  return record.name?.toString() || String(record.id);
};
