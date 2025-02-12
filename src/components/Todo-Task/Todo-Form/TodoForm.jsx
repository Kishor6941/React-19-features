import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../../slices/TodoSlice";
import { toast } from "react-toastify";

const TodoForm = () => {
  const [task, setTask] = useState({
    id: "",
    title: "",
  });

  const [id, setId] = useState("");

  const dispatch = useDispatch();

  let addTodoFun = () => {
    if (task.title === "") {
      alert("Please enter a task");
      return;
    } else {
        if(id){
            dispatch(updateTodo({id, title: task.title}));
            toast.info("Task Updated Successfully");
            setTask({ title: "", id: "" });
            setId("");
        } else {
            dispatch(addTodo(task));
            toast.success("Task Added Successfully");
            setTask({ title: "", id: "" });
        }
    }
  };
  return (
    <div>
      <div className="container">
        <div className="col-md-8 offset-md-3 mt-3">
          <h1 className="ml-4">Todo List</h1>
          <div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a task"
                  value={task.title}
                  onChange={(e) =>
                    setTask({ title: e.target.value, id: uuidv4() })
                  }
                />
              </div>
              <div className="col-md-3">
                <button className="btn btn-success" onClick={addTodoFun}>
                  {id ? 'Update' : 'Add'} Task
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3 col-md-7">
            <TodoList setTask={setTask} setId={setId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
