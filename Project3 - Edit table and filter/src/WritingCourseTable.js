import React, { Component } from "react";
import CourseRow from "./CourseRow";

export  class WritingCourseTable extends Component {
  
  render() {
    const name = this.props.name;
    const credit = this.props.credit;
    const coursesW = this.props.coursesW;
    
    const rows = [];
    coursesW.forEach((w) => {
      console.log("Received a course: " + w.id + " "+ w.prefix + " "+ w.number);

      if (w.id === 1) {
        console.log("--course 1 " + w.course);
        rows.push(
          <CourseRow
            course={w}
            key={w.id} 
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (w.id === 2 && credit < 71) {
        console.log("--course 2 " + w.course);
        rows.push(
          <CourseRow
            course={w}
            key={w.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (w.id === 3 && credit < 40) {
        console.log("--course 3 " + w.course);
        rows.push(
          <CourseRow
            course={w}
            key={w.id}
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
              Writing Emphasis for {name}
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