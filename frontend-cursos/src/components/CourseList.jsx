import React from "react";

const styles = {
  container: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "24px",
    marginTop: "32px",
    fontFamily: "Segoe UI, Arial, sans-serif"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px"
  },
  th: {
    background: "#1976d2",
    color: "#fff",
    padding: "10px",
    fontWeight: "bold",
    border: "none"
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #e0e0e0",
    textAlign: "center"
  },
  button: {
    margin: "0 4px",
    padding: "6px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  editBtn: {
    background: "#ffb300",
    color: "#fff"
  },
  deleteBtn: {
    background: "#e53935",
    color: "#fff"
  }
};

const CourseList = ({ courses, onEdit, onDelete }) => (
  <div style={styles.container}>
    <h2 style={{ marginBottom: "12px" }}>Lista de Cursos</h2>
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Asignatura</th>
          <th style={styles.th}>Descripción</th>
          <th style={styles.th}>Número de Temas</th>
          <th style={styles.th}>Fecha de Publicación</th>
          <th style={styles.th}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course._id}>
            <td style={styles.td}>{course.title}</td>
            <td style={styles.td}>{course.description}</td>
            <td style={styles.td}>{course.numberOfTopics}</td>
            <td style={styles.td}>
              {course.publishedAt ? new Date(course.publishedAt).toLocaleDateString() : ""}
            </td>
            <td style={styles.td}>
              <button
                style={{ ...styles.button, ...styles.editBtn }}
                onClick={() => onEdit(course)}
              >
                Editar
              </button>
              <button
                style={{ ...styles.button, ...styles.deleteBtn }}
                onClick={() => onDelete(course._id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CourseList;