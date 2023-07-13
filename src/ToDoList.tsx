// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DefaultValue } from "recoil";

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

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
}

function ToDoList() {
  const { register, watch, handleSubmit, formState:{errors} } = useForm<IForm>({
    defaultValues: {
        email: "@naver.com"
    }
  });
  // register : 어떤 input을 관리하는지 (key)
  // watch : onChange 대체
  // handleSubmit : submit 대체
  const onValid = (data: any) => {
    console.log(data);
  };
  //   console.log(watch());
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "이메일은 필수 입력 항목입니다",
            pattern: {
                value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                message: "naver.com 주소만 허용됩니다.",
            }
          })}
          placeholder="Email"
        />
        {/* <span>{errors?.email?.message}</span> */}
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstName", { required: "필수 입력 항목입니다" })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: "필수 입력 항목입니다" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message as string}</span>
        <input
          {...register("username", { required: "필수 입력 항목입니다", minLength: 10 })}
          placeholder="Username"
        />
        <span>{errors?.username?.message as string}</span>
        <input
          {...register("password", {
            required: "패스워드가 필요합니다",
            minLength: {
              value: 5,
              message: "최소 5글자 이상으로 설정해주세요",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message as string}</span>
        <input
          {...register("password1", { required: "필수 입력 항목입니다", minLength: 5 })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
