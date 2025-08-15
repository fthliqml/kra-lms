import { Button } from "@/components/ui/button";

export default function Tryout() {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center gap-5">
      <Button variant="primary">Add</Button>
      <Button className="bg-warning hover:opacity-80">Edit</Button>
    </div>
  );
}
