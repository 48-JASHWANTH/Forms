import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AuthorForm from './Components/authorsForm/AuthorFrom';
import PublicationForm from './Components/publicationForm/PublicationForm';
import NomineeForm from './Components/nomineeForm/NomineeForm';
import PatentForm from './Components/patents/PatentForm';
import ProjectForm from './Components/projectForm/ProjectForm';
import BasicInfo from './Components/basicinfoForm/BasicInfo';
import NavBar from './Components/navBar/NavBar';
import Footer from './Components/footer/Footer';
import CompleteProfile from './Components/completeProfile/CompleteProfile';
import Sidebar from './Components/sideBar/Sidebar';

function App() {
  return (
    <div>
      <NavBar />
      <CompleteProfile />
      <div className="d-flex">
        <div className="col-md-2 p-0 row">
          <Sidebar />
        </div>
        <div className="col-md-10 p-4">
          
          <BasicInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
