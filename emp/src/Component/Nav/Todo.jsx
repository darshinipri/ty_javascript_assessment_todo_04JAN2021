import React from react;
import {Button,Row,Container,Col,Form,NavBar,Table, FormGroup} from 'react-bootstrap';
function Todo(){
    const[tasks,setTasks] = React.useState([]);
    const[newtask,setnewTask] = React.useState('');
    const[updatetask,setupdateTask] = React.useState('');

    React.useEffect(() => {
        const readTasks = () =>{
            if(localStorage.getItem('tasks')){
                setTasks(JSON.parse(localStorage.getItem('tasks')))
            }

        }
        readTasks()

    },[]);
    const onCreate =() =>{
        tasks.push(newtask)
        localStorage.setItem('tasks',JSON.stringify(tasks));
        setnewTask('');
    };

    function onDelete(task){
        let index = tasks.indexOf(task)
        tasks.splice(index,1);
        localStorage.setItem('tasks',JSON.stringify(tasks))
        setnewTask('');
        setTasks(JSON.parse(localStorage.getItem('task')));
    }

    const onUpdate = (task) => {
        let index = tasks.indexOf(task);
        let tasks2 = JSON.parse(localStorage.getItem('task'));

        tasks2[index] = updateTask
        localStorage.setItem('tasks',JSON.stringify(tasks2))
        setTasks(JSON.parse(localStorage.getItem('tasks')))
    }

    return(
        <div>
            <NavBar bg="dark" varaiant="dark">
                <NavBar.Brand href="#Home">
                    TO-DO List
                </NavBar.Brand>
            </NavBar>
            <br/>
            <Container>
                <Row>
                    <Col>
                    <h2>Add New Task</h2>
                    <Form>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Control autoComplete="off" type="text" value={newtask} onChange={e => setnewTask(e.target.value)}/>
                    </Form.Group>
                        <button varaiant="primary" onClick={onCreate}>Create Task</button>  
                    </Form>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                    <Table striped boadered hover variant ="dark">
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Update Task</th>
                                <th>Delete Task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task =>(
                                <tr key={task}>
                                    <td>{task}</td>
                                    <td><Button variant="danger" onClick={()=> onDelete(task)}>Delete</Button></td>
                                <td>
                                    <input type="text" className="" onChange={e=>setupdateTask(e.target.value)} placeholder={task}></input>
                                    <Button className="text-white ml-4" variant="warning" onClick={()=>onUpdate(task)}>Update</Button>
                                </td>

                                </tr>

                            ))}
                        </tbody>
                    </Table>
                    </Col>
                </Row>
                </Container>
        </div>
    )

}

export default Todo;