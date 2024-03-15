import { useState } from 'react';
import styles from './App.module.scss';
import Content from './components/Content';
import Tab from './components/Tab';

function App() {
  const [currentTab, setCurrentTab] = useState(1);

  const handleClickTab = (i) => {
    setCurrentTab(i);
  };

  return (
    <div className={styles.App}>
      <div className={styles.App__container}>
        <div className={styles.App__inner}>
          <div className={styles.tabs}>
            {[...Array(3)].map((_, i) => {
              i++;
              return (
                <Tab
                  key={i}
                  i={i++}
                  current={currentTab}
                  onClick={handleClickTab}
                />
              );
            })}
          </div>
          {currentTab !== 3 && <Content index={currentTab} />}
        </div>
      </div>
    </div>
  );
}

export default App;
