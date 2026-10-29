import { PiCalendarDotsLight } from 'react-icons/pi';
import css from './StartOrder.module.css';

export const StartOrder = () => {
  return (
    <section>
      <h1 className={css.pageTitle}>Order your cake</h1>
      <p>Let's create something special!</p>
      <p>Follow the steps to customize your cake.</p>
      <div className={css.picture}></div>
      <div className={css.calendarBox}>
        <PiCalendarDotsLight className={css.calendarIcon} />
        <div className={css.text}>
          <p>
            <span className={css.calendarSpan}>
              Please allow at least 2 calendar days
            </span>{' '}
            for preparation.
          </p>
          <p>
            Earliest collection time: 10:00 AM (from the day after tomorrow)
          </p>
        </div>
      </div>{' '}
    </section>
  );
};
