import React, { Component } from "react";

export default class InfoBar extends Component {
  
  constructor(props) {
    super(props);
    this.props = {   
        stGrade: ""
    }
    this.handleGradeChange = this.handleGradeChange.bind(this);
  }

  handleGradeChange(e) {
    this.props.onGradeChange(e.target.value);
  }


  render() {
    const grade = this.props.grade
    console.log("--- InfoBar ---");

    
    return (
      <div className="bg-primary text-white text-center h4 p-2 m-3">
            <form-label>Enter a letter grade:    </form-label>
        <input
          type="text"
          placeholder="Enter A-D or all"
          value={grade}
          onChange={this.handleGradeChange}
          />
      </div>
    );
  }
}
