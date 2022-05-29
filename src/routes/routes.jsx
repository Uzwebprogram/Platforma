import Registration_teacher from '../Page/List_Teacher/List_Teacher';
import Registration_user from './../Page/Registration_user/Registration_user';
import Registration_worker from './../Page/Registration_worker/Registration_worker';
import Dashboard from '../Page/Dashboard/Dashboard';
import List_Student from '../Page/List_Student/List_Student';
import List_Teacher from '../Page/List_Teacher/List_Teacher';
import List_Worker from '../Page/List_Worker/List_Worker';
import Payment from '../Page/Payment/Payment';
import Group from '../Page/Group/Group';
import Courses from '../Page/courses/Courses';
import Login from '../Page/Login/Login';
import {Routes,Route} from "react-router-dom";

function Router({menuCollapse}) {
        return(
            <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Dashboard" element={<Dashboard  menuCollapse={menuCollapse}/>}/>
            <Route path="/Registration_teacher" element={<Registration_teacher  menuCollapse={menuCollapse}/>}/>
            <Route path="/List_Student" element={<List_Student  menuCollapse={menuCollapse}/>}/>
            <Route path="/Registration_user"  element={<Registration_user menuCollapse={menuCollapse}/>}/>
            <Route path="/Registration_worker" element={<Registration_worker menuCollapse={menuCollapse}/>}/>
            <Route path="/List_Teacher" element={<List_Teacher menuCollapse={menuCollapse}/>}/>
            <Route path="/List_Worker" element={<List_Worker menuCollapse={menuCollapse}/>}/>
            <Route path="/Group" element={<Group menuCollapse={menuCollapse}/>}/>
            <Route path="/Payment" element={<Payment menuCollapse={menuCollapse}/>}/>
            <Route path="/Courses" element={<Courses menuCollapse={menuCollapse}/>}/>
        </Routes>
            </>
        )
}

export default Router