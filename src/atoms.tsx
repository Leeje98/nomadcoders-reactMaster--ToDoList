import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const categoryState = atom({
    key: "category",
    default: "TO_DO",
})

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [  // r filter: 조건에 맞는 원소들만 담은 배열을 리턴
      toDos.filter((toDo) => toDo.category === "TO_DO"),  // [{}, {}]
      toDos.filter((toDo) => toDo.category === "DOING"),  // [{}, {}]
      toDos.filter((toDo) => toDo.category === "DONE"),   // [{}, {}]
    ];  // [[{}, {}], [{}, {}], [{}, {}]] 이런 모양 (배열안의 배열)
  },
});
