import "./List_Student.css";

import * as React from 'react';


function List_Student({ menuCollapse }) {

  return (
    <>
      <div className="courses" style={{ ...(!menuCollapse && { width: '77%', marginLeft: '300px',  transition: "0.3s"}),
    ...(menuCollapse && { width: '90%', marginLeft: '100px',  transition: "0.3s"})
    }}>
        <div className="container" >
          <h2 className="List_student_heading">List of Students</h2>
          <div className="List_student_table">
            <div className="List_student_table_sort">
                <div className="List_student_table_sort_left">
                  <select className="List_student_sort_left_select">
                    <option value="" disabled selected="selected">Group</option>
                    <option value="Group" >N14</option>
                    <option value="Group" >N16</option>
                    <option value="Group" >N18</option>
                  </select>
                  <select className="List_student_sort_left_select">
                    <option value="" disabled selected="selected">Course</option>
                    <option value="Group" >Front end</option>
                    <option value="Group" >Back end</option>
                    <option value="Group" >Grafik dizayn</option>
                  </select>
                </div>
                <div className="List_student_table_sort_right">
                    <i class='bx bx-search List_student_table_sort_right_Search_icon' ></i>
                    <input className="List_student_table_sort_right_Search" type="text" placeholder="Search"  />
                </div>




            </div>
            <section>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr className="student_theard">
          <th className="student_table_thead"><i class='bx bx-arrow-to-bottom'></i>№</th>
          <th className="student_table_thead"><i class='bx bx-arrow-to-bottom'></i>ID</th>
          <th className="student_table_thead"><i class='bx bx-arrow-to-bottom'></i>Full name</th>
          <th className="student_table_thead">Phone number</th>
          <th className="student_table_thead"><i class='bx bx-arrow-to-bottom'></i>Course</th>
          <th className="student_table_thead">Group</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr className="student_theard" >
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">AUSENCO</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">ADELAIDE</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">2</td>
          <td className="Student_list_table_tead_id">AAA32434</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">AUSENCO</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">ADELAIDE</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">AUSENCO</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">ADELAIDE</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">AUSENCO</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">ADELAIDE</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">AUSENCO</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">ADELAIDE</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">AUSENCO</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">ADELAIDE</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">AUSENCO</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">ADELAIDE</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">AUSENCO</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">ADELAIDE</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_1">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead">+998915039020</td>
          <td className="Student_list_table_tead">Front end</td>
          <td className="Student_list_table_tead">Group-14</td>
          <td className="Student_list_table_edit"><i class='bx bx-edit-alt'></i></td>
        </tr>
        <hr className="Headering" />
      </tbody>
    </table>
  </div>
</section>
          </div>
        </div>
      </div>
    </>
  );
}
export default List_Student;
