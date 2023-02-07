export const Counter = () => {
  const [count, setCount] = createSignal(0)

  const dec = () => setCount(count() - 1)
  const inc = () => setCount(count() + 1)

  return (
    <div class="inline-flex my-2">
      <button onClick={dec} class='w-11 text-3xl bg-green/op60 rounded-full'>-</button>
      <p class="font-mono w-15 m-auto inline-block">{count()}</p>
      <button onClick={inc} class='w-11 text-3xl bg-green/op60 rounded-full'>+</button>
    </div>
  )
}
