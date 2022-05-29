import "./Courses.css";
import {useRef} from "react"
import logo_image from "./../../assets/img/logo_image.svg"
function Courses({ menuCollapse }) {
  const overlay = useRef()
  const modal_course = useRef()
  return (
    <>
              <div className="courses" style={{ ...(!menuCollapse && { width: '77%', marginLeft: '300px',  transition: "0.3s"}),
    ...(menuCollapse && { width: '90%', marginLeft: '100px',  transition: "0.3s"})
    }}>
        <div className="container" >
          <div className="modal-course" ref={modal_course}>
              <div className="modal-course-top"> 
                <p className="modal-course-top-padding">Course add</p>
                <p className="modal-course-top-close" onClick={()=>{
                            overlay.current.style.display ="none"
                            modal_course.current.style.bottom = "900px"
      }}>&times;</p> 
              </div>
                <form className="modal-course-form" action="">
                <p className="modal-course-form-paddings">Course name</p>
                  <input type="text" placeholder="course name" className="modal-course-form-input" />
                  <p className="modal-course-form-paddings">Course type</p>
                  <input type="text" placeholder="course type" className="modal-course-form-input" />
                  <p className="modal-course-form-padding">Siz bu yerga kursning nomni va qanaqa bosqichlgni kirtasiz</p>
                  <button className="modal-course-form-btn">Save</button>
                </form>
              <div>

              </div>
          </div>  
          <h2 className="List_student_heading">Course</h2>
          <div className="List_student_table">
            <div className="List_student_table_sort">
            <div className="List_student_table_sort_right">
                    <i class='bx bx-search List_student_table_sort_right_Search_icon' ></i>
                    <input className="List_student_table_sort_right_Search" type="text" placeholder="Search"  />
                </div>
                <div className="List_student_table_sort_left">
                  <button className="List_student_table_sort_left_btn" onClick={()=>{
                    overlay.current.style.display ="block"
                    modal_course.current.style.bottom = "170px"
                  }}>Add</button>
                </div>




            </div>
              <div className="course-card">
              <ul className="item-card"> 
                    <li className="item-card-list"> 
                        <div className="item-card-list-about">
                        <h3 className="item-card-list-heading">Web dasturlash</h3>
                        <h4 className="item-card-list-heading4">Botcamp</h4>
                        </div>
                        <p className="item-card-list-padding">Botcamp kursi 7 oy davom etadi haftada 5 kun 5 soatdan 2 soat ustoz 3 soat asistent o'tadi</p>
                        <div className="item-card-list-bottom">
                            <h3 className="item-card-list-pirce">1 mln so'm</h3>
                            <div className="item-card-list-bottom-image-border">
                              <img class="item-card-list-bottom-image" width="75" height="70" src={logo_image} alt="" />
                            </div>
                            </div>
                    </li> 
                    <li className="item-card-list"> 
                        <div className="item-card-list-about">
                        <h3 className="item-card-list-heading">Front End</h3>
                        <h4 className="item-card-list-heading4">Botcamp</h4>
                        </div>
                        <p className="item-card-list-padding">Botcamp kursi 6 oy davom etadi haftada 5 kun 5 soatdan 2 soat ustoz 3 soat asistent o'tadi</p>
                        <div className="item-card-list-bottom">
                            <h3 className="item-card-list-pirce">3 mln so'm</h3>
                            <div className="item-card-list-bottom-image-border">
                              <img class="item-card-list-bottom-image" width="75" height="70" src={logo_image} alt="" />
                            </div>
                            </div>
                    </li>
                    <li className="item-card-list"> 
                        <div className="item-card-list-about">
                        <h3 className="item-card-list-heading">Back End</h3>
                        <h4 className="item-card-list-heading4">Botcamp</h4>
                        </div>
                        <p className="item-card-list-padding">Botcamp kursi 6 oy davom etadi haftada 5 kun 5 soatdan 2 soat ustoz 3 soat asistent o'tadi</p>
                        <div className="item-card-list-bottom">
                            <h3 className="item-card-list-pirce">2.3 mln so'm</h3>
                            <div className="item-card-list-bottom-image-border">
                              <img class="item-card-list-bottom-image" width="75" height="70" src={logo_image} alt="" />
                            </div>
                            </div>
                    </li>
                    <li className="item-card-list"> 
                        <div className="item-card-list-about">
                        <h3 className="item-card-list-heading">UI/XI</h3>
                        <h4 className="item-card-list-heading4">Standart</h4>
                        </div>
                        <p className="item-card-list-padding">Botcamp kursi 6 oy davom etadi haftada 5 kun 5 soatdan 2 soat ustoz 3 soat asistent o'tadi</p>
                        <div className="item-card-list-bottom">
                            <h3 className="item-card-list-pirce">600 ming so'm</h3>
                            <div className="item-card-list-bottom-image-border">
                              <img class="item-card-list-bottom-image" width="75" height="70" src={logo_image} alt="" />
                            </div>
                            </div>
                    </li>
                    <li className="item-card-list"> 
                        <div className="item-card-list-about">
                        <h3 className="item-card-list-heading">Moushen grafika</h3>
                        <h4 className="item-card-list-heading4">Standart</h4>
                        </div>
                        <p className="item-card-list-padding">Botcamp kursi 8 oy davom etadi haftada 5 kun 5 soatdan 2 soat ustoz 3 soat asistent o'tadi</p>
                        <div className="item-card-list-bottom">
                            <h3 className="item-card-list-pirce">1.5 mln so'm</h3>
                            <div className="item-card-list-bottom-image-border">
                              <img class="item-card-list-bottom-image" width="75" height="70" src={logo_image} alt="" />
                            </div>
                            </div>
                    </li>
                    <li className="item-card-list"> 
                        <div className="item-card-list-about">
                        <h3 className="item-card-list-heading">Smm pro</h3>
                        <h4 className="item-card-list-heading4">Botcamp</h4>
                        </div>
                        <p className="item-card-list-padding">Botcamp kursi 3 oy davom etadi haftada 5 kun 5 soatdan 2 soat ustoz 3 soat asistent o'tadi</p>
                        <div className="item-card-list-bottom">
                            <h3 className="item-card-list-pirce">1.2 mln so'm</h3>
                            <div className="item-card-list-bottom-image-border">
                              <img class="item-card-list-bottom-image" width="75" height="70" src={logo_image} alt="" />
                            </div>
                            </div>
                    </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <div className="overlay" ref={overlay} onClick={()=>{
                            overlay.current.style.display ="none"
                            modal_course.current.style.bottom = "900px"
      }}>

      </div>
    </>
  );
}
export default Courses;
