// import React, { useState } from "react";
// import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";
 

function ToDoList() {
  // const toDos = useRecoilValue(toDoState); 
  // console.log(toDos);
  const [toDo, doing, done] = useRecoilValue(toDoSelector)
        // ㄴapi 파일의 toDoSelector 함수의 리턴값 모양 그대로 불러오기 
  // console.log(selectorOutput);

  return (
    <div>
      <h1>To Dos</h1>
      <CreateToDo />
      <hr />
      <h2>To Do</h2>
      <ul>
        {/* {toDos.map((toDo) => <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />)} */}
        {/* {toDos.map((toDo) => <ToDo {...toDo}/>)}  윗줄과 동일내용임 */}
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}/>
        ))} 
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul> 
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}/>
        ))} 
      </ul>
      <hr />
      <h2>Done</h2>
      <ul> 
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}/>
        ))} 
      </ul>
      <hr />
    </div>
  );
} 
 

export default ToDoList;
