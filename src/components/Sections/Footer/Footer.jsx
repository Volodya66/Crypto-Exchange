import style from './Footer.module.css';

import { FaInstagram } from 'react-icons/fa';
import { TbBrandTelegram } from 'react-icons/tb';

export default function Footer() {
  return (
    <footer className={style.sectionFooter}>
      <div className={style.wrapperContent}>
        <div className={style.wrapperContentMax}>
          <div className={style.textSection}>
            <h4 className={style.titleText}>Crypto Change</h4>
            <p className={style.textOnline}>Онлайн обмінник криптовалют</p>
          </div>
          <div className={style.containerSocial}>
            <ul className={style.listContact}>
              <li className={style.f}>
                <a
                  className={style.link}
                  href="tel:+380000000000"
                  target="blank"
                >
                  +38000 000 0000
                </a>
              </li>
              <li className={style.f}>
                <a
                  className={style.link}
                  href="mailto:mailing@gmail.com"
                  target="blank"
                >
                  mailing@gmail.com
                </a>
              </li>
            </ul>

            <ul className={style.listIconDesk}>
              <li className={style.f}>
                <a
                  className={style.link}
                  href="https://www.instagram.com/"
                  target="blank"
                  title="Інстаграм"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className={style.f}>
                <a
                  className={style.link}
                  href="https://web.telegram.org./#/login"
                  target="blank"
                  title="Телеграм"
                >
                  <TbBrandTelegram />
                </a>
              </li>
            </ul>

            <ul className={style.listIcon}>
              <li className={style.f}>
                <a
                  className={style.link}
                  href="https://www.instagram.com/"
                  target="blank"
                  title="Інстаграм"
                >
                  <FaInstagram className={style.icon} />
                </a>
              </li>
              <li className={style.f}>
                <a
                  className={style.link}
                  href="https://web.telegram.org./#/login"
                  target="blank"
                  title="Телеграм"
                >
                  <TbBrandTelegram className={style.icon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className={style.listFooter}>
        <li className={style.listFooterItem}>Політика конфіденційності</li>
        <li className={style.listFooterItem}>Публічна оферта</li>
        <li className={style.listFooterItem}>© Всі права захищені</li>
      </ul>
    </footer>
  );
}
