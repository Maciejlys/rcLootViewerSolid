import { createSignal, createRoot, createEffect, on } from "solid-js";
import { PlayerLoot, PlayersLoot } from "~/models/loot.model";
import { VoteType } from "~/models/voteType";
import Vote from "./Vote";

const emptyLoot: PlayerLoot = {
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
  const [separatedItems, setSeparatedItems] = createSignal<PlayersLoot>({});
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
    const votes: string[] = [];
    players().map((player) => {
      if (!votes.includes(player.vote)) {
        votes.push(player.vote);
      }
    });
    return votes;
  };

  const separateItems = () => {
    const parsedData: PlayersLoot = {};
    for (let player of players()) {
      parsedData[player.player] ??= { ...emptyLoot };
      parsedData[player.player] = {
        ...parsedData[player.player],
        allItems: [...parsedData[player.player].allItems, player.item],
      };
      switch (player.vote) {
        case vote().Bis:
          parsedData[player.player] = {
            ...parsedData[player.player],
            bises: [...parsedData[player.player].bises, player.item],
          };
          break;
        case vote().Up:
          parsedData[player.player] = {
            ...parsedData[player.player],
            ups: [...parsedData[player.player].ups, player.item],
          };
          break;
        case vote().OffSpec:
          parsedData[player.player] = {
            ...parsedData[player.player],
            offSpec: [...parsedData[player.player].offSpec, player.item],
          };
          break;
      }
    }
    setSeparatedItems(parsedData);
  };

  return { setRawLoot, setfileName, fileName };
}

export default createRoot(createLoot);
