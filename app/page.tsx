"use client";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Hero from "@/components/Home/Hero";
import Products from "@/components/Home/Products";
import About from "@/components/Home/About";


export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="w-full">
      <Hero />
      <Products />
      <About />
    </div>
  );
}
