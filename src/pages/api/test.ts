// SSR API endpoint template

// Tell Astro that this component should run on the server
// You only need to specify this if you're using the hybrid output
export const prerender = false;

// Import the APIRoute type from Astro
import type { APIRoute } from "astro";

export type TTodo = {
  id: number;
  title: string;
  completed: boolean;
};

const todos: TTodo[] = [];
// This function will be called when the endpoint is hit with a GET request
export const GET: APIRoute = async () => {
  // Return a 200 status and a response to the frontend
  return Response.json({
    todos,
  });
};

export const POST: APIRoute = async ({ request }) => {
  const { title } = await request.json();
  const todo: TTodo = {
    id: Date.now(),
    title,
    completed: false,
  };

  todos.push(todo);

  return Response.json({
    todo,
  });
};
