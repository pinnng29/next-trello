"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const BoardDashboardButton = () => {
  return (
    <Button
      variant={"transparent"}
      className="h-auto w-auto p-2"
    >
      <Link href={"/"}>
        Dashboard
      </Link>
    </Button>
  );
};
