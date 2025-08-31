import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <header>
      <nav>
        <div>
          <>
            <BurgerIcon type="primary" />
            <p>Конструктор</p>
          </>
          <>
            <ListIcon type="primary" />
            <p>Лента заказов</p>
          </>
        </div>
      </nav>
      <>
        <Logo />
      </>
      <nav>
        <>
          <ProfileIcon />
          <p>Личный кабинет</p>
        </>
      </nav>
    </header>
  );
};

export default AppHeader;
