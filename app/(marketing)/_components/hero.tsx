"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Medal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="py-10 bg-muted">
      <div className="flex flex-col items-center justify-center py-10 delay-200 duration-1000 animate-in fade-in slide-in-from-top-6">
        <Badge className="p-2">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management app
        </Badge>
        <h1 className="text-center text-5xl lg:text-6xl xl:text-8xl mt-6">
          Taskify helps team move work forward
        </h1>
        <h2 className="mx-auto mb-6 sm:px-0 mt-6 max-w-4xl px-5 text-center tracking-wide">
          Collaborate, manage projects, and reach new productivity peaks, From
          high rises to the home office the way your team works is unique -
          accomplish it all with Taskify.
        </h2>
        <div className="flex items-center gap-x-2">
          <Button
            asChild
            variant={"primary"}
          >
            <Link href={"/sign-up"}>Get Started</Link>
          </Button>
          <Button asChild>
            <Link href={"https://github.com/pinnng29/next-trello"} target="_blank">
              <Github className="h-5 w-5 mr-1" />
              Star on Github
            </Link>
          </Button>
        </div>
        <div className="mt-10 flex justify-center px-5 sm:px-0">
          <Image
            src={"/taskify-image.png"}
            alt="Trello image"
            width={700}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
