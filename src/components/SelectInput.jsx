import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function SelectInput({
	id,
	className,
	labelTitle,
	content = [],
}) {
	return (
		<div className={className}>
			<Label htmlFor={id}>{labelTitle}</Label>
			<Select>
				<SelectTrigger id={id} className="w-full">
					<SelectValue placeholder={cn("Select", labelTitle)} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>{labelTitle}</SelectLabel>
						{content.map((item) => (
							<SelectItem key={item} value={item}>
								{item}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
