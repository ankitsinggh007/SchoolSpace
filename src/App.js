// import AddStudent from "./component.js/AddStudent";
import Modals from "./component.js/Modals";
import SideBar from "./component.js/SideBar";
import Table from "./component.js/Table";
import {useState} from "react";
import store from './Store';
import {Routes,Route} from "react-router-dom"
function App() {
  const [IsMOdalOpen, setIsMOdalOpen] = useState(false)
  const[RemoveStudentId,setRemoveStudentId]=useState("");
  const [Add_button, setAdd_button] = useState(false)
  const [RemoveModal, setRemoveModal] = useState(false)
  const [students, setstudent] = useState([{
    id:"1",
    name:"Robert Fox",
    class:"8th",
    result:"Passed",
    score:"78/100",
    grade:"Excellent"
  
  },
  {
    id:"2",
    name:"Ralph Edwards",
    class:"7th",
    result:"Failed",
    score:"20/100",
    grade:"Poor"
  
  },{
    id:"3",
    name:"Esther Howard",
    class:"9th",
    result:"Passed",
    score:"60/100",
    grade:"Average"
  
  },
  {
    id:"4",
    name:"Eleanor Pena",
    class:"8th",
    result:"Passed",
    score:"60/100",
    grade:"Average"
  
  },
  {
    id:"5",
    name:"Arlene McCoy",
    class:"9th",
    result:"Passed",
    score:"85/100",
    grade:"Excellent"
  
  },
  {
    id:"6",
    name:"Marvin McKinney",
    class:"9th",
    result:"Failed",
    score:"25/100",
    grade:"Poor"
  
  },{
    id:"7",
    name:"Wade Warren",
    class:"9th",
    result:"Passed",
    score:"90/100",
    grade:"Excellent"
  
  }
  ])
  const addStudent=(a)=>{
    students.push(a);
    setstudent(students);
  }  
  return (
    <store.Provider value={{fname:"ankit",students:students,setIsMOdalOpen,
    setAdd_button,Add_button,setRemoveModal,RemoveModal,setRemoveStudentId,setstudent
    ,RemoveStudentId}}>
      <div className="container">
    <SideBar></SideBar>
    <Routes>
    <Route path="/students" element={<Table openForm={setIsMOdalOpen} addStudent={addStudent} data={students}/>}/>
    </Routes>
    
    {IsMOdalOpen &&  <Modals data={setIsMOdalOpen}/>}
      
    </div>

    </store.Provider>
  );
}

export default App;
