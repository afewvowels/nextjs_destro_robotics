import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Elements.module.css'

const Social = ({icon, description, url}) => {
  return(<>
    <Link href={url} passHref>
      <span className={styles.socialLinkWrapper}>
        <Image src={icon} width='25px' height='25px'/>
        <p>{description}</p>
      </span>
    </Link>
  </>)
}

export default Social