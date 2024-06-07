export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  recipient: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
