import StudentsList from './StudentsList'
import {useContext} from "react"
import store from '../Store'
function Table(props) {  
  const {students}=useContext(store);
  const {setAdd_button} = useContext(store)
  const {setIsMOdalOpen}=useContext(store);
  const openForms=()=>{
    setIsMOdalOpen(true)
    setAdd_button(true);
  }
  return (
    <div className='table'>
        <div className='nav'>
            <span className='Students' >Students</span>
            <button className='button' onClick={openForms}>+ ADD</button>
        </div>
        <div className='subTable'>
        <div className='highlight'>
              <span className='Stu_no' style={{
              }}>No.</span>
              <span className='Stu_name'>Student Name</span>
              <span className='Stu_Class'>Class</span>
              <span className='Stu_Result'>Result</span>
              <span className='Stu_score'>Score</span>
              <span className='Stu_grade'>Grade</span>
            </div>
{
  students.map((student,i)=>{
    return(
      <StudentsList id={i+1}
       name={student.name}
        classes={student.class}
         result={student.result}
          grades={student.grade}
          key={student.id}
           score={student.score}/>
    )

  })
}

        </div>
<span className='showing'>Showing {students.length} of {students.length} entries</span>

    </div>
  )
}


export default Table