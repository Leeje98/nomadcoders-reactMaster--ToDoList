import React from 'react'
import { useForm } from "react-hook-form"
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';


interface IFrom {
    toDo: string;
}

  
function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState)
    const { register, handleSubmit, setValue } = useForm<IFrom>();
    const handleValid = ({toDo}:IFrom) => {
        setToDos(oldToDos => [{text:toDo, id: Date.now(), category:"TO_DO"}, ...oldToDos])
        setValue("toDo", "")
    }
  return (
    <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("toDo", {
            required: "필수 항목입니다"
        })} placeholder="Write a to do" />
        <button>Add</button> 
    </form>
  )
}

export default CreateToDo