import React from "react";

type TodoListTypeProps = {
    title: string
    tasks: Array<TaskPropsType>
    removeTasks: (taskId: number) => void
    filterTasks:(filterKey:string)=>void
}
type TaskPropsType = {
    id: number,
    title: string,
    isDone: boolean
}
export function TodoList (props: TodoListTypeProps) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el) => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => {
                                props.removeTasks(el.id)
                            }}>x
                            </button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.filterTasks("All")}>All
                </button>
                <button onClick={() => props.filterTasks("Active")}>Active
                </button>
                <button onClick={() => props.filterTasks("Completed")}>Completed
                </button>
            </div>
        </div>
    )
}