import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      message,
    };
    try {
      const response = await fetch("https://task30backend.vercel.app/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (response) {
        const result=await response.json();
        console.log(result.data);
        setName("");
        setEmail("");
        setMessage("");
        alert(result.message);
       

      } else {
        return alert("Registration Failed!");
      }
    } catch (error) {
      console.log(error);
    }
  }
    return (
      <>
        <form
          onSubmit={(e) => submitHandler(e)}
          className=" h-96 w-96 flex flex-col gap-8  items-center place-self-center mt-10 shadow-xl rounded-lg p-14 "
        >
          <input
            value={name}
            type="text"
            placeholder="Enter Name Here"
            required
            onChange={(e) => setName(e.target.value)}
            className=" px-14 py-2 border-b-1 border-b-black items-self-start pl-0 outline-0"
          ></input>
          <input
            value={email}
            type="email"
            placeholder="Enter email Here"
            required
            onChange={(e) => setEmail(e.target.value)}
            className=" px-14 py-2 border-b-1 border-b-black items-self-start pl-0 outline-0"
          ></input>
          <input
            value={message}
            type="text"
            placeholder="Enter message Here"
            required
            onChange={(e) => setMessage(e.target.value)}
            className=" px-14 py-2 border-b-1 border-b-black items-self-start pl-0 outline-0"
          ></input>
          <button className="bg-black rounded-lg px-22 py-1 text-lg text-white cursor-pointer">
            Submit
          </button>
        </form>
      </>
    );
  };

export default Form;
