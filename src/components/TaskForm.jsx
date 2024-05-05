import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSUbmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto ">
      <form onSubmit={handleSUbmit} className="bg-slate-800 p-10 mb-4  text-center ">
        <h1 className="text-2xl text-white mb-3">Create your task</h1>
        <input
          placeholder="Writes your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-500 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Writes"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-500 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 ">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
