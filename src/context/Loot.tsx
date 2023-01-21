import { createSignal, createRoot, createEffect, on } from "solid-js";
import { PlayerLoot } from "~/models/loot.model";
import LootScores from "../context/LootScores";
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
  const [playersLoot, setplayersLoot] = createSignal<PlayerLoot[]>([]);
  const { vote } = Vote;
  const { itemWeight, contestedItems, contestedWeight } = LootScores;

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
      calculateScores();
    })
  );

  const calculateScores = () => {
    for (let loot of playersLoot()) {
      loot.score =
        loot.bises.length * +itemWeight().Bis +
        loot.ups.length * +itemWeight().Up +
        loot.offSpec.length * +itemWeight().OffSpec;
      let contestedCount =
        contestedItems().filter((value) => loot.allItems.includes(value))
          .length || 0;

      loot.adjusted = loot.score + contestedWeight() * contestedCount;
    }
  };

  const getDifferentVotes = () => {
    const votes: string[][] = [];
    players().map((player) => {
      if (!votes.map((vote) => vote[0]).includes(player.vote)) {
        votes.push([player.vote, player.item]);
      }
    });
    return votes;
  };

  const sortItems = (sortBy: keyof PlayerLoot) => {
    const sorted = playersLoot().sort((a, b) => {
      let aSort, bSort;
      if (sortBy === "bises" || sortBy === "ups" || sortBy === "offSpec") {
        aSort = a[sortBy].length;
        bSort = b[sortBy].length;
      } else if (sortBy === "player") {
        aSort = b[sortBy].toLowerCase();
        bSort = a[sortBy].toLowerCase();
      } else {
        aSort = a[sortBy];
        bSort = b[sortBy];
      }
      if (aSort > bSort) {
        return -1;
      }
      if (aSort < bSort) {
        return 1;
      }
      return 0;
    });
    setplayersLoot([...sorted]);
  };

  const separateItems = () => {
    const parsedData: PlayerLoot[] = [];
    players().forEach((player) => {
      const playerLoot = parsedData.find((p) => p.player === player.player);
      if (!playerLoot) {
        parsedData.push({
          ...emptyLoot,
          player: player.player,
        });
      } else {
        playerLoot.allItems = [...playerLoot.allItems, player.item];
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
    setplayersLoot(parsedData);
  };

  return {
    setRawLoot,
    setfileName,
    fileName,
    getDifferentVotes,
    sortItems,
    playersLoot,
  };
}

export default createRoot(createLoot);
