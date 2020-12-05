import { useState } from "react";
import { Alert, Button, Col } from "reacthalfmoon";

function Task({task, i, deleteTask}){

    const [showOptions, setShowOptions] = useState(false);
    if(task.isDue) return <></> 
    const deadline = new Date(task.deadline);
    const dateString = deadline.toDateString();
    const timeString = deadline.toLocaleTimeString(); 

    const doneAt = new Date(task.doneAt);
    const doneAtDateString = doneAt.toDateString();
    const doneAtTimeString = doneAt.toLocaleTimeString();

    const color = deadline > doneAt ? "success" : "danger";
    return <Col size={12} lg={6} className="p-5" key={task.deadline + i}> 
    <Alert filled color={color}>

        <span style={{position: 'absolute', right: '10px'}} onClick={() => {setShowOptions(!showOptions)}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="black" /><path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="black" /><path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="black" /></svg>
        </span>

        <strong style={{fontSize: '1.2em'}}>{task.title}</strong>

        <div style={{color:"black", opacity: '0.5', fontSize: '0.9em'}}>{dateString + ", " + timeString} | {doneAtDateString + ", " + doneAtTimeString}</div>
        {task.desc}

        <div style={showOptions ? {} : {display: 'none'}}>
            <Button size="sm" color="danger" onClick={() => {deleteTask(i)}}>Delete</Button>
        </div>

    </Alert>
    </Col>

}

function CompletedTasks({tasks, deleteTask}) {
    return tasks.map((task, i) => { return <Task task={task} i={i} deleteTask={deleteTask} key={task.deadline + i} />})
}
export default CompletedTasks;