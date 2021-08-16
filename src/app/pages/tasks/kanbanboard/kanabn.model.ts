export interface Task {
  id: number;
  eventName: string;
  dueDate: string;
  tasks: { taskName: string; startDate: string; endDate: string; priority: string }[];
}
