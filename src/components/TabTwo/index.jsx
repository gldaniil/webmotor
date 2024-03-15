import styles from './TabTwo.module.scss';

const TabTwo = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__inner}>
        {[...Array(3)].map((_, i) => {
          return (
            <div key={i} className={styles.main__row}>
              <input
                id="name"
                type="text"
                placeholder=" "
                className={styles.main__input}
              />
              <label htmlFor="name" className={styles.main__placeholder}>
                Имя*
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabTwo;
