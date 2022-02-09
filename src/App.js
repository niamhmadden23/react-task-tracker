
import {useState} from 'react'
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


const App = () => {

  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState ([
    {
      id: 1, 
      text: 'Doctors Appointment',
      day: '5th Feb at 2:30pm',
      reminder: true,
    }, 
    {
      id: 2, 
      text: 'Walk the dog',
      day: 'Everyday',
      reminder: true,
    }
  ])

  // Add task 

  const addTask =(task) =>{
    const id = Math.floor(Math.random()* 10000) + 1
    console.log(id)

    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }
  // Delete task 

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id

    ))
  }

  // Toggle reminder 

  const toggleReminder = (id) =>{
      setTasks(tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder}: task)
      )}


  return (
    <div className="container">
      <Header onAdd= {()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} title = "Task Tracker"/>
      {showAddTask &&<AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : "Woohoo! You have no tasks"}
    </div>
  );
}



export default App;
