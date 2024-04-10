import { NavLink } from 'react-router-dom';

import Button from '../../Button/Button';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.nav}>
          <NavLink className={style.logo} to="/crypto">
            Crypto Change
          </NavLink>

          <Button
            styles={'buttonMobileMenu'}
            // onClick={openModal}
          >
            Меню
          </Button>
        </nav>
      </div>
    </header>
  );
}
