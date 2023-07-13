// import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IFrom {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IFrom>();
  const onSubmit = (data:IFrom) => {
    console.log('add to do', data.toDo)
    setValue("toDo", "")
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("toDo", {
          required: "필수 항목입니다"
        })} placeholder="Write a to do" />
        <button>Add</button> 
      </form>
    </div>
  );
} 
 

export default ToDoList;
