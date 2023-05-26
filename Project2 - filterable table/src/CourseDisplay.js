import React, { Component } from "react";
import { CourseTable } from "./CourseTable";

export default class CourseDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedCourse: null
        }
    }

    render() {
        if (this.state.showEditor) {
            return <CourseEditor 
                key={ this.state.selectedCourse.id || -1 }
                course={ this.state.selectedCourse } 
            />
        } else {
            console.log("-- in CourseDisplay --");
            return <div className="m-2">
                <CourseTable 
                    courses={ this.props.courses }
                    credit = { this.props.credit }
                    grades = { this.props.grades }
                />          
            </div>
        }
    }
}
