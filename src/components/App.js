import "../styles/App.scss";
import { useState } from "react";
import studentsData from "../data/studentsData.json";

function App() {
  // States
  const [students, setStudents] = useState(studentsData);
  const [newStudent, setNewStudent] = useState({
    name: "",
    counselor: "",
    speciality: "",
  });

  // Functions
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  // Recoger los datos de los inputs
  const handleChangeInputs = (ev) => {
    const inputChanged = ev.currentTarget.id;
    setNewStudent({
      ...newStudent,
      [inputChanged]: ev.currentTarget.value,
    });
  };

  // Vaciar los inputs
  const getEmptyStudent = () => {
    return {
      name: "",
      counselor: "",
      speciality: "",
    };
  };

  // Añadir una adalaber con el botón
  const handleAddAdalaber = (ev) => {
    ev.preventDefault();
    const newAdalaber = {
      name: newStudent.name,
      counselor: newStudent.counselor,
      speciality: newStudent.speciality,
    };
    setStudents([...students, newAdalaber]);
    setNewStudent(getEmptyStudent());
  };

  // Pintar adalabers
  const renderStudents = students.map((student) => {
    return (
      <tr key={student.results.id}>
        <td>{student.results.name}</td>
        <td>{student.results.counselor}</td>
        <td>{student.results.speciality}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Adalabers- promo patatita</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutores</th>
            <th>Especialidad</th>
          </tr>
        </thead>

        <tbody>{renderStudents}</tbody>
      </table>

      <h2>Añadir una Adalaber</h2>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={newStudent}
          onChange={handleChangeInputs}
        ></input>
        <input
          type="text"
          value={newStudent}
          onChange={handleChangeInputs}
        ></input>
        <input
          type="text"
          value={newStudent}
          onChange={handleChangeInputs}
        ></input>
        <input
          type="submit"
          value={newStudent}
          onClick={handleAddAdalaber}
        ></input>
      </form>
    </div>
  );
}

export default App;
