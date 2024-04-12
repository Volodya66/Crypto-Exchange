import Section from '../../SectionWrapper/Section';

import style from './SectionOne.module.css';
import FormBinding from '../../../Forms/FormDataBindingNoReg/Form/FormBinding';

export default function SectionOne() {
  return (
    <>
      <Section
        typeSection={''}
        containerSection={'container'}
        id="userContacts"
      >
        <h2 className={style.titleSectionOne}>Обміняти криптовалюту</h2>
        <div className={style.userData}>
          <FormBinding />
        </div>
      </Section>
    </>
  );
}
