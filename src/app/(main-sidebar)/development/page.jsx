import DevelopmentPage from "@/components/development/DevelopmentPage";

const developments = [
	{ id: 1, year: "2025", status: "Pending", action: "View" },
	{ id: 2, year: "2024", status: "Completed", action: "View" },
	{ id: 3, year: "2023", status: "Completed", action: "View" },
	{ id: 4, year: "2022", status: "Completed", action: "View" },
	{ id: 5, year: "2021", status: "Completed", action: "View" },
	{ id: 6, year: "2020", status: "Completed", action: "View" },
	{ id: 7, year: "2019", status: "Completed", action: "View" },
	{ id: 8, year: "2018", status: "Completed", action: "View" },
	{ id: 9, year: "2017", status: "Completed", action: "View" },
	{ id: 10, year: "2016", status: "Completed", action: "View" },
];

export default function page({ params }) {
	return <DevelopmentPage developments={developments} params={params} />;
}
