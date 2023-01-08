export interface PlayerLoot {
  bises: string[]
  ups: string[]
  offSpec: string[]
  score: number
  adjusted: number
  allItems: string[]
}

export interface PlayersLoot {
  [key: string]: PlayerLoot
}
