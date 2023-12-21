import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import ApiClient from "../services/apiClient";
import ms from "ms";

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useTrailers;
