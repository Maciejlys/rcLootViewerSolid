import {
  createSignal,
  createMemo,
  createRoot,
  createEffect,
  on,
} from 'solid-js'
import { PlayerLoot, PlayersLoot } from '~/models/loot.model'
import { VoteType } from '~/models/voteType'

function createVote() {
  const [vote, setVotes] = createSignal<VoteType>({
    Bis: '1',
    Up: '3',
    OffSpec: '4',
  })

  return { vote, setVotes }
}

export default createRoot(createVote)
