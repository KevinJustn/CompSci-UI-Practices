import React, { Component } from "react";
import { CourseEditor } from "./CourseEditor";
import { WritingCourseTable } from "./WritingCourseTable";
import { SpeakingCourseTable } from "./SpeakingCourseTable";

export default class CourseDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedCourse: null
        }
    }

    startEditing = (course) => {
        this.setState({ showEditor: true, selectedCourse: course })
    }

    createCourse = () => {
        this.setState({ showEditor: true, selectedCourse: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedCourse: null })
    }

    saveCourse = (course) => {
        this.props.saveCallbackW(course);
        this.props.saveCallbackS(course);
        this.setState({ showEditor: false, selectedCourse: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <CourseEditor 
                key={ this.state.selectedCourse.id || -1 }
                course={ this.state.selectedCourse } 
                saveCallbackW={ this.saveCourse }
                saveCallbackS={ this.saveCourse }
                cancelCallback={ this.cancelEditing } />
        } else {
            console.log("-- in CourseDisplay --");
            return <div className="m-2">
                <WritingCourseTable 
                    name={this.props.name}
                    coursesW={ this.props.coursesW }
                    credit = { this.props.credit }
                    editCallback={ this.startEditing }
                    deleteCallbackW={ this.props.deleteCallback } />
                    
                <SpeakingCourseTable 
                    name={this.props.name}
                    coursesS={ this.props.coursesS }
                    credit = { this.props.credit }
                    editCallback={ this.startEditing }
                    deleteCallbackS={ this.props.deleteCallback } />                        
            </div>
        }
    }
}
