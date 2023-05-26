import React, { Component } from "react";
import CourseRow from "./CourseRow";

export  class CourseTable extends Component {
  
  render() {
    
    const courses = this.props.courses;
    const grades = this.props.grades
    

    const rows = [];
    console.log("--- CourseTable ---");
    courses.forEach((c) => {
        if (c.grade == grades && grades != '') {
          console.log("--course " +  " " + c.course);
          rows.push(
            <CourseRow
              course={c}
              key={c.id} 
            />
          );
        }

        if (grades == "all") { 
              console.log("--course " + c.course);
              rows.push(
                <CourseRow
                  course={c}
                  key={c.id} 
                />
              );
        }
    });
   
    return (
      <table className="square border border-info table table-sm table-striped table-bordered mx-auto w-auto">
        <thead>
          <tr className="border-bottom border-dark border-4 bg-info text-black text-left h5">
            <th className ="pe-5">ID</th>
            <th className ="pe-5">Title</th>
            <th className ="pe-5">Grade</th>
            <th className ="pe-5">Took?</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}