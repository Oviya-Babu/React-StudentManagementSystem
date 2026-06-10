import { FiBarChart2, FiBookOpen, FiTrendingUp, FiUsers } from "react-icons/fi"

const cardConfig = [
	{
		label: "Total students",
		icon: FiUsers,
		tone: "card--teal",
	},
	{
		label: "Visible results",
		icon: FiBarChart2,
		tone: "card--gold",
	},
	{
		label: "Unique majors",
		icon: FiBookOpen,
		tone: "card--coral",
	},
	{
		label: "Average age",
		icon: FiTrendingUp,
		tone: "card--slate",
	},
]

function DashboardCards({ totalStudents, visibleStudents, uniqueMajors, averageAge }) {
	const metrics = [totalStudents, visibleStudents, uniqueMajors, averageAge]

	return (
		<section className="metrics-grid" aria-label="Student summary metrics">
			{cardConfig.map((card, index) => {
				const Icon = card.icon

				return (
					<article key={card.label} className={`metric-card ${card.tone}`}>
						<div className="metric-card__icon">
							<Icon />
						</div>
						<div>
							<p>{card.label}</p>
							<strong>{metrics[index]}</strong>
						</div>
					</article>
				)
			})}
		</section>
	)
}

export default DashboardCards
