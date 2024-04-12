import style from './Section.module.css';

export default function Section({
  children,
  typeSection,
  containerSection,
  id,
}) {
  return (
    <section id={id} className={style[typeSection]}>
      <div className={style[containerSection]}>{children}</div>
    </section>
  );
}
