"use client";

import {Todo} from '@/components'
import TodoList from '@/components/TodoList';

const task = [
  {text: "PRIMERA TAREA", importancia: 0, subtask: [
    {text: "Estudiar redes", completed: true, importancia: 0},
  {text: "Ayudar en Expo Landivar", completed: false, importancia: 1},
  {text: "Prepararme para el viaje", completed: true, importancia: 5},
  {text: "Terminar mi cerradura digital", completed: false, importancia: 0},
  ]},

  {text: "SEGUNDA TAREA", importancia: 0, subtask: [
    {text: "Estudiar redes2", completed: true, importancia: 0},
  {text: "Ayudar en Expo Landivar2", completed: true, importancia: 1},
  {text: "Prepararme para el viaje2", completed: true, importancia: 5},
  {text: "Terminar mi cerradura digital2", completed: true, importancia: 0},
  ]},
];

export default function Home() {

  return (
    <div>
      <TodoList title= "Tareas" tasks={task}/>
    </div>
  ); 
}
