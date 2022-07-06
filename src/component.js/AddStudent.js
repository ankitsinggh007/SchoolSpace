import { Modal } from './Modals'
import {useState,useContext  } from 'react'
import store from '../Store';
function AddStudent(props) {
const {setstudent,students} = useContext(store)

const [StudentName, setStudentName] = useState("");
  const [Class, setClass] = useState("");
  const [score, setscore] = useState("");
  const [result, setresult] = useState("");
  const [grade, setgrade] = useState("");
  const [Css,setCss]=useState("input");
const [color, setcolor] = useState("");

  const closeModal = () => {
    props.closeModal(false);
  }
  const resultandGrade=(score)=>{
    if(score===""){
      setcolor("");
      setresult("");
      setgrade("")
    }
    else if(score<30 && score>=0){
      setresult("Failed")
      setcolor("red");
      setgrade("Poor")
    }
    else if(score<75&&score>=30){
        setresult("Passed");
      setcolor("#2CBF6E")
        setgrade("Average");
    }
    else{
      setresult("Passed");
      setcolor("#2CBF6E")
      setgrade("Excellent")
  }
}

  const checkFormAndSubmit = () => {
    if(StudentName===""||Class===""||score===""){
      setCss("invalid");
      return
    }
    const newStudent={
      id:students.length+1,
    name:StudentName,
    class:Class+"th",
    score:`${score}/100`,
    result:result,
    grade,
  }
  console.log(newStudent);
  setstudent(prev=>[...prev,{...newStudent}]);
  props.closeModal(false);
  

  }


  
  return (

<Modal>      
      <form>
        <div className='caption_form'>Add Student</div>
        <hr className='lines' />
        <label>

          STUDENT NAME*
          <br />
          <input  className={Css}   type="text" value={StudentName} onChange={(e)=>{setStudentName(e.target.value)}}></input>
        </label>
        <label>

          CLASS*
          <br />
          <input  className={Css} type="number" value={Class} max={12} min={1} onChange={(e)=>{setClass(e.target.value)}}></input>
          Please input values between 1 & 12
        </label>
        <label>

          SCORE**
          <br />
          <input   className={Css}  type="number" value={score} min={0} max={100} onChange={(e)=>{
            setscore(e.target.value);
            resultandGrade(e.target.value);
            }}></input>
          Please input values between 0 & 100
        </label>
        <div className='Results'>Results
        <h1 className='sub_results' style={{backgroundColor:`${color}`

        }}>{result }</h1></div>
        <div className='Results' style={{color:`${color}`}}>GRADES
        <h1 className='subgrade'>{ grade}</h1>
        </div>
      </form>
      <hr className='lines' />
      <div className='actions'>
        <button className='button' onClick={closeModal}>CANCEL</button>
        <button className='button' on onClick={checkFormAndSubmit}>CONFORM</button>
      </div>
    </Modal>
  )
}

export default AddStudent