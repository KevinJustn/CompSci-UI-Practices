import React, { Component } from "react";

export default class TableRowComponent extends Component { 
    render() { 
        const course = this.props.course;

        return ( 
            <tr className="border-danger border border-3"> 
                <td className="text-left p-2 m-4 border-danger border border-3">      {course.description}</td>
                <td className="text-left p-2 m-4 border-danger border border-3">      {course.semester}   </td>
                <td className="text-left p-2 m-4 border-danger border-white border-1">{course.prefix}     </td>
                <td className="text-left p-2 m-4 border-danger border-white border-1">{course.number}     </td>
                <td className="text-left p-2 m-4 border-danger border border-3">      {course.grade}      </td>
            </tr>
        );
    }
}