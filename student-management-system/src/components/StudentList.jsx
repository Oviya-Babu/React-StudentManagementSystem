import { FiEdit2, FiSearch, FiTrash2, FiUsers } from "react-icons/fi"

function StudentList({
	students,
	totalStudents,
	searchTerm,
	onSearchTermChange,
	onEditStudent,
	onDeleteStudent,
	loading,
}) {
	const hasSearchResults = students.length > 0
	const hasStudents = totalStudents > 0

	return (
		<section className="panel panel--list">
			<div className="panel__header">
				<div>
					<p className="panel__eyebrow">Student table</p>
					<h2>All students</h2>
				</div>

				<div className="table-count">
					<FiUsers />
					<span>{totalStudents} total</span>
				</div>
			</div>

			<label className="search-bar">
				<FiSearch />
				<input
					type="search"
					value={searchTerm}
					onChange={(event) => onSearchTermChange(event.target.value)}
					placeholder="Search students by name"
				/>
			</label>

			{loading ? (
				<div className="state-panel">
					<div className="spinner" aria-hidden="true" />
					<p>Loading students...</p>
				</div>
			) : !hasStudents ? (
				<div className="state-panel state-panel--empty">
					<strong>No students yet</strong>
					<p>Add a student using the form to get started.</p>
				</div>
			) : !hasSearchResults ? (
				<div className="state-panel state-panel--empty">
					<strong>No matching students</strong>
					<p>Try a different search term.</p>
				</div>
			) : (
				<div className="table-wrap">
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Age</th>
								<th>Major</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{students.map((student) => (
								<tr key={student.id}>
									<td>
										<strong>{student.name}</strong>
									</td>
									<td>{student.age}</td>
									<td>{student.major}</td>
									<td>
										<div className="row-actions">
											<button
												type="button"
												className="action-button action-button--edit"
												onClick={() => onEditStudent(student)}
											>
												<FiEdit2 />
												Edit
											</button>

											<button
												type="button"
												className="action-button action-button--delete"
												onClick={() => onDeleteStudent(student)}
											>
												<FiTrash2 />
												Delete
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</section>
	)
}

export default StudentList
