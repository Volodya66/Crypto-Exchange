import css from './Button.module.css';

export default function Button({
  type = 'button',
  id,
  styles,
  onClick,
  children,
}) {
  // console.log('onClick: ', onClick);

  return (
    <>
      <button className={css[styles]} id={id} onClick={onClick} type={type}>
        {children}
      </button>
    </>
  );
}
