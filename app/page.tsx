// Importing necessary dependencies and components
import LoadMore from "@/components/LoadMore";
import { fetchAnime } from "@/app/action";

// Async function representing the Home page
async function Home() {
  // Fetching initial anime data
  const data: any[] = await fetchAnime(1);

  // Rendered JSX for the Home page
  return (
    // Main content container with styling
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      {/* Section heading for the anime exploration */}
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      {/* Grid layout for displaying anime cards */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {/* Rendered anime card components */}
        {data}
      </section>

      {/* LoadMore component for fetching and displaying more anime */}
      <LoadMore />
    </main>
  );
}

// Exporting the Home component as the default export
export default Home;
