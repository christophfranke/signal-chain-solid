import $ from 'signal-chain'
import { createSolid, fromSolid, listenSolid } from './solid'

const solid = {
  create: createSolid,
  listen: listenSolid,
  primitive: {
    create: fromSolid,
  }
}

export default {
  ...$,
  solid
}
