import css from './CustomerDetails.module.css';
import { useState } from 'react';

export const CustomerDetails = ({ order, updateOrder }) => {
  const [errors, setErrors] = useState({});

  const validateName = (value) => {
    if (!value.trim()) return 'Please enter your full name.';
    if (value.trim().length < 3) {
      return 'Name must be at least 3 characters long.';
    }
    return '';
  };

  const validatePhone = (value) => {
    const cleaned = value.replace(/[\s()-]/g, '');

    if (!cleaned) return 'Please enter your phone number.';
    if (!/^\+?[0-9]{7,15}$/.test(cleaned)) {
      return 'Please enter a valid phone number.';
    }
    return '';
  };

  return (
    <section className={css.customerDetails}>
      <h3>
        Please provide your details so we can contact you about your cake order.
      </h3>

      <label>
        <input
          className={css.input}
          type="text"
          placeholder="Full Name"
          value={order.customerFullName}
          onChange={(e) => {
            updateOrder('customerFullName', e.target.value);
            setErrors((prev) => ({
              ...prev,
              name: validateName(e.target.value),
            }));
          }}
        />
        {errors.name && <span className={css.error}>{errors.name}</span>}
      </label>

      <label>
        <input
          className={css.input}
          type="tel"
          placeholder="Phone Number"
          value={order.customerPhone}
          onChange={(e) => {
            updateOrder('customerPhone', e.target.value);
            setErrors((prev) => ({
              ...prev,
              phone: validatePhone(e.target.value),
            }));
          }}
        />
        {errors.phone && <span className={css.error}>{errors.phone}</span>}
      </label>
    </section>
  );
};
{
  /* <div className={css.optionsContainer}>
        <p>Want to save your details for next time?</p>
        {[
          { action: 'Log in', path: '/login', variant: 'primary' },
          {
            action: 'Create an account',
            path: '/register',
            variant: 'secondary',
          },
          { action: 'Continue as guest', path: '/guest', variant: 'tertiary' },
        ].map((option) => (
          <button
            key={option.action}
            className={`${css.optionButton} ${css[option.variant]}`}
            type="button"
            onClick={() => console.log(`Selected option: ${option.action}`)}
          >
            {option.action}
          </button>
        ))}
      </div> */
}
