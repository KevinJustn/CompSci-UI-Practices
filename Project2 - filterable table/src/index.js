import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableCourseTable from './FilterableCourseTable';
import writingCourses from './FilterableCourseTable';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <FilterableCourseTable courses={writingCourses} />,
  document.getElementById('root')
);
