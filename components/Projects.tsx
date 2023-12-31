import React from "react";
import { Button } from "./ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import { Github } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>Nextjs Networth Tracker</CardTitle>
          <CardDescription>
            Next-Auth, Prisma, Tailwind, TypeScript
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center space-y-1.5">
              <Image
                src="/networth-screenshot.png"
                alt="test"
                width={500}
                height={500}
                className="transition hover:scale-110"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link
              href="https://github.com/jbonn2002/nextjs-networth-tracker"
              target="_blank"
            >
              GitHub
              <div className="ml-2">
                <Github />
              </div>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://nextjs-networth-tracker.vercel.app/"
              target="_blank"
            >
              Live Site
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>Nextjs Saas Template</CardTitle>
          <CardDescription>Typescript, TailwindCSS, Clerk</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center space-y-1.5">
              <Image
                src="/exemplarium.png"
                alt="test"
                width={500}
                height={500}
                className="transition hover:scale-110"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link
              href="https://github.com/jbonn2002/nextjs-saas-project"
              target="_blank"
            >
              GitHub
              <div className="ml-2">
                <Github />
              </div>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://nextjs-saas-project-alpha.vercel.app/"
              target="_blank"
            >
              Live Site
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>Nextjs Reddit Project</CardTitle>
          <CardDescription>
            Typescript, React-Query, Prisma, Zod
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center space-y-1.5">
              <Image
                src="/redditcloness.png"
                alt="test"
                width={500}
                height={500}
                className="transition hover:scale-110"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link
              href="https://github.com/jbonn2002/nextjs-reddit-clone"
              target="_blank"
            >
              GitHub
              <div className="ml-2">
                <Github />
              </div>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://nextjs-reddit-clone-delta.vercel.app/"
              target="_blank"
            >
              Live Site
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[400px] mt-5">
        <CardHeader>
          <CardTitle>Nextjs/Shopify Ecommerce Store</CardTitle>
          <CardDescription>
            Nextjs, Tailwind, Typescript, Shopify CMS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center space-y-1.5">
              <Image
                src="/luminaryscreenshot.png"
                alt="test"
                width={500}
                height={500}
                className="transition hover:scale-110"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link
              href="https://github.com/jbonn2002/nextjs-commerce-project"
              target="_blank"
            >
              GitHub
              <div className="ml-2">
                <Github />
              </div>
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://nextjs-commerce-project.vercel.app/"
              target="_blank"
            >
              Live Site
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Projects;
