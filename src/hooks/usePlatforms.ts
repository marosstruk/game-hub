import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient, { FetchResponse } from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms,
  });

export default usePlatforms;
