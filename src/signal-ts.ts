import $ from 'signal-chain'
import { createSolid, listenSolid } from './solid'

const solid = {
  create: createSolid,
  listen: listenSolid,

}

export default {
  ...$,
  solid
}
