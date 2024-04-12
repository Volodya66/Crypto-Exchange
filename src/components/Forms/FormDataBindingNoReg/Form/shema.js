import * as Yup from 'yup';

const schema = Yup.object().shape({
  telegramNick: Yup.string().required('Required'),
  userNumber: Yup.number().required('Required'),
  getMoneys1: Yup.number().required('Required'),
  getMoneys2: Yup.string().required('Required'),
  // giveMoney1:Yup.number().required('Required'),
  giveMoney2: Yup.string().required('Required'),
});

export { schema };
