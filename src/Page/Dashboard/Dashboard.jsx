import "./Dashboard.css";
import teacher from './../../assets/img/teacher.svg';
import student from './../../assets/img/student.svg';
import worker from './../../assets/img/worker.svg';
import Group from './../../assets/img/Group.svg';
import Course from './../../assets/img/Course.svg';

function Dashboard({ menuCollapse }) {
  return (
    <>
      <div className="courses" style={{ ...(!menuCollapse && {width: '77%', marginLeft: '300px',  transition: "0.3s"}) }}>
        <div className="container" >
        <h2 className="List_student_heading">Dashboard</h2>
        <div className='Dashboard-top'>
                    <div className='Dashboard-top-statica'>
                    <img src={teacher} className='Dashboard-top-statica-img' alt=""  width={25.3} height={25.3}/>
                    <div className='Dashboard-top-statica-left'>
                            <h4 className='Dashboard-top-statica-left-heading'>178+</h4>
                            <p className='Dashboard-top-statica-left-padding'>O’qituvchi soni</p>
                    </div>
                    </div>

                    <div className='Dashboard-top-statica'>
                    <img src={student} className='Dashboard-top-statica-img-green' alt=""  width={25.3} height={25.3}/>
                    <div className='Dashboard-top-statica-left'>
                            <h4 className='Dashboard-top-statica-left-heading'>20+</h4>
                            <p className='Dashboard-top-statica-left-padding'>O’quvchi soni</p>
                    </div>
                    </div>

                    <div className='Dashboard-top-statica'>
                    <img src={Group} className='Dashboard-top-statica-img-pig' alt=""  width={25.3} height={25.3}/>
                    <div className='Dashboard-top-statica-left'>
                            <h4 className='Dashboard-top-statica-left-heading'>190+</h4>
                            <p className='Dashboard-top-statica-left-padding'>Ishchi soni</p>
                    </div>
                    </div>
                    <div className='Dashboard-top-statica'>
                    <img src={worker} className='Dashboard-top-statica-img-yellow' alt=""  width={25.3} height={25.3}/>
                    <div className='Dashboard-top-statica-left'>
                            <h4 className='Dashboard-top-statica-left-heading'>12+</h4>
                            <p className='Dashboard-top-statica-left-padding'>Guruh soni</p>
                    </div>
            </div>
            <div className='Dashboard-top-statica'>
                    <img src={Course} className='Dashboard-top-statica-img' alt=""  width={25.3} height={25.3}/>
                    <div className='Dashboard-top-statica-left'>
                            <h4 className='Dashboard-top-statica-left-heading'>12+</h4>
                            <p className='Dashboard-top-statica-left-padding'>Kurs soni</p>
                    </div>
            </div>
                </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
