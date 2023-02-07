import type { Component } from 'solid-js'

import { Counter } from './components/Counter'
import { Slogan } from './components/Slogan'
import styles from './App.module.css'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Slogan />
        <Counter />
        <a
          class="text-#b318f0"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default App
