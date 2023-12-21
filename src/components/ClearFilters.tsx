import { Button } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const ClearFilters = () => {
  const setSelectedPlatform = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const setSelectedGenre = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);

  if (!selectedPlatformId && !selectedGenreId && !searchText) return null;

  const clearFilters = () => {
    setSelectedPlatform();
    setSelectedGenre();
    setSearchText();
  };

  return <Button onClick={clearFilters}>Clear Filters</Button>;
};

export default ClearFilters;
