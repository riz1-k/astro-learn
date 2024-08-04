import { useState } from "react";
import type { TTodo } from "../pages/api/test";

export function CreateTodo() {
  const [newTodo, setNewTodo] = useState<TTodo>({
    id: Date.now(),
    title: "",
    completed: false,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    setNewTodo(data.todo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo?.title || ""}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
