import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/imageUrl";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            <HStack justifyContent="space-between">
              <Text>{game.name}</Text>
              <Emoji rating={game.rating_top} />
            </HStack>
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
