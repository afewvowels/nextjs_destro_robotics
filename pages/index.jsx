import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Social from '../components/Social'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Destro Robotics</title>
        <meta name="description" content="Destro Robotics" />
        <link rel="icon" href="/globe.svg" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <h1 className={styles.mainHeadings}>
          Welcome to Destro Robotics
        </h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3dav1JkLB2w?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h2 className={styles.mainHeadings}>Destro Robotics is</h2>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies eros ac venenatis auctor. Nulla velit nibh, sodales gravida imperdiet ut, vestibulum in neque. Phasellus ut gravida nibh. Nullam id finibus ex.</p>
        <p>Phasellus turpis ex, condimentum sed nisl dictum, tempus fringilla nibh. Aliquam erat volutpat. Pellentesque id tellus non nunc volutpat viverra at eget velit. Ut a nunc at orci auctor pulvinar nec id mi.</p>
        <h3 className={styles.mainHeadings}>Follow Destro Robotics online</h3>
        <div className={styles.mainIcons}>
          <Social icon='/facebook-square-brands.svg' description='Facebook' url='https://www.facebook.com/groups/destrofoundation'/>
          <Social icon='/youtube-brands.svg' description='Youtube' url='https://www.youtube.com/channel/UCK9neHq3aT9dqN_ossHhLew'/>
          <Social icon='/instagram-brands.svg' description='Instagram' url='https://www.instagram.com/destro_robotics/'/>
          <Social icon='/envelope-solid.svg' description='Email' url='mailto:destrorocotics@gmail.com'/>
        </div>
      </main>

      <Footer/>
    </>
  )
}
