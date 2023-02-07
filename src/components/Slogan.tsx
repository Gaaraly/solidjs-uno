import styles from '../App.module.css'
import logo from '../logo.svg'

export const Slogan = () => {
  return (
    <>
      <img src={logo} class={styles.logo} alt="logo" />
      <p>
        Edit <code class="bg-blueGray rounded px-2 py-1 text-black text-op70">src/App.tsx</code> and save to reload.
      </p>
    </>
  )
}
