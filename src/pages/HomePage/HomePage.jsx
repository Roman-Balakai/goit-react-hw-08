import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={styles.home}>
        <h1 className={styles.title}>Welcome to Contacts</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          modi reiciendis similique, pariatur fuga, a deserunt vel non quam
          voluptates porro, quidem praesentium odit assumenda possimus velit
          blanditiis? Est, pariatur!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
