import React,{useContext} from 'react'
import store from '../Store';
import { Modal } from './Modals'
function RemoveStudent(props) {
 const {setRemoveModal,setIsMOdalOpen,setAdd_button,RemoveStudentId,setstudent,students} = useContext(store);

 const studentREmoved=students.find(i=>+i.id===RemoveStudentId);

  const cancelModal=()=>{
    setRemoveModal(false);
    setIsMOdalOpen(false);
    setAdd_button(true);
  }

const removeStudent=()=>{
  const resultant=students.filter(i=>+i.id!==RemoveStudentId)

  setstudent(resultant);
  setRemoveModal(false);
  setIsMOdalOpen(false);
  setAdd_button(true);
}



console.log("studentREmoved",studentREmoved)
  return (
<Modal>
    <div className='Remove'>
      <div className='caption'>Remove Student</div>
      <hr/>
      <p className='disclaimer'>Are you sure you want to remove the current student from the list?</p>  
        <div><p className='form'>STUDENT NAME</p>
        <p className='ans'>{studentREmoved?.name}</p></div>
        <p className='form'>CLASS</p>
        <p className='ans'>{studentREmoved?.class}</p>
        <hr/>
        <div className='button_container'>
            <button className='button' onClick={cancelModal}>CANCEL</button>
            <button className='button Remove' onClick={removeStudent}>REMOVE</button>
        </div>
    </div>
    </Modal>
    

  )
}

export default RemoveStudent