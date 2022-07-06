import {NavLink} from "react-router-dom"
import logo from "../Assets/Vector.png"
import Dashboard from "../Assets/Dashboard.png"
import Course from "../Assets/Course.png"
import Coursesub from "../Assets/Coursesub.png"
import Students from "../Assets/Students.png"
import Exams from "../Assets/Exams.png"
import Results from "../Assets/Results.png"
import Resultssub from "../Assets/Resultssub.png"
import NoticeBoard from "../Assets/NoticeBoard.png"
import NoticeBoardsub from "../Assets/NoticeBoardsub.png"
import Live from "../Assets/Live.png"
import Notification from "../Assets/Notification.png"
function SideBar() {
  return (
    <div className='sideBar'>
        <div>
            <div className='logo'>
                <img src={logo} alt="Logo"/>
            </div>
            <div className='logoname '>School Space
            </div>
        </div>
        <hr className='line'></hr>
        <ul>
<li className='items'>
    <div><img src={Dashboard} className="icon" alt='icon'></img></div>
    <div className='menucap'>Dashboard</div>
</li>
<li className='items'>
<div><img src={Course} className="icon" alt='icon'></img></div>
<div><img src={Coursesub} className="subicon" alt='icon'></img></div>

    <div className='menucap'>Course</div>
</li>
<li className='items'>
<div><img src={Students} className="icon" alt='icon'></img></div>
<div><img src={Students} className="icon" alt='icon'></img></div>
<div><img src={Students} className="icon" alt='icon'></img></div>

    <div className='menucap'>
       <NavLink className="link nav-link nav-link-ltr" to="/students">Students</NavLink>
        </div>
</li>
<li className='items'>
<div><img src={Exams} className="icon" alt='icon'></img></div>

    <div className='menucap'>Exams</div>
</li>
<li className='items'>
<div><img src={Results} className="icon" alt='icon'></img></div>
<div><img src={Resultssub} className="subicon-re" alt='icon'></img></div>

    <div className='menucap'>Results</div>
</li>
<li className='items'>
<div><img src={NoticeBoard} className="icon" alt='icon'></img></div>
<div><img src={NoticeBoardsub} className="subicon-no" alt='icon'></img></div>

    <div className='menucap'>Notice Board</div>
</li>
<li className='items'>
<div><img src={Live} className="icon" alt='icon'></img></div>

    <div className='menucap'>Live Classes</div>
</li>
<li className='items'>
<div><img src={Notification} className="icon" alt='icon'></img></div>

    <div className='menucap'>Notification</div>
</li>
        </ul>
    <div className='info'>
        <div className='rounded-image'></div>
        <div className='name'>Ankit singh</div>
        <div className='email'>as3824115@gmail.com</div>
        <div className='profile '>VIEW PROFILE</div>
    </div>

    </div>
  )
}

export default SideBar