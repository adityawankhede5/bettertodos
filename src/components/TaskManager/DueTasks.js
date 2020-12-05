import { useState } from "react";
import { Alert, Button, Col } from "reacthalfmoon";

function Task({task, i, deleteTask, completeTask}){

    const [showOptions, setShowOptions] = useState(false);
    if(!task.isDue) return <></> 
    const deadline = new Date(task.deadline);
    const dateString = deadline.toDateString();
    const timeString = deadline.toLocaleTimeString();
    let color = "primary";
    const t = new Date();
    if(t>deadline) color = "danger";
    else if(t<deadline){
        t.setHours(t.getHours() + 1);
        if(t>=deadline) color="secondary"
    } 

    return <Col size={12} lg={6} className="p-5" key={task.deadline + i}> 
    <Alert color={color}>

        <span style={{position: 'absolute', right: '10px'}} onClick={() => {setShowOptions(!showOptions)}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="black" /><path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="black" /><path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="black" /></svg>
        </span>

        <strong style={{fontSize: '1.2em'}}>{task.title}</strong>

        <div style={{color:"gray", fontSize: '0.9em'}}>{dateString + ", " + timeString}</div>
        {task.desc}

        <div style={showOptions ? {} : {display: 'none'}}>
            <Button size="sm" color="success" onClick={() => {completeTask(i)}}>Done</Button>{" "}
            <Button size="sm" color="danger" onClick={() => {deleteTask(i)}}>Delete</Button>
        </div>

    </Alert>
    </Col>

}

function DueTasks({tasks, deleteTask, completeTask}) {
    return tasks.map((task, i) => { return <Task task={task} i={i} deleteTask={deleteTask} completeTask={completeTask} key={task.deadline + i} />})
}
export default DueTasks;