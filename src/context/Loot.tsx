import { createSignal, createRoot, createEffect, on } from "solid-js";
import { PlayerLoot } from "~/models/loot.model";
import { VoteType } from "~/models/voteType";
import Vote from "./Vote";

const emptyLoot: PlayerLoot = {
  player: "",
  bises: [],
  ups: [],
  offSpec: [],
  allItems: [],
  score: 0,
  adjusted: 0,
};

function createLoot() {
  const [fileName, setfileName] = createSignal("");
  const [rawLoot, setRawLoot] = createSignal<string[]>([]);
  const [players, setPlayers] = createSignal<
    { player: string; vote: string; item: string }[]
  >([]);
  const [separatedItems, setSeparatedItems] = createSignal<PlayerLoot[]>([]);
  const { vote } = Vote;

  createEffect(
    on(rawLoot, (rawLoot) => {
      const players: { player: string; vote: string; item: string }[] = [];
      rawLoot.map((line) => {
        const [player, rest] = line.split(",");
        const [vote, ...item] = rest.split(" ");
        const itemString = item.join(" ").trim();
        players.push({ player, vote, item: itemString });
      });
      setPlayers(players);
      separateItems();
    })
  );

  const getDifferentVotes = () => {
    const votes: string[][] = [];
    players().map((player) => {
      if (!votes.map((vote) => vote[0]).includes(player.vote)) {
        votes.push([player.vote, player.item]);
      }
    });
    return votes;
  };

  const separateItems = () => {
    const parsedData: PlayerLoot[] = [];
    players().forEach((player) => {
      const playerLoot = parsedData.find((p) => p.player === player.player);
      if (!playerLoot) {
        parsedData.push({
          ...emptyLoot,
          player: player.player,
          allItems: [player.item],
        });
      }

      switch (player.vote) {
        case vote().Bis:
          if (playerLoot) {
            parsedData[parsedData.indexOf(playerLoot)] = {
              ...playerLoot,
              bises: [...playerLoot.bises, player.item],
            };
          }
          break;
        case vote().Up:
          if (playerLoot) {
            parsedData[parsedData.indexOf(playerLoot)] = {
              ...playerLoot,
              ups: [...playerLoot.bises, player.item],
            };
          }
          break;
        case vote().OffSpec:
          if (playerLoot) {
            parsedData[parsedData.indexOf(playerLoot)] = {
              ...playerLoot,
              offSpec: [...playerLoot.bises, player.item],
            };
          }
          break;
      }
    });
    setSeparatedItems(parsedData);
  };

  return {
    setRawLoot,
    setfileName,
    fileName,
    getDifferentVotes,
    separatedItems,
  };
}

export default createRoot(createLoot);
