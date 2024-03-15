import TabOne from '../TabOne';
import TabTwo from '../TabTwo';
import styles from './Content.module.scss';

const Content = ({ index }) => {
  return (
    <div className={styles.content}>
      <div className={styles.content__container}>
        <div className={styles.content__inner}>
          <span className={styles.content__title}>Контент таба {index}</span>
          {index === 1 && <TabOne />}
          {index === 2 && <TabTwo />}
        </div>
        <button className={styles.content__button}>Кнопка действия</button>
      </div>
    </div>
  );
};

export default Content;
