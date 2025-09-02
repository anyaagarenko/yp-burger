import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "src/components/app-header/app-header.module.css";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <BurgerIcon type="primary" />
          <span>Конструктор</span>
        </div>
        <div>
          <ListIcon type="primary" />
          <span>Лента заказов</span>
        </div>
      </nav>
      <>
        <Logo />
      </>
      <nav className={styles.nav}>
        <>
          <ProfileIcon />
          <p>Личный кабинет</p>
        </>
      </nav>
    </header>
  );
};

export default AppHeader;
