import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <form className="space-y-4">
        <Input placeholder="First Name" required />
        <Input placeholder="Last Name" required />
        <Input type="email" placeholder="Email" required />
        <Textarea placeholder="Your Message..." required />

        <Button className="w-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 border-2 border-orange-500">
          Submit
        </Button>
      </form>
    </div>
  );
}
