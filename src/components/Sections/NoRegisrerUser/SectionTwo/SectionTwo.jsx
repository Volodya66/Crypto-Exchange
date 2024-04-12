import Section from '../../SectionWrapper/Section';
import style from './SectionTwo.module.css';
// import Swipers from '';
export default function SectionTwo() {
  return (
    <Section typeSection={''} containerSection={'container'} id={'info'}>
      <h3 className={style.title}>Інфо</h3>
      <ul className={style.listBlock}>
        <li className={style.listBlockItem}>
          <div className={style.listLists}>
            <ul className={style.listAdvantages}>
              <li className={style.listItemAdv}>
                <h4 className={style.listItemTile}>300</h4>
                <p className={style.itemText}>Криптовалют</p>
              </li>
              <li className={style.listItemAdv}>
                <p className={style.itemText}>Клієнтів</p>
                <h4 className={style.listItemTile}>5000</h4>
              </li>
              <li className={style.listItemAdv}>
                <h4 className={style.listItemTile}>$34m</h4>
                <p className={style.itemText}>Обіг в рік</p>
              </li>
              <li className={style.listItemAdv}>
                <h4 className={style.listItemTile}>5</h4>
                <p className={style.itemText}>Країн</p>
              </li>
            </ul>
            <ul className={style.listOpt}>
              <li>
                <p className={style.textOpt}>
                  Платформа для швидкого та надійного обміну.
                  <br /> Наш сервіс допомагає вам обмінювати стейблкойни,
                  криптовалюти та фіатні гроші без зайвих клопотів.
                </p>
              </li>
              <li>
                <p className={style.textOpt}>
                  Відсутність прихованих комісій. Сума на екрані – фактична
                  сума, яку заплатить користувач.
                </p>
              </li>
              <li>
                <p className={style.textOpt}>
                  Зручний та простий інтерфейс. Сервіс пропонує зрозумілу та
                  швидку процедуру обміну.
                </p>
              </li>
              <li>
                <p className={style.textOpt}>
                  Вигідні умови. Це завжди хороший курс, низькі комісії,
                  відсутність ризиків та прозорий алгоритм роботи.
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className={style.listBlockItem}>
          <div className={style.cryptoWrapperText}>
            <p className={style.textCrypto}>
              Crypto Change – це надійний та простий спосіб здійснювати операції
              з криптовалютами в Україні. Сервіс має бездоганну репутацію та
              пропонує найкращі умови обміну.
            </p>
            <p className={style.textCrypto}>
              Якщо ви вирішите купити криптовалюту онлайн на нашому сервісі, то
              отримаєте професійну та оперативну підтримку, безпеку та простоту.
            </p>
          </div>
        </li>
        <li className={style.listBlockItem}>
          <div>
            {' '}
            <h3 className={style.textCryptoOb}>
              Переваги обміну криптовалюти у нас
            </h3>
            <ul className={style.advantages}>
              <li>
                <div className={style.advantagesWrapperCircle}>
                  <ul className={style.advantagesListCircle}>
                    <li className={style.advantagesItem}>Зручно</li>
                    <li className={style.advantagesItem}>Надійно</li>
                    <li className={style.advantagesItem}>Вигідно</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <ul className={style.listQuality}>
                    <li className={style.listQualityItem}>
                      Кваліфікована технічна підтримка готова допомогти у разі
                      проблем.
                    </li>
                    <li className={style.listQualityItem}>
                      Без прихованих комісій та додаткових платежів. Здійснюйте
                      транзакції за вигідним курсом з будь-яких банківських
                      карток України.
                    </li>
                    <li className={style.listQualityItem}>
                      Зрозумілий інтерфейс. Купуйте, продавайте та обмінюйте
                      криптовалюту онлайн у будь-який час.
                    </li>
                    <li className={style.listQualityItem}>
                      Гарантуємо безпечний та конфіденційний обмін. Будьте
                      певні, передані вами дані під захистом, а проведення
                      операцій під контролем.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            {/* <Swipers /> */}
          </div>
        </li>
      </ul>
    </Section>
  );
}
