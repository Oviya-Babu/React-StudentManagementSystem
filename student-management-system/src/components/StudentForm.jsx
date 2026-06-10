import { useEffect, useState } from "react"
import { FiSave, FiUser } from "react-icons/fi"

const emptyForm = {
	name: "",
	age: "",
	major: "",
}

function StudentForm({ selectedStudent, onSubmit, onCancel, isSaving }) {
	const [formData, setFormData] = useState(emptyForm)
	const [errors, setErrors] = useState({})

	useEffect(() => {
		if (selectedStudent) {
			setFormData({
				name: selectedStudent.name,
				age: String(selectedStudent.age),
				major: selectedStudent.major,
			})
		} else {
			setFormData(emptyForm)
		}

		setErrors({})
	}, [selectedStudent])

	const handleChange = (event) => {
		const { name, value } = event.target

		setFormData((current) => ({
			...current,
			[name]: value,
		}))
	}

	const validate = () => {
		const nextErrors = {}
		const trimmedName = formData.name.trim()
		const trimmedMajor = formData.major.trim()
		const parsedAge = Number.parseInt(formData.age, 10)

		if (!trimmedName) {
			nextErrors.name = "Student name is required."
		}

		if (!formData.age) {
			nextErrors.age = "Age is required."
		} else if (Number.isNaN(parsedAge) || parsedAge < 10 || parsedAge > 120) {
			nextErrors.age = "Age must be a valid number between 10 and 120."
		}

		if (!trimmedMajor) {
			nextErrors.major = "Major is required."
		}

		setErrors(nextErrors)
		return Object.keys(nextErrors).length === 0
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (!validate()) {
			return
		}

		onSubmit({
			name: formData.name.trim(),
			age: Number.parseInt(formData.age, 10),
			major: formData.major.trim(),
		})

		if (!selectedStudent) {
			setFormData(emptyForm)
		}
	}

	return (
		<section className="panel panel--form">
			<div className="panel__header">
				<div>
					<p className="panel__eyebrow">
						{selectedStudent ? "Update student" : "Add student"}
					</p>
					<h2>{selectedStudent ? "Edit student details" : "Create a new student"}</h2>
				</div>

				{selectedStudent ? (
					<button type="button" className="ghost-button" onClick={onCancel}>
						Clear
					</button>
				) : null}
			</div>

			<form className="student-form" onSubmit={handleSubmit}>
				<label>
					<span>
						<FiUser /> Name
					</span>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Enter student name"
					/>
					{errors.name ? <small className="field-error">{errors.name}</small> : null}
				</label>

				<label>
					<span>Age</span>
					<input
						type="number"
						name="age"
						min="10"
						max="120"
						value={formData.age}
						onChange={handleChange}
						placeholder="Enter age"
					/>
					{errors.age ? <small className="field-error">{errors.age}</small> : null}
				</label>

				<label>
					<span>Major</span>
					<input
						type="text"
						name="major"
						value={formData.major}
						onChange={handleChange}
						placeholder="Enter major"
					/>
					{errors.major ? <small className="field-error">{errors.major}</small> : null}
				</label>

				<div className="form-actions">
					<button type="submit" className="primary-button" disabled={isSaving}>
						<FiSave />
						{isSaving
							? "Saving..."
							: selectedStudent
								? "Update student"
								: "Add student"}
					</button>

					{selectedStudent ? (
						<button type="button" className="secondary-button" onClick={onCancel}>
							Cancel
						</button>
					) : null}
				</div>
			</form>
		</section>
	)
}

export default StudentForm
