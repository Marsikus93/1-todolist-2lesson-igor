import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";

function App() {
    let currentTitle = "what to learn1"
    let [tasks1, setTasks1] = useState(
        [
            {id: 1, title: "HTML and CSS", isDone: true},//0
            {id: 2, title: "JS", isDone: true},//1
            {id: 3, title: "react", isDone: false},//2
        ]
    )

    const [filterValueKey, setFilterValueKey] = useState("All")

    const removeTask = (taskId: number) => {
        setTasks1(tasks1.filter(el => el.id !== taskId))
    }

    const filterTasks = (filterKey: string) => {
        setFilterValueKey(filterKey)
    }
    const fooFilter=()=>{
        let filteredTasks = tasks1
        if (filterValueKey === 'Active') {
        return    filteredTasks = tasks1.filter(el => el.isDone)
        }
        if (filterValueKey === 'Completed') {
           return filteredTasks = tasks1.filter(el => !el.isDone)
        }
        return filteredTasks
    }

    return (
        <div className="App">
            <TodoList title={currentTitle}
                      tasks={fooFilter()}
                      removeTasks={removeTask}
                      filterTasks={filterTasks}
            />
        </div>
    );
}

export default App;
