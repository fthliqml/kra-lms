"use client";

import React from "react";
import { useSidebar } from "@/context/SidebarContext";
import { Button } from "@/components/ui/button";
import { Eye, Plus, Save } from "lucide-react";
import SearchInput from "@/components/SearchInput";
import SelectInput from "@/components/SelectInput";
import { DataTable } from "@/components/DataTable";
import { ActionButton } from "../ActionButton";
import { MyPagination } from "@/components/MyPagination";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function DevelopmentPage({ developments, params }) {
	const { isOpen } = useSidebar();

	const { developmentId } = React.use(params);

	const columns = [
		{
			key: "id",
			header: "No.",
			className: "text-center font-semibold w-[100px]",
			cellClassName: "text-center font-semibold",
		},
		{
			key: "year",
			header: "Year",
			className: "text-center py-4",
			cellClassName: "text-center py-4",
		},
		{
			key: "status",
			header: "Status",
			className: "text-center",
			cellClassName: "text-center",
		},
		{
			key: "action",
			header: "Action",
			cellClassName: "flex items-center justify-center",
			className: "text-center",
			render: (_, row) => (
				<ActionButton
					as="link"
					href={"#"}
					icon={<Eye className="size-5 stroke-white" />}
					tooltip="Detail"
					color="bg-info"
					arrowFill="fill-info"
				/>
			),
		},
	];

	return (
		<div
			className={cn(
				"flex-1 pb-5 w-full transition-all duration-500 ease-in-out",
				isOpen ? "md:pl-72" : "md:pl-32"
			)}
		>
			<div className="w-full flex justify-between items-center mb-5 md:mb-10 flex-col md:flex-row gap-10 md:gap-5">
				<h1 className="text-primary text-4xl font-bold">
					My Development {developmentId}
				</h1>

				<div className="flex gap-2 w-full md:w-[350px]">
					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant={"primary"}
								className={"ms-auto h-[2.5rem] w-[5.8rem]"}
								size={"xl"}
							>
								<Plus strokeWidth={3} /> Add
							</Button>
						</DialogTrigger>

						<DialogContent
							className={
								"w-[90vw] sm:max-w-none md:w-[50vw] max-h-[80vh] overflow-y-auto flex flex-col px-8 pt-6"
							}
						>
							<form>
								<DialogHeader>
									<DialogTitle className={"text-xl md:text-3xl font-bold"}>
										Add Development Plan - Training
									</DialogTitle>
									<div className="w-full h-[2px] bg-gray-200 mt-2 mb-2 md:mb-3 md:mt-3" />

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
										<SelectInput
											className={"grid gap-3 col-span-1"}
											labelTitle={"Group Competency"}
											content={["BC", "BMC", "MDP"]}
										/>
										<SelectInput
											className={"grid gap-3 col-span-1"}
											labelTitle={"Competency"}
											content={[
												"Communication",
												"Problem Solving",
												"Project Manager",
											]}
										/>
									</div>
									<div className="block md:hidden w-full h-[2px] bg-gray-200 mt-2 mb-2 md:mb-3 md:mt-3" />

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
										<SelectInput
											className={"grid gap-3 col-span-1"}
											labelTitle={"Group Competency"}
											content={["BC", "BMC", "MDP"]}
										/>
										<SelectInput
											className={"grid gap-3 col-span-1"}
											labelTitle={"Competency"}
											content={[
												"Communication",
												"Problem Solving",
												"Project Manager",
											]}
										/>
									</div>
									<div className="block md:hidden w-full h-[2px] bg-gray-200 mt-2 mb-2 md:mb-3 md:mt-3" />

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
										<SelectInput
											className={"grid gap-3 col-span-1"}
											labelTitle={"Group Competency"}
											content={["BC", "BMC", "MDP"]}
										/>
										<SelectInput
											className={"grid gap-3 col-span-1"}
											labelTitle={"Competency"}
											content={[
												"Communication",
												"Problem Solving",
												"Project Manager",
											]}
										/>
									</div>
									<div className="block md:hidden w-full h-[2px] bg-gray-200 mt-2 mb-2 md:mb-3 md:mt-3" />

									<DialogFooter className={"flex flex-row justify-end mt-4"}>
										<DialogClose asChild>
											<Button
												className={
													"bg-accent text-accent-foreground hover:opacity-70"
												}
												size={"xl"}
											>
												Close
											</Button>
										</DialogClose>
										<Button
											variant={"primary"}
											className={"ms-auto"}
											size={"xl"}
										>
											Save <Save strokeWidth={2} />
										</Button>
									</DialogFooter>
								</DialogHeader>
							</form>
						</DialogContent>
					</Dialog>

					<SearchInput className={"w-[15rem] md:w-full"} />
				</div>
			</div>

			<div className="rounded-lg border border-gray-200 shadow-all p-2">
				<DataTable columns={columns} rows={developments} />
			</div>

			<div className="flex items-center justify-between w-full mt-5 flex-col md:flex-row gap-4 md:gap-">
				<p className=" text-[#9e9e9e] text-sm md:text-base">
					Showing 1-10 of 50 results
				</p>

				<MyPagination />
			</div>
		</div>
	);
}
