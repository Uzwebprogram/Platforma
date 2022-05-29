import "./Group.css";
import Header from "../../Components/Header/Header";
function Group({ menuCollapse }) {
  return (
    <>
    <Header menuCollapse/>
      <div
        className="courses"
        style={{
          ...(!menuCollapse && {
            width: "77%",
            marginLeft: "300px",
            transition: "0.3s",
          }),
          ...(menuCollapse && {
            width: "90%",
            marginLeft: "100px",
            transition: "0.3s",
          }),
        }}
      >
        <div className="container">
          <h2 className="List_student_heading">Group</h2>
          <div className="List_student_table">
            <div className="List_student_table_sort">
              <div className="List_student_table_sort_right">
                <i class="bx bx-search List_student_table_sort_right_Search_icon"></i>
                <input
                  className="List_student_table_sort_right_Search"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="List_student_table_sort_left">
                <button className="List_student_table_sort_left_btn">
                  Add
                </button>
              </div>
            </div>
            <section className="section_scroll">
              <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                  <thead>
                    <tr className="student_theard">
                      <th className="student_table_thead_payment">
                        <i class="bx bx-arrow-to-bottom"></i>№
                      </th>
                      <th className="student_table_thead_payment">
                        <i class="bx bx-arrow-to-bottom"></i>Group number
                      </th>
                      <th className="student_table_thead_payment">
                        <i class="bx bx-arrow-to-bottom"></i>Course
                      </th>
                      <th className="student_table_thead_payment">
                        Teacher of group
                      </th>
                      <th className="student_table_thead_payment">
                        <i class="bx bx-arrow-to-bottom"></i>Time duration
                      </th>
                      <th className="student_table_thead_payment">
                        Time of class
                      </th>
                      <th className="student_table_thead_payment">
                        Room of class
                      </th>
                      <th className="student_table_thead_payment">
                        Number of students
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead_name">
                        Android Development{" "}
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">2</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development{" "}
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">5</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development{" "}
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">5</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development{" "}
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">5</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development{" "}
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">5</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development{" "}
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">5</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development{" "}
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">5</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development{" "}
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">1</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
                    </tr>
                    <hr className="Headering" />
                    <tr className="student_theard">
                      <td className="Student_list_table_tead_paymentser">5</td>
                      <td className="Student_list_table_tead_G">G-10</td>
                      <td className="Student_list_table_tead">
                        Android Development
                      </td>
                      <td className="Student_list_table_tead">
                        {" "}
                        Doniyor Soyipov
                      </td>
                      <td className="Student_list_table_tead">
                        14.09.2021 14.12.2021
                      </td>
                      <td className="Student_list_table_tead">14:00 16:00</td>
                      <td className="Student_list_table_tead_5">5</td>
                      <td className="Student_list_table_tead">10</td>
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
export default Group;
