// import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(toDo.length < 10) {
        return setToDoError("To Do 길이가 더 길어야 합니다")
    }
    console.log("submit")
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */

function ToDoList() {
    const { register, watch } = useForm();
    console.log(watch());
    return (
        <div>
          <form>
            <input {...register("email")} placeholder="Email" /><br />
            <input {...register("firstName")} placeholder="First Name" /><br />
            <input {...register("lastName")} placeholder="Last Name" /><br />
            <input {...register("username")} placeholder="Username" /><br />
            <input {...register("password")} placeholder="Password" /><br />
            <input {...register("password1")} placeholder="Password1" /><br />
            <button>Add</button>
          </form>
        </div>
      );
}

export default ToDoList;