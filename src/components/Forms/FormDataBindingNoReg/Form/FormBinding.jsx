import Notiflix from 'notiflix';

import { Formik, Form } from 'formik';
import { schema } from './shema';

// import InputData from '../InputsData/InputsData';
import InputBinding from '../Input/Inputs';
import Button from 'components/Button/Button';
import css from './FormBinding.module.css';

export default function FormBinding() {
  const handleSubmit = (values, action) => {
    const { getMoneys1, getMoneys2, giveMoney2, telegramNick, userNumber } =
      values;
    if (
      !telegramNick ||
      !userNumber ||
      !getMoneys1 ||
      !getMoneys2 ||
      !giveMoney2
    ) {
      Notiflix.Notify.info(
        'Введіть всі дані, щоб наші працівники мали змогу контактувати з вами'
      );
    }

    const userOrder = {
      telegramNick,
      userNumber,

      userGivesAmount: getMoneys1,
      nameCryptocurrencyGives: getMoneys2,
      // userGetAmount :giveMoney1,
      nameCryptocurrencyGet: giveMoney2,
    };

    console.log(userOrder);
    Notiflix.Notify.success(
      'Замовлення додано в обробку! Очікуйте сповіщення!'
    );
    action.resetForm();
  };

  return (
    <>
      <Formik
        // className={css.form}
        validationSchema={schema}
        initialValues={{
          telegramNick: '',
          userNumber: '',
          getMoneys1: '',
          getMoneys2: '',
          // giveMoney1: "",
          giveMoney2: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.forma} autoComplete="off">
          <InputBinding />

          <Button styles={'btnAddDataUser'} type={'submit'}>
            Створити заявку
          </Button>
        </Form>
      </Formik>
    </>
  );
}
