import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function SelectInput({ className, labelTitle, content = [] }) {
	return (
		<div className={className}>
			<Label htmlFor="group-competency">{labelTitle}</Label>
			<Select>
				<SelectTrigger id="group-competency" className="w-full">
					<SelectValue placeholder="Select group competency" />
				</SelectTrigger>
				<SelectContent>
					{content.map((item) => (
						<SelectItem key={item} value={item}>
							{item}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
