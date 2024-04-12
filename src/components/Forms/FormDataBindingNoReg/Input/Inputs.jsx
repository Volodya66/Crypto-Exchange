import { Field } from 'formik';

import style from './Inputs.module.css';

import Button from '../../../Button/Button';
import { TbArrowsExchange } from 'react-icons/tb';

export default function InputBinding() {
  return (
    <div className={style.container}>
      <div className={style.inputsWrapper}>
        <div className={style.firstContainer}>
          <p className={style.text}>Ви віддаєте</p>

          <div className={style.wrapperInpDiv}>
            <label className={style.labelGet} htmlFor="getMoneys1">
              {/* <p className={css.text}>Ви віддаєте</p> */}
              <Field
                placeholder="0"
                className={style.inpGet}
                type="text"
                name="getMoneys1"
                required
              />
            </label>

            <label className={style.labelGet} htmlFor="getMoneys2">
              <Field
                placeholder="ETH"
                className={style.inpGet}
                type="text"
                name="getMoneys2"
                required
              />
            </label>
          </div>
        </div>

        <div className={style.reveranse}>
          <Button styles={'btnReverans'}>
            <TbArrowsExchange className={style.arrow} />
          </Button>
        </div>

        <div className={style.firstContainer}>
          {/* <label className={css.labelGet} htmlFor="giveMoney1">
                // <p className={css.text}>Ви отримуєте</p>
                <Field placeholder='0' className={css.inpGet} type="text" name="giveMoney1" required />
                </label> */}
          <p className={style.text}>Ви отримуєте</p>
          <div className={style.wrapperInpDiv}>
            <p className={style.textGet}>1</p>

            <label className={style.labelGet} htmlFor="giveMoney2">
              <Field
                placeholder="USDT"
                className={style.inpGet}
                type="text"
                name="giveMoney2"
                required
              />
            </label>
          </div>
        </div>
      </div>

      <div className={style.wrapperUserDataInp}>
        <label className={style.label} htmlFor="telegramNick">
          <p className={style.textUserData}>Нік в телеграмі</p>
          <Field
            placeholder="@Івась"
            className={style.inp}
            type="text"
            name="telegramNick"
            required
          />
        </label>
        <label className={style.label} htmlFor="userNumber">
          <p className={style.textUserData}>Номер телефону</p>
          <Field
            className={style.inp}
            placeholder="+38000 000 00 00"
            type="tel"
            name="userNumber"
            required
          />
        </label>
      </div>
    </div>
  );
}
