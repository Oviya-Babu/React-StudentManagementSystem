import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "./services/api";
import DashboardCards from "./components/DashboardCards";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getStudents();
      setStudents(data);
    } catch (fetchError) {
      const message =
        fetchError?.response?.data?.message ||
        "Unable to load students from the API.";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveStudent = async (studentData) => {
    setSaving(true);

    try {
      if (selectedStudent) {
        await updateStudent(selectedStudent.id, studentData);
        toast.success(`${studentData.name} was updated successfully.`);
      } else {
        await createStudent(studentData);
        toast.success(`${studentData.name} was added successfully.`);
      }

      setSelectedStudent(null);
      await fetchStudents();
    } catch (saveError) {
      const message =
        saveError?.response?.data?.message ||
        "Unable to save student. Please try again.";
      toast.error(message);
    } finally {
      setSaving(false);
    }
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleDeleteStudent = async (student) => {
    const confirmed = window.confirm(
      `Delete ${student.name}? This action cannot be undone.`,
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteStudent(student.id);

      if (selectedStudent?.id === student.id) {
        setSelectedStudent(null);
      }

      toast.success(`${student.name} was deleted.`);
      await fetchStudents();
    } catch (deleteError) {
      const message =
        deleteError?.response?.data?.message ||
        "Unable to delete the selected student.";
      toast.error(message);
    }
  };

  const filteredStudents = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return students;
    }

    return students.filter((student) =>
      student.name.toLowerCase().includes(normalizedSearch),
    );
  }, [searchTerm, students]);

  const uniqueMajors = useMemo(
    () => new Set(students.map((student) => student.major)).size,
    [students],
  );

  const averageAge = useMemo(() => {
    if (!students.length) {
      return 0;
    }

    const totalAge = students.reduce(
      (sum, student) => sum + Number(student.age),
      0,
    );

    return Math.round(totalAge / students.length);
  }, [students]);

  return (
    <div className="app-shell">
      <ToastContainer position="top-right" autoClose={2500} newestOnTop />

      <header className="app-hero">
        <div>
          <p className="eyebrow">Student Management Dashboard</p>
          <h1>Manage student records from one place.</h1>
          <p className="hero-copy">
            Add, edit, search, and remove students through a clean dashboard
            powered by React, Axios, and JSON Server.
          </p>
        </div>

        <div className="hero-highlight">
          <span className="hero-highlight__label">Connected API</span>
          <strong>http://localhost:3000/students</strong>
          <p>All student data is persisted through the JSON Server backend.</p>
        </div>
      </header>

      {error ? (
        <div className="status-banner status-banner--error" role="alert">
          <span>{error}</span>
          <button type="button" onClick={fetchStudents}>
            Retry
          </button>
        </div>
      ) : null}

      <DashboardCards
        totalStudents={students.length}
        visibleStudents={filteredStudents.length}
        uniqueMajors={uniqueMajors}
        averageAge={averageAge}
      />

      <div className="dashboard-grid">
        <StudentForm
          selectedStudent={selectedStudent}
          onSubmit={handleSaveStudent}
          onCancel={() => setSelectedStudent(null)}
          isSaving={saving}
        />

        <StudentList
          students={filteredStudents}
          totalStudents={students.length}
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          onEditStudent={handleEditStudent}
          onDeleteStudent={handleDeleteStudent}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;