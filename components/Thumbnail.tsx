import { Movie } from "@/typing";
import Image from "next/image";

interface Props {
  movie: Movie | null | undefined;
}

function Thumbnail({ movie }: Props) {
  if (!movie) {
    // Return null or a placeholder component when movie is null or undefined
    return null; // or <div>No movie data available</div>
  }

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover-scale-105">
      <Image
      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
      className="rounded-sm object-cover md:rounded"
      layout="fill" alt={""}      
      />
    </div>
  );
}

export default Thumbnail;
