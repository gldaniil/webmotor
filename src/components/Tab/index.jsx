import { MdArrowForwardIos } from 'react-icons/md';
import styles from './Tab.module.scss';
import { useEffect, useState } from 'react';

const Tab = ({ i, current, onClick }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div
      className={`${styles.tab} ${current === i ? styles['tab--active'] : ''}`}
      onClick={() => onClick(i)}
    >
      <div className={styles.tab__inner}>
        <div className={styles.tab__top}>
          <span className={styles.tab__title}>Заголовок таба {i}</span>
          {width < 1200 && (
            <button className={styles.tab__button}>
              <MdArrowForwardIos />
            </button>
          )}
        </div>
        <p className={styles.tab__text}>
          Равным образом, высококачественный прототип будущего проекта
          способствует повышению качества анализа существующих паттернов{' '}
        </p>
      </div>
    </div>
  );
};

export default Tab;
