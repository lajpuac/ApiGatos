import { ReactNode } from "react"

type SubTask = {
  text: string;
  completed: boolean;
};

type Props = {
    children?: ReactNode;
    completed?: boolean;
    importancia?: number;
    subtaks: SubTask[];
};

export default function Todo({children, completed = false, importancia = 0, subtaks=[]}: Props ){
  return (
    <li className={completed ? "line-through" : undefined}>
        {children}
        { completed && <span>✅</span> }
        { importancia > 0 && <span> importancia {importancia}</span> }
    </li> 
  )
}