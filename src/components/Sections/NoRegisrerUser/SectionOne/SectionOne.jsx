import Section from 'components/SectionWraps/Sections/Section';
// import FormData from 'components/Forms/FormDataBindingNoReg/FormaData/FormDataBinding';
import style from './SectionOne.module.css';

export default function SectionOne() {
  return (
    <>
      <Section
        typeSection={''}
        containerSection={'container'}
        id="userContacts"
      >
        <h2 className={style.titleSectionOne}>Обміняти криптовалюту</h2>
        <div className={style.userData}>{/* <FormData /> */}</div>
      </Section>
    </>
  );
}
