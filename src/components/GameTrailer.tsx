import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  const firstTrailer = data?.results[0];

  if (isLoading || !firstTrailer) return null;
  if (error) throw error;

  return (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  );
};

export default GameTrailer;
