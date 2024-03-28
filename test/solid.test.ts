import $ from '../src/signal-ts'
import { createSignal } from 'solid-js'
import { describe, it, expect } from 'vitest'


describe('if', () => {
    it('create a solid accessor', async () => {
        const primitive = $.primitive.create(1)
        const value = $.solid.create(
            primitive.listen
        )

        expect(value()).toBe(1)

        primitive.value = 2
        await new Promise(resolve => setTimeout(resolve))
        expect(value()).toBe(2)
    })

    it('can listen to a solid accessor', async () => {
        const [signal] = createSignal(1)
        const primitive = $.primitive.connect(
            $.solid.listen(signal),
        )

        expect(primitive.value).toBe(1)
    })
})
