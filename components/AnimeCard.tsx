// Importing necessary dependencies and components
import Image from "next/image";
import { Variants } from "framer-motion";

import { MotionDiv } from "@/components/MotionDiv";

// Defining the structure of an anime object
export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

// Defining the structure of the component props
interface Prop {
  anime: AnimeProp;
  index: number;
}

// Framer Motion variants for animation
const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

// Functional component representing an anime card
function AnimeCard({ anime, index }: Prop) {
  return (
    // Wrapping the component in a motion-div for animation
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      {/* Container for the anime image */}
      <div className="relative w-full h-[37vh]">
        {/* Next.js Image component for optimized image loading */}
        <Image
          src={`https://shikimori.one/${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      {/* Container for the anime information */}
      <div className="py-4 flex flex-col gap-3">
        {/* Header section with anime name and kind */}
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        {/* Details section with episode count and score */}
        <div className="flex gap-4 items-center">
          {/* Container for episodes information */}
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          {/* Container for score information */}
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

// Exporting the AnimeCard component as the default export
export default AnimeCard;
