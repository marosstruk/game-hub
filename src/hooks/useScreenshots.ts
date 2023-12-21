import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import ApiClient from "../services/apiClient";
import ms from "ms";

const useScreenshots = (gameId: number) => {
  const apiClinet = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClinet.getAll,
    staleTime: ms("24h"),
  });
};

export default useScreenshots;
