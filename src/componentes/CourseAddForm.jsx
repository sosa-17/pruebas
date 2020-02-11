import React, { Component } from "react";

const CourseFormulario = props => (
  <form onSubmit={props.agregar}>
    <input type="text" placeholder="Nombre del curso" name="name" requiered />
    <input type="text" placeholder="Profesor" name="teacher" requiered />
    <input type="hidden" name="id" value={Math.floor(Math.random() * 100)} />
    <input type="submit" value="Guardar" />
  </form>
);

export default CourseFormulario;
