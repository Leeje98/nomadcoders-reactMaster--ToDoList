// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";


interface IFrom {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
})
 
function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState); 
  const { register, handleSubmit, setValue } = useForm<IFrom>();
  const onSubmit = ({toDo}:IFrom) => {
    setToDos(oldToDos => [{text:toDo, id: Date.now(), category:"TO_DO"}, ...oldToDos])
    setValue("toDo", "")
  }
  console.log(toDos)
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("toDo", {
          required: "필수 항목입니다"
        })} placeholder="Write a to do" />
        <button>Add</button> 
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
} 
 

export default ToDoList;
