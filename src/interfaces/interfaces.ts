export interface ITask {
  id?: string;
  title?: string;
  done?: boolean;
}

export interface BoardProps {
  tasks: ITask[];
}
