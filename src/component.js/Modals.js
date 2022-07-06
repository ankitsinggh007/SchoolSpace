import React,{useContext} from 'react'
import  ReactDOM  from 'react-dom'
import AddStudent from './AddStudent'
import RemoveStudent from './RemoveStudent';
import store from '../Store';
function BAckdrop(props){
const closeModal=()=>{
  props.closeModal(false);
}
    return(
        <div className='backdrop' onClick={closeModal}>{props.children}        
        </div>
    )
}
export function Modal(props){

  return(

        <div className='Card'>{props.children}</div>

    )
}

function Modals(props) {
  const {setIsMOdalOpen} = useContext(store);
  const {Add_button} = useContext(store);
    const {RemoveModal} = useContext(store);
  const{setRemoveModal}=useContext(store);
    const closeModal=()=>{
    setIsMOdalOpen(false)
    setRemoveModal(false);
    }

  return(
    <>
     {
        ReactDOM.createPortal(<BAckdrop closeModal={closeModal}/>,document.getElementById("backdrop"))

}
     {Add_button&&
        ReactDOM.createPortal(<AddStudent closeModal={closeModal}/>,document.getElementById("Modal"))

     }
      {
      RemoveModal &&
        ReactDOM.createPortal(<RemoveStudent closeModal={closeModal} />,document.getElementById("Modal"))

      }
    </>
  ) 
  
 
  
}

export default Modals;
