import { useState, useEffect } from "react";
import {  Container, Content, Row, Col } from "reacthalfmoon";
import { Route, Switch } from 'react-router-dom';
import NewTask from "./NewTask";
import DueTasks from "./DueTasks";
import CompletedTasks from "./CompletedTasks";

function TaskManger() {
    const [tasks, setTasks] = useState([]);
    const insertTask = (t) => {
        const updatedTasks = tasks.slice();
        updatedTasks.push(t);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task, i) => {return id!==i});
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
    const completeTask = (id) => {
        const updatedTasks = tasks.slice();
        updatedTasks[id].isDue = false;
        updatedTasks[id].doneAt = new Date().toJSON();
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    useEffect(() => {
        if(localStorage.getItem("tasks")){
            const localTasks = JSON.parse(localStorage.getItem("tasks"));
            setTasks(localTasks);
        }else{
            localStorage.setItem("tasks", JSON.stringify([]));
        }
    }, []);

    return (
        <Container breakpoint="fluid">
            <Content>
            <Switch>
                <Route exact path="/">
                    <Row>
                        <NewTask insertTask={insertTask} />
                    </Row>
                    <Row>
                        <Col size={12} style={{fontWeight: 'bold', fontSize: '1.5em', marginTop: '10px'}}>Due Tasks</Col>
                    </Row>
                    <Row>
                        <DueTasks tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
                    </Row>
                </Route>
                <Route path="/done">
                    <Row>
                        <Col size={12} style={{fontWeight: 'bold', fontSize: '1.5em', marginTop: '10px'}}>Completed Tasks</Col>
                    </Row>
                    <Row>
                        <CompletedTasks tasks={tasks} deleteTask={deleteTask} />
                    </Row>
                </Route>
            </Switch>
            </Content>
        </Container>
        
    )
}

export default TaskManger;