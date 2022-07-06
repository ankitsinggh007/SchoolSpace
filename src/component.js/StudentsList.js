import React,{useContext} from 'react'
import Dust from "../Assets/Dust.png"
import store from '../Store';
function StudentsList({id,name,classes,result,score,grades}) {
 const color=result==="Passed" ? "#2CBF6E":"#f24643";
 const {setRemoveModal,setIsMOdalOpen,setAdd_button,setRemoveStudentId} = useContext(store);
 const removeStudent=(e)=>{
  
  setRemoveStudentId(+e.target.getAttribute("value"))

  setRemoveModal(true);
  setIsMOdalOpen(true);
  setAdd_button(false);
 }
 
  return (
    <>
    <div className='Stu_content'>
    <span className='Stu_no' value={id}>{id}</span>
      <span className='Stu_name'>{name}</span>
      <span className='Stu_Class'>{classes}</span>
      <span className='Stu_Result' style={{
        backgroundColor:`${color}`
      }}>{result}</span>
      <span className='Stu_score'>{score}</span>
      <span className='Stu_grade' style={{
        color:`${color}`
      }}>{grades}</span>
      <div className='icon'>
        <img src={Dust} alt="dust" onClick={removeStudent} value={id}></img>

      </div>
    </div>
    </>
  )
}

export default StudentsList