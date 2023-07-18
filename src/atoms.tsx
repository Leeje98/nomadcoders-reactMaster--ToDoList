import { atom, selector } from "recoil";


// export enum Categories {  // enum 은 기본적으로 어떤 문자로 정의되었던 간에 인덱스 숫자로 인식한다
//   "TO_DO",
//   "DOING",
//   "DONE",
// }
export enum Categories {  
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}  // 이렇게 정의내려주면 숫자가 아닌 정의한 string으로 인식한다 -> 개발자가 어떤 데이터 타입으로 쓰고 싶냐에 따라 쓰고싶은대로 쓰면 됨


export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
})

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // if (category === "TO_DO") 
    //   return toDos.filter((toDo) => toDo.category === "TO_DO");
    // if (category === "DOING") 
    //   return toDos.filter((toDo) => toDo.category === "DOING");
    // if (category === "DONE") 
    //   return toDos.filter((toDo) => toDo.category === "DONE");
    return toDos.filter((toDo) => toDo.category === category);
  },
});
