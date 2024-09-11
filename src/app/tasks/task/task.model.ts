export interface Task {
  id: String;
  userId: String;
  title: String;
  summary: String;
  dueDate: String;
}

export interface NewTaskData {
  title: String;
  summary: String;
  date: String;
}
