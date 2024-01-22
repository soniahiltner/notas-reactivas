import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
      <section className={styles.home}>
        <p>
          The place for your ideas, your thoughts, your calculations, your
          errands, things to buy, to discover, to read...
        </p>
        <p>Your imagination is your limit</p>
        <p>
          Take an empty note, fill it, save it to read later, change it or
          delete it.
        </p>
        <p>Organize them by subjects or filter by date.</p>
      </section>
    </div>
  )
}

export default Home
