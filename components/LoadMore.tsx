"use client";

// Importing necessary dependencies and components
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import AnimeCard from "@/components/AnimeCard";
import { fetchAnime } from "@/app/action";

// Initial page number for fetching more anime data
let page = 2;

// Type definition for AnimeCard
export type AnimeCard = JSX.Element;

// Functional component responsible for loading more anime cards
function LoadMore() {
  // Using the `useInView` hook to detect when the component is in view
  const { ref, inView } = useInView();

  // State to store the fetched anime data
  const [data, setData] = useState<AnimeCard[]>([]);

  // useEffect to fetch more anime data when the component is in view
  useEffect(() => {
    if (inView) {
      // Fetching anime data and updating the state
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        // Incrementing the page number for the next fetch
        page++;
      });
    }
  }, [inView, data]);

  // Rendered JSX for displaying the anime cards and a loading spinner
  return (
    <>
      {/* Section for displaying the anime cards in a grid layout */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      {/* Section for displaying a loading spinner when more anime is being fetched */}
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {/* Loading spinner image */}
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

// Exporting the LoadMore component as the default export
export default LoadMore;
