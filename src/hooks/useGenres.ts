import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import ApiClient, { FetchResponse } from "../services/apiClient";
import { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
