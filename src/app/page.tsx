"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTestStore } from "@/store/useTestStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const value = useTestStore((state) => state.value);
  const updateValue = useTestStore((state) => state.updateValue);
  const [input, setInput] = useState("");

  return (
    <main className="flex flex-1 items-center py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Local Lattes Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/images/cafe.jpg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-balance text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover the Best Local Cafes
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Discover the best local coffee shops based on your favorite
                categories and their signature creations. <br />
                Find your new favorite spot.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Get Updates</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to stay informed about new local latte spots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
