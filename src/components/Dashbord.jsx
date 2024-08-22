import './Dashbord.css';
import React from 'react';
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import user from "../assets/user.png";

const App = () => {
  const handleLoginClick = (id, date, startHour, endHour, isSuccess) => {
    console.log("last_login clicked!");
    console.log("ID:", id);
    console.log("Date:", date);
    console.log("Start Hour:", startHour);
    console.log("End Hour:", endHour);
    console.log("Is Success:", isSuccess);
  };

  return (
    <div>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="sidebar pe-4 pb-3">
          <nav className="navbar bg-light navbar-light">
            <a href="#" className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary">CAMPS</h3>
            </a>
            <div className="navbar-nav w-100">
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-tachometer-alt me-2" />Student
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="details.html" className="dropdown-item">Profile</a>
                  <a href="attendence.html" className="dropdown-item">Day-Hostel Attendance</a>
                  <a href="leave.html" className="dropdown-item">Leave Apply</a>
                  <a href="scholarship.html" className="dropdown-item">Scholarship</a>
                  <a href="skill.html" className="dropdown-item">Skill Development</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-money-bill-alt me-2" />Fees
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="#" className="dropdown-item">Download Demand/Receipt</a>
                  <a href="#" className="dropdown-item">Fees Payment Status</a>
                  <a href="#" className="dropdown-item">No Due Bank details Form</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-laptop me-2" />Transport
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="#" className="dropdown-item">Bus Request Confirmation</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-th me-2" />Curriculam
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="#" className="dropdown-item">Curriculam Report</a>
                  <a href="#" className="dropdown-item">Syllabus Report</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-keyboard me-2" />Academics
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="#" className="dropdown-item">Course Registration</a>
                  <a href="#" className="dropdown-item">Lesson Plan</a>
                  <a href="#" className="dropdown-item">Question Bank</a>
                  <a href="#" className="dropdown-item">Reports</a>
                  <a href="#" className="dropdown-item">Survey/Feedbacks</a>
                  <a href="#" className="dropdown-item">Test/Assignments/Tutorials</a>
                  <a href="#" className="dropdown-item">Submit Video</a>
                  <a href="#" className="dropdown-item">Indirect CO/Po</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-table me-2" />Exams
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="#" className="dropdown-item">Hall Ticket</a>
                  <a href="#" className="dropdown-item">Result</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-chart-bar me-2" />Activity
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="#" className="dropdown-item">Activity Submission</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-chart-bar me-2" />Documentation
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="#" className="dropdown-item">Submit/View Documents</a>
                  <a href="#" className="dropdown-item">Cdocs</a>
                  <a href="#" className="dropdown-item">Events</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-chart-bar me-2" />Library
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="#" className="dropdown-item">Search</a>
                  <a href="#" className="dropdown-item">Transaction</a>
                </div>
              </div>
              <div>
                <a href="#" className="nav-link dropdown-toggle">
                  <i className="fa fa-chart-bar me-2" />Event Details
                </a>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-chart-bar me-2" />Skills
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="#" className="dropdown-item">Source Book</a>
                </div>
              </div>
              <div>
                <a href="#" className="nav-link dropdown-toggle">
                  <i className="fa fa-chart-bar me-2" />Daily News
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="content">
        <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
          <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0"><i className="fa fa-hashtag" /></h2>
          </a>
          <a href="#" className="sidebar-toggler flex-shrink-0">
            <i className="fa fa-bars" />
          </a>
          <form className="d-none d-md-flex ms-4">
            <input className="form-control border-0" type="search" placeholder="Search" />
          </form>
          <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <img className="rounded-circle me-lg-2" src={user} alt="" style={{width: 40, height: 40}} />
                <span className="d-none d-lg-inline-flex">KAMALESH AND KAVITHARUN</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                <a href="profile.html" className="dropdown-item">My Profile</a>
                <a href="#" className="dropdown-item">Settings</a>
                <a href="login.html" className="dropdown-item">Log Out</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="table-container">
          <h1 className="title">BIT-CAMPS</h1>
          <div className="table-wrapper">
            <table className="login-table">
              <tbody>
                <tr>
                  <td colSpan={7} className="header">LOGIN ATTEMPTS</td>
                </tr>
                <tr>
                  <th>Date</th>
                  <th colSpan={2}>Before Working Hours (12 AM-08 AM)</th>
                  <th colSpan={2}>During Working Hours (08 AM-05 PM)</th>
                  <th colSpan={2}>After Working Hours (05 PM-12 AM)</th>
                </tr>
                <tr>
                  <th />
                  <th className="success">Success</th>
                  <th className="failure">Failure</th>
                  <th className="success">Success</th>
                  <th className="failure">Failure</th>
                  <th className="success">Success</th>
                  <th className="failure">Failure</th>
                </tr>
                <tr>
                  <td className="date">31-05-2023</td>
                  <td className="success-cell">
                    <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '00', '07', 1)}>0</a>
                  </td>
                  <td className="failure-cell">
                    <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '00', '07', 0)}>0</a>
                  </td>
                  <td className="success-cell">
                    <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '08', '17', 1)}>1</a>
                  </td>
                  <td className="failure-cell">
                    <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '08', '17', 0)}>0</a>
                  </td>
                  <td className="success-cell">
                    <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '18', '23', 1)}>0</a>
                  </td>
                  <td className="failure-cell">
                    <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '18', '23', 0)}>0</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
