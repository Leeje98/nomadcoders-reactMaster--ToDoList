import React from "react";
import { Categories, IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
//   const onClick = (newCategory: IToDo["category"]) => {
//     console.log(newCategory);
//   };
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
        currentTarget: { name },
    } = event;
    setToDos(oldToDos => {
        const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
                                   // findIndex() : 주어진 함수를 통과한 첫 번째 요소의 인덱스 값 반환
                                                 // 조건에 맞는 요소를 찾을 수 없다면 -1을 반환
        // const oldToDo = oldToDos[targetIndex];
        const newToDo = {text, id, category: name as any}; // as any : 타입스크립트의 문법을 탈출
        // console.log(oldToDo, newToDo);
        return [
            ...oldToDos.slice(0, targetIndex),
            newToDo,
            ...oldToDos.slice(targetIndex + 1),
        ]
    })
  };
  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => { 
    setToDos(oldToDos => {
        const targetIndex = oldToDos.findIndex(toDo => toDo.id === id) 
        return [
            ...oldToDos.slice(0, targetIndex),
            ...oldToDos.slice(targetIndex + 1),
        ]
    })
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        // <button onClick={() => onClick("DOING")}>Doing</button>
        <button name={Categories.DOING} onClick={onClick}>Doing</button>
      )}
      {category !== Categories.TO_DO && (
        // <button onClick={() => onClick("TO_DO")}>To Do</button>
        <button name={Categories.TO_DO} onClick={onClick}>To Do</button>
      )}
      {category !== Categories.DONE && (
        // <button onClick={() => onClick("DONE")}>Done</button>
        <button name={Categories.DONE} onClick={onClick}>Done</button>
      )}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ToDo;
