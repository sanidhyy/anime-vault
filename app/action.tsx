// Importing necessary dependencies and components
"use server";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// Function to fetch anime data from the Shikimori API
export const fetchAnime = async (page: number) => {
  // Making a fetch request to the Shikimori API with pagination and sorting parameters
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  // Parsing the response JSON data
  const data = await response.json();

  // Mapping the API data to AnimeCard components
  return data.map((item: AnimeProp, index: number) => (
    // Creating an AnimeCard component for each item in the response
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
