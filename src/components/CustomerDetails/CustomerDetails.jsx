import css from './CustomerDetails.module.css';

export const CustomerDetails = ({ order, updateOrder }) => {
  return (
    <section className={css.customerDetails}>
      <h3>
        Please provide your details so we can contact you about your cake order.
      </h3>

      <label key="FullName">
        <input
          className={css.input}
          type="text"
          placeholder="Full Name"
          value={order.customerFullName}
          onChange={(e) => updateOrder('customerFullName', e.target.value)}
        />
      </label>

      <label key="Phone">
        <input
          className={css.input}
          type="tel"
          placeholder="Phone Number"
          value={order.customerPhone}
          onChange={(e) => updateOrder('customerPhone', e.target.value)}
        />
      </label>
      <div className={css.optionsContainer}>
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
      </div>
    </section>
  );
};
