import React, { useEffect, useState } from "react";
import { getCourses, createCourse, updateCourse, deleteCourse } from "./services/api";
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const fetchCourses = async () => {
    const response = await getCourses();
    console.log(response.data); 
    setCourses(response.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleCreateOrUpdate = async (course) => {
    if (course._id) {
      await updateCourse(course._id, course);
    } else {
      await createCourse(course);
    }
    setSelectedCourse(null);
    fetchCourses();
  };

  const handleEdit = (course) => setSelectedCourse(course);

  const handleDelete = async (id) => {
    await deleteCourse(id);
    fetchCourses();
  };

  const handleCancel = () => setSelectedCourse(null);

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h1>Gestión de Cursos - Melany Moreira</h1>
      <CourseForm
        onSubmit={handleCreateOrUpdate}
        selectedCourse={selectedCourse}
        onCancel={handleCancel}
      />
      <CourseList courses={courses} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;