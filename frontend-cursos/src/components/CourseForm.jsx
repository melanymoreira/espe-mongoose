import React, { useState, useEffect } from "react";

const styles = {
  formContainer: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "24px",
    marginTop: "32px",
    fontFamily: "Segoe UI, Arial, sans-serif"
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
    color: "#1976d2"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px"
  },
  button: {
    margin: "0 8px 0 0",
    padding: "8px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    background: "#1976d2",
    color: "#fff",
    fontSize: "16px"
  },
  cancelBtn: {
    background: "#e53935"
  }
};

const initialState = {
  title: "",
  description: "",
  numberOfTopics: "",
  publishedAt: ""
};

const CourseForm = ({ onSubmit, selectedCourse, onCancel }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (selectedCourse) {
      setForm({
        ...selectedCourse,
        numberOfTopics: selectedCourse.numberOfTopics || "",
        publishedAt: selectedCourse.publishedAt
          ? new Date(selectedCourse.publishedAt).toISOString().split("T")[0]
          : ""
      });
    } else {
      setForm(initialState);
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      numberOfTopics: form.numberOfTopics ? Number(form.numberOfTopics) : undefined,
      publishedAt: form.publishedAt ? new Date(form.publishedAt) : undefined
    };
    onSubmit(data);
    setForm(initialState);
  };

  return (
    <form style={styles.formContainer} onSubmit={handleSubmit}>
      <h2 style={{ color: "#1976d2" }}>{selectedCourse ? "Editar Curso" : "Nuevo Curso"}</h2>
      <label style={styles.label}>Título</label>
      <input
        style={styles.input}
        type="text"
        name="title"
        placeholder="Nombre de la Asignatura"
        value={form.title}
        onChange={handleChange}
        required
      />
      <label style={styles.label}>Descripción</label>
      <input
        style={styles.input}
        type="text"
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        required
      />
      <label style={styles.label}>Número de Temas</label>
      <input
        style={styles.input}
        type="number"
        name="numberOfTopics"
        placeholder="Número de Temas"
        value={form.numberOfTopics}
        onChange={handleChange}
        min="0"
      />
      <label style={styles.label}>Fecha de Publicación</label>
      <input
        style={styles.input}
        type="date"
        name="publishedAt"
        placeholder="Fecha de Publicación"
        value={form.publishedAt}
        onChange={handleChange}
      />
      <button style={styles.button} type="submit">
        {selectedCourse ? "Actualizar" : "Crear"}
      </button>
      {selectedCourse && (
        <button
          style={{ ...styles.button, ...styles.cancelBtn }}
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
      )}
    </form>
  );
};

export default CourseForm;