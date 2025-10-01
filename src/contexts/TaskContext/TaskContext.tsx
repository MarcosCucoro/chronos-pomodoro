import { createContext } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import { TaskActionModel } from "./taskAction";

type TaskContexProps = {
  state: TaskStateModel,
  dispatch: React.Dispatch<TaskActionModel>
}

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => { },
} 

export const TaskContext = createContext<TaskContexProps>(initialContextValue);
