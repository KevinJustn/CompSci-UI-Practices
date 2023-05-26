import React, { Component } from "react";

export default class CourseRow extends Component {
  

  render() {
    let p = this.props.course;
    let ptook = "false"
    console.log("--- CourseRow ---"  );

    if (p.took == true) { 
      ptook = "True"
    }
    else {
      ptook = "False"
    }

    if (p.grade == '' && p.took == true) { 
      return (
        <tr>
          <td>{p.id}</td>
          <td className = "text-danger">{p.title}</td>
          <td>{p.grade}</td>
          <td className = "text-danger">{ptook}</td>
        </tr>
      );
    }

    if (p.grade != '' && p.took == false) { 
      return (
        <tr>
          <td>{p.id}</td>
          <td className = "text-danger">{p.title}</td>
          <td>{p.grade}</td>
          <td className = "text-danger">{ptook}</td>
        </tr>
      );
    }

    else { 
      return (
        <tr>
          <td>{p.id}</td>
          <td>{p.title}</td>
          <td>{p.grade}</td>
          <td>{ptook}</td>
        </tr>
      );
    }

  }
}