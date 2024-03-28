# Signal-Chain-Solid
## A wrapper for Signal-Chain to interact with solid-js

### Installation
```bash
npm install signal-chain-solid
```

### Usage

This package wraps the original **Signal-Chain** package to interact with **solid-js** signals.
It adds a namspace `$.solid` in order to:

1. Create a solid signal from chain
```typescript
import $ from 'signal-chain-solid'
import { createEffect, createSignal } from 'solid-js'

const primitive = $.primitive.create(0)

// Create a solid signal
const signal = $.solid.create(
    primitive.listen
)

createEffect(() => {
  console.log('signal is', signal()) // logs: signal is 0
})

primitive.value = 1 // logs: signal is 1
```

2. Listen to a solid signal in a chain
```typescript
const [otherSignal, setOtherSignal] = createSignal('world')


$.connect(
    $.solid.listen(otherSignal),
    $.log('hello') // logs: hello world
)

setOtherSignal('solid') // logs: hello solid
```

