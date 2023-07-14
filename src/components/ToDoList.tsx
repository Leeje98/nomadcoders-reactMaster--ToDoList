// import React, { useState } from "react";
// import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState } from "../atoms";
import ToDo from "./ToDo";

 
function ToDoList() {
  const toDos = useRecoilValue(toDoState); 
  
  console.log(toDos)
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {/* {toDos.map((toDo) => <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />)} */}
        {/* {toDos.map((toDo) => <ToDo {...toDo}/>)}  윗줄과 동일내용임 */}
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}/>
        ))} 
      </ul>
    </div>
  );
} 
 

export default ToDoList;
