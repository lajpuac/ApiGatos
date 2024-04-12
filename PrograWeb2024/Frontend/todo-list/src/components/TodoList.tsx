import Todo from "./Todo";

type SubTask = {
    text: string;
    completed: boolean;
};

type Task = {
    text: string;
    importancia: number;
    subtask: SubTask[];
};

type Props = {
    title: string;
    tasks: Task[];
};

export default function TodoList({title, tasks}: Props){
  const esCompleto = (task: Task):boolean => {
    return task.subtask.every(subtask => subtask.completed);
  };

  return (
    <div>
      <h1 className="text-4xl"> {title}</h1>
        {tasks.map(task => {
            const id = crypto.randomUUID();
            return (
              <div key={id}>
                <h2>{task.text}</h2>
                <ul className="list-disc">
                  {task.subtask.map(subtask =>{
                    const subtaskId = crypto.randomUUID();
                    return (
                      <Todo
                        key={subtaskId} 
                        completed={subtask.completed}
                      > 
                      {subtask.text}
                    </Todo>
                    );
                  })}
                </ul>
                {esCompleto(task) && <span> Tarea Completada</span>}
              </div>  
            );
        })}
    </div>
  );
}