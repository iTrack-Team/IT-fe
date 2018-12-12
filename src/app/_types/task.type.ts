export interface Task {
  name: string;
  description: string;
}
export interface moveTask{
  columnFrom: string;
  columnTo: string;
}
export interface TaskId {
  _id: string;
}
export interface Column{
  _id: string;
  name: string;
  tasks: Array<Object>;
}
