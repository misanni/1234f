import url from "./url";
import { redirect } from "react-router-dom";

const generateTodoObject = async (request) => {
    // get the form data
  const formData = await request.formData();

  // construct new todo
  return {
    subject: formData.get("subject"),
    details: formData.get("details"),
  };
} 

export async function CreateAction({ request }) {
  

  const newTodo = await generateTodoObject(request)

  // request to create route in backend
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  // redirect back to the index page
  return redirect("/");
}

export async function UpdateAction({ request, params }) {
    
    const updatedTodo = await generateTodoObject(request)
  
    // request to update route in backend
    await fetch(url + params.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });
  
    // redirect back to the index page
    return redirect("/");
  }

export async function DeleteAction({params}){
    //get the id
    const id = params.id

    // send request to delete
    await fetch(url + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}