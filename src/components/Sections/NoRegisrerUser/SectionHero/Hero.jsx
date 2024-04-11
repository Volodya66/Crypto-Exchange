import style from './Hero.module.css';
import Section from '../../SectionWrapper/Section';

export default function Hero() {
  return (
    <>
      <Section typeSection={'sectionHero'} containerSection={'containerHero'}>
        <div className={style.wrapperHero}>
          <div className={style.wrapperLinearGradient}>
            <ul className={style.listBabl}>
              <li>
                <h2 className={style.CC}>Crypto Change</h2>
              </li>
              <li>
                <p className={style.CCText}>Онлайн обмінник криптовалют</p>
              </li>
            </ul>

            <h1 className={style.textHero}>
              Crypto Change – це надійний та простий спосіб здійснювати операції
              з криптовалютами в Україні.
            </h1>
          </div>
          <div className={style.wrapperBtn}>
            <h1 className={style.textDesk}>
              Crypto Change – це надійний та простий спосіб здійснювати операції
              з криптовалютами в Україні.
            </h1>
            <ul className={style.listBtn}>
              {/* <li><Button styles={"btnHero1"} text={"Обміняти криптовалюту"}/></li> */}
              <li>
                <a href="#userContacts" className={style.btnHero1}>
                  Обміняти криптовалюту
                </a>
              </li>
              <li>
                <a href="#FAQ" className={style.btnHero2}>
                  Дізнатись умови
                </a>
              </li>
              {/* <li><Button styles={"btnHero2"} text={"Дізнатись умови"}/></li> */}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
