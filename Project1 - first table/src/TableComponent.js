import React, { Component } from "react";
import TableRowComponent from './TableRowComponent';

export default class TableComponent extends Component { 
    render() { 
        const courses = [
            {id : 1,    description: 'First-Year Experience',                     semester: '-',  prefix: 'FYE',  number: '-',   grade: '-'},
            {id : 2,    description: 'English Composition',                       semester: '-',  prefix: 'WRT',  number: '120', grade: '-'},
            {id : 3,    description: 'English Composition 200-level',             semester: '-',  prefix: 'WRT',  number: '-',   grade: '-'},
            {id : 4,    description: 'Mathematics (C- or better required) ***',   semester: '-',  prefix: 'MAT',  number: '151', grade: '-'},
            {id : 5,    description: 'Interdisciplinary (I)',                     semester: '-',  prefix: '-',    number: '-',   grade: '-'},
            {id : 6,    description: 'Diverse Communities (J) ***',               semester: '-',  prefix: '-',    number: '-',   grade: '-'},
        ]

        const rows = [];

        courses.forEach((course) => {
            rows.push(
                <TableRowComponent
                    course={course}
                    key={course.id}
                />
            );
        });

        return ( 
            <div>
                <div className="bg-primary text-white text-center p-2 m-4">
                    <h4>
                        Academic Foundations
                    </h4>
                </div>
                <table className="w-auto mx-auto" style={{width: "200"}} bordered hover>
                    <thead>
                        <tr className="bg-white text-black text-left p-2 m-4 border-white fs-4 fw-bold border-bottom-0 border-3"> 
                            <th colSpan={2}>Name: ______________________________ </th> 
                            <th> WCU ID: __________</th> 
                            <th colSpan={3}>Date Enrolled in Major: __/__/____</th> 
                        </tr>
                        <tr className="bg-white text-black text-left p-2 m-4 border-danger fs-5 fw-bold border border-3 text-center">
                            <th className="border-danger border border-3">Requirement</th>
                            <th className="border-danger border border-3">Description</th>
                            <th className="border-danger border border-3">Semester</th>
                            <th className="border-danger border-white border-1">Prefix</th>
                            <th className="border-danger border-white border-1">Number</th>
                            <th className="border-danger border border-3">Grade</th>
                        </tr>
                     </thead>
                    <tbody className="bg-white text-black text-left p-2 m-4 border-danger fs-6 fw-bold border border-3">
                        <tr>
                            <td rowSpan={7} className="text-center p-2 m-4 fs-5 border-danger fs-6 fw-bold border border-3">Academic Foundations</td>
                        </tr>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}