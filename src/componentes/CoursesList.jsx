import React, { Component } from "react";
import Course from "./Course";

const CoursesList = props => (
  <ul>
    {props.courses.map(course => (
      <Course id={course.id} name={course.name} teacher={course.teacher} />
    ))}
  </ul>
);

export default CoursesList;
