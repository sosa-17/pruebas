import React, { Component, propTypes } from "react";
import CoursesList from "./CoursesList";
import CourseAddForm from "./CourseAddForm";

class App extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      courses: [
        { id: 1, name: "react desde cero", teacher: "samuel sosa" },
        { id: 2, name: "react avanzado", teacher: "sosa sosa" }
      ]
    };
    this.agregarCurso = this.agregarCurso.bind(this);
  }

  agregarCurso(e) {
    e.preventDefault();

    let form = e.target;
    let course = {
      id: form.id.value,
      name: form.name.value ? form.name.value : App.defaultProps.name,
      teacher: form.teacher.value
        ? form.teacher.value
        : App.defaultProps.teacher
    };

    //

    this.setState({
      courses: this.state.courses.concat([course])
    });

    form.reset();
  }

  render() {
    return (
      <div>
        <CourseAddForm agregar={this.agregarCurso} />
        <CoursesList courses={this.state.courses} />
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {
  name: "curso desconocido",
  teacher: "Profesor no asignado"
};

export default App;
