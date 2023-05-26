import React, { Component } from "react";
import CourseRow from "./CourseRow";

export  class SpeakingCourseTable extends Component {
  
  render() {
    const name = this.props.name;
    const credit = this.props.credit;
    const coursesS = this.props.coursesS;
    
    const rows = [];
    coursesS.forEach((s) => {
      console.log("Received a course: " + s.id + " "+ s.prefix + " "+ s.number );

      if (s.id === 4) {
        console.log("--course 1 " + s.course);
        rows.push(
          <CourseRow
            course={s}
            key={s.id} 
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (s.id === 5 && credit < 71) {
        console.log("--course 2 " + s.course);
        rows.push(
          <CourseRow
            course={s}
            key={s.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (s.id === 6 && credit < 40) {
        console.log("--course 3 " + s.course);
        rows.push(
          <CourseRow
            course={s}
            key={s.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
        
    });
   
    return (
      <table className="border border-info table table-sm table-striped table-bordered mx-auto w-auto">
        <thead>
          <tr>
            <th colSpan="7" className="border border-dark border-2 bg-primary text-white text-center h4 p-2">
              Speaking Emphasis for {name}
            </th>
          </tr> 
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Semester</th>
            <th>Prefix</th>
            <th>Number</th>
            <th>Grade</th>
            <th>Editing</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}