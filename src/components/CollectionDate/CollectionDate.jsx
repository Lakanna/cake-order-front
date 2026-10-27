import { CollectionTimeList } from '../../helpers/constants.js';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import css from './CollectionDate.module.css';
// import { useState } from 'react';

export const CollectionDate = ({ order, updateOrder }) => {
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

  return (
    <section>
      <p>Select The date you'd like to collect your cake from the store.</p>
      <div className={css.calendarContainer}>
        <Calendar
          className={css.calendar}
          calendarType="gregory"
          minDate={dayAfterTomorrow}
          onChange={(date) => {
            updateOrder('collectionDate', date);
          }}
          value={order.collectionDate}
        />
      </div>
      <p>
        <b>Select a time</b> (from 10:00 AM)
      </p>
      <div className={css.timeContainer}>
        {CollectionTimeList.map((time) => {
          return (
            <button
              key={time}
              type="button"
              className={
                order.collectionTime === time ? css.selectedTime : css.timeBtn
              }
              onClick={() => {
                updateOrder('collectionTime', time);
              }}
            >
              {time}
            </button>
          );
        })}
      </div>
      <p>
        Need to collect your cake a little later? No problem! Just pop over to
        Customer Service, and they’ll be happy to get your cake for you, even if
        the bakery team has already finished for the day. 😊
      </p>
    </section>
  );
};
