import styles from '../styles/Elements.module.css'
import Image from 'next/image'

const Header = () => {
  return(<>
    <header className={styles.header}>
      <Image src='/logo_centered.png' width='553.446
px' height='137.862px' />
    </header>
  </>)
}

export default Header