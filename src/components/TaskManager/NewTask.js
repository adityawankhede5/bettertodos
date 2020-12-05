import { useState } from "react";
import { Alert, Button, Col, Collapse, CollapseContent, CollapseHeader, Form, FormGroup, FormText, Input, Row, TextArea } from "reacthalfmoon";


function NewTask({insertTask}) {
    
    const [isOpen, setIsOpen] = useState(false);
    const [deadlineOption, setDeadlineOption] = useState(0);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [deadlineDate, setDeadlineDate] = useState("");
    const [deadlineTime, setDeadlineTime] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const addTask = () => {
        setErrorMsg("");
        if (title === "" && desc === "") {
            setErrorMsg("Must provide a title or a description")
            return;
        }
        const deadline = new Date();
        if (deadlineOption === 0) {
            deadline.setHours(23, 59, 59, 999);
        } else if (deadlineOption === 1) {
            deadline.setHours(deadline.getHours() + 24);
        } else if (deadlineOption === 2) {
            if(deadlineTime === ""){
                setErrorMsg("Must provide a time.")
                return;
            }
            const [hrs, min] = deadlineTime.split(":");
            deadline.setHours(hrs, min, 0, 0);
        } else {
            if(deadlineDate === ""){
                setErrorMsg("Must provide a date.")
                return;
            }
            if(deadlineTime === ""){
                setErrorMsg("Must provide a time.")
                return;
            }
            const [year, month, day] = deadlineDate.split("-");
            const [hrs, min] = deadlineTime.split(":");
            deadline.setFullYear(year, month, day);
            deadline.setHours(hrs, min, 0, 0);
        }
        const task = {
            title: title,
            desc: desc,
            deadline: deadline.toJSON(),
            isDue: true,
            doneAt: null
        }
        insertTask(task);
        resetNewTask();
        setIsOpen(false);
    }

    const resetNewTask = () => {
        setTitle("");
        setDesc("");
        setDeadlineOption(0);
        setDeadlineTime("");
        setDeadlineDate("");
        setErrorMsg("");
    }

    return (
        <>
            {/* FORM */}
            <Col size={12} lg={6} className="p-5">
                <Collapse isOpen={isOpen}>
                    <CollapseHeader onClick={(e) => { setIsOpen(!isOpen); e.preventDefault() }}>Create Task</CollapseHeader>
                    <CollapseContent>
                        <Form onSubmit={(e) => {e.preventDefault()}}>
                            <FormGroup>
                                <Input type="text" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <TextArea placeholder="Description about the task" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <label>Should be done by</label>
                                <Row className="m-5">
                                    <Col onClick={() => { setDeadlineOption(0) }} className={`deadline-option ${deadlineOption === 0 ? 'deadline-option-selected' : ''}`}>Today</Col>
                                    <Col onClick={() => { setDeadlineOption(1) }} className={`deadline-option ${deadlineOption === 1 ? 'deadline-option-selected' : ''}`}>24 Hrs</Col>
                                    <Col onClick={() => { setDeadlineOption(2) }} className={`deadline-option ${deadlineOption === 2 ? 'deadline-option-selected' : ''}`}>Time</Col>
                                    <Col onClick={() => { setDeadlineOption(3) }} className={`deadline-option ${deadlineOption === 3 ? 'deadline-option-selected' : ''}`}>Date</Col>
                                </Row>
                                <Row className="m-5">
                                    {deadlineOption === 3 ?
                                        <Col className="mr-5"><Input type="date" value={deadlineDate} onChange={(e) => { setDeadlineDate(e.target.value) }} /></Col>
                                        :
                                        ''}
                                    {deadlineOption === 2 || deadlineOption === 3 ?
                                        <Col><Input type="time" value={deadlineTime} onChange={(e) => { setDeadlineTime(e.target.value) }} /></Col>
                                        :
                                        ''}
                                </Row>
                                <FormText>{errorMsg}</FormText>
                            </FormGroup>
                            <FormGroup className="d-flex justify-content-end">
                                <Button onClick={resetNewTask} className="m-5" color="danger">Reset</Button>
                                <Button onClick={addTask} className="m-5" color="primary">Submit</Button>
                            </FormGroup>
                        </Form>
                    </CollapseContent>
                </Collapse>
            </Col>

            {/* DISPLAY */}
            <Col size={12} lg={6} className="p-5">
            {isOpen ?
            <Alert>
                <strong style={{fontSize: '1.2em'}}>{title}</strong>
                <div>{desc}</div>
                
            </Alert>
            :
            ""
            }
            </Col>
        </>
    )
}

export default NewTask;