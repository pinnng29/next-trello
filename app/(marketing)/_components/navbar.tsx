import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-[64px] bg-white items-center px-4 justify-between border-b shadow-md">
      <Logo />
      <Button
        asChild
        variant={"primary"}
      >
        <Link
          href={"/sign-in"}
          className="flex items-center gap-2 font-bold"
        >
          <LogIn className="h-4 w-4" />
          Sign in
        </Link>
      </Button>
    </nav>
  );
}
