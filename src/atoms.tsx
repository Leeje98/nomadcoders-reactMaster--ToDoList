import { set } from "react-hook-form";
import { atom, selector } from "recoil"; 

export const minuteState = atom({
  key: "minutes",
  default: 0,
})

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60; 
    set(minuteState, minutes);
    // 첫번째: 수정하고 싶은 atom / 두번째: 넣어줄 값
  },
})