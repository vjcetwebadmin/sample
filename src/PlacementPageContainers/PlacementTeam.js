import React, { Component } from "react";
import FacultyData from "../Components/FacultyData";
class Faculty extends Component {
  state = {};
  
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/PTC/C Mavin.JPG",
    width: "50%",
    name: "Mr.C.Mavin",
    content: "Assistant Professor & Placement Officer"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/PTC/SIBY BABY.jpg",
    width: "50%",
    name: "Mr. Siby Baby",
    content: "Assistant Placement Officer"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/PTC/IMG_7641.jpg",
    width: "50%",
    name: "Mr. Sanoj Saju",
    content: "Assistant Placement Officer"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/SH/FAC/342.jpg",
    width: "50%",
    name: "Mrs. Anitha Rajan",
    content: "IQAC Placement Co-ordinator"
  };
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          
          <div>
            <FacultyData data={this.Cefaculty2} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty4} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty5} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty6} />
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty;
