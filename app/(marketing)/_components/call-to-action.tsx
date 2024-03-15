"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 py-24 max-w-xl text-center">
        <div className="flex flex-col items-center justify-center p-10 border border-border rounded-md shadow-md shadow-amber-600">
          <h2 className="text-4xl font-semibold">Proudly open source</h2>
          <p className="mt-4 text-muted-foreground">
            Taskify is an open source project
          </p>
          <Button
            asChild
            className="mt-4"
          >
            <Link href={"https://github.com/pinnng29/next-trello"} target="_blank">
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                Github Repo
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
