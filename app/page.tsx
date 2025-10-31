"use client";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Hero from "@/components/Home/Hero";


export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="w-full h-[730px]">
      <Hero />
    </div>
  );
}
