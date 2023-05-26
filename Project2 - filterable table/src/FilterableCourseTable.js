import React, { Component } from "react";
import InfoBar from "./InfoBar";
import CourseDisplay from "./CourseDisplay";

export default class FilterableCourseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: "",
      writingCourses : [
        {id: 1, title: 'CSC141', grade: 'A', took: true},
        {id: 2, title: 'CSC240', grade: 'A', took: true},
        {id: 3, title: 'CSC142', grade: 'B', took: true},
        {id: 4, title: 'CSC241', grade: 'A', took: false},
        {id: 5, title: 'ESS101', grade: '', took: false},
        {id: 6, title: 'ENG368', grade: 'C', took: true},
        {id: 7, title: 'BIO110', grade: '', took: true}
      ]
    };
    this.handleGradeChange = this.handleGradeChange.bind(this);
  }

  handleGradeChange(inGrade) {
    this.setState({
      grade: inGrade
    })
  }

  render() {
    console.log("--- FilterableCourseTable ---");
    return (
      <div>
        <InfoBar
          stGrade={this.state.grade}
          onGradeChange={this.handleGradeChange}
        />
        <CourseDisplay  
                    grades={this.state.grade}
                    courses={ this.state.writingCourses }
        />

      </div>
    );
  }
}