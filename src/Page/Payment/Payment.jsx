import "./Payment.css";
function Payment({ menuCollapse }) {
  return (
    <>
        <div className="courses" style={{ ...(!menuCollapse && { width: '77%', marginLeft: '300px',  transition: "0.3s"}),
    ...(menuCollapse && { width: '90%', marginLeft: '100px',  transition: "0.3s"})
    }}>
        <div className="container" >
          <h2 className="List_student_heading">Payment</h2>
          <div className="List_student_table">
            <div className="List_student_table_sort">
            <div className="List_student_table_sort_right">
                    <i class='bx bx-search List_student_table_sort_right_Search_icon' ></i>
                    <input className="List_student_table_sort_right_Search" type="text" placeholder="Search"  />
                </div>
                <div className="List_student_table_sort_left">
                  <button className="List_student_table_sort_left_btn">Add</button>
                </div>




            </div>
            <section>
            <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr className="student_theard">
          <th className="student_table_thead_payment"><i class='bx bx-arrow-to-bottom'></i>№</th>
          <th className="student_table_thead_payment"><i class='bx bx-arrow-to-bottom'></i>ID</th>
          <th className="student_table_thead_payment"><i class='bx bx-arrow-to-bottom'></i>Full name</th>
          <th className="student_table_thead_payment">Agreement Number</th>
          <th className="student_table_thead_payment"><i class='bx bx-arrow-to-bottom'></i>Agreement Amount</th>
          <th className="student_table_thead_payment">Paid Amount</th>
          <th className="student_table_thead_payment">Unpaid Amount</th>
          <th className="student_table_thead_payment">Group</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr className="student_theard" >
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead_name">Asadbek  Bektayev Abduhamid o’g’li </td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
          <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
          <td className="Student_list_table_tead">G-20 G-10</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">G-20 G-10</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">G-20 G-10</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">2</td>
          <td className="Student_list_table_tead_id">AAA32434</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">G-20 G-10</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">G-20 G-10</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">G-20 G-10</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">G-20 G-10</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAC36886</td>
          <td className="Student_list_table_tead">AUSTRALIAN COMPANY </td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAD36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">1</td>
          <td className="Student_list_table_tead_id">AAX36886</td>
          <td className="Student_list_table_tead">Asadbek  Bektayev Abduhamid o’g’li</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
        </tr>
        <hr className="Headering" />
        <tr className="student_theard">
          <td className="Student_list_table_tead_paymentser">5</td>
          <td className="Student_list_table_tead_id">AAB58075</td>
          <td className="Student_list_table_tead">ADITYA BIRLA</td>
          <td className="Student_list_table_tead"> 10/2214/555.10.41 10/2214/555.10.42</td>
          <td className="Student_list_table_tead">3 000 000 sum 5 000 000 sum</td>
          <td className="Student_list_table_tead_green">1 000 000 sum  2 500 000 sum</td>
                    <td className="Student_list_table_tead_yellow">1 000 000 sum 2 500 000 sum</td>
                              <td className="Student_list_table_tead">1 000 000 sum 
2 500 000 sum</td>
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
export default Payment;
