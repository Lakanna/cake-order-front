import { OrderLabels } from '../../helpers/constants.js';
import css from './ReviewOrder.module.css';

export const ReviewOrder = ({ order }) => {
  return (
    <section>
      <h3 className={css.title}>Review Your Order</h3>
      <div className={css.orderSummary}>
        {Object.entries(order).map(([key, value]) => {
          console.log(Object.entries(order));
          if (
            value === '' ||
            value === null ||
            value === undefined ||
            (Array.isArray(value) && value.length === 0) ||
            (key === 'price' && value === 0)
          ) {
            return null;
          }

          let displayValue = value;

          if (value instanceof Date) {
            displayValue = value.toLocaleDateString('en-IE');
          } else if (Array.isArray(value)) {
            displayValue = value.join(', ');
          }
          return (
            <div className={css.summaryRow} key={key}>
              <span className={css.summaryLabel}>
                {OrderLabels[key] || key}:
              </span>
              <span className={css.summaryValue}>{displayValue}</span>
            </div>
          );
        })}
      </div>
      <h4 className={css.title}>Important: Advance Payment Required</h4>
      <div className={css.orderSummary}>
        <p>All cake orders over €40 must be paid for in advance.</p>
        <p>
          If your cake order exceeds €40, please visit our store at least one
          day before your collection date to make the payment. Once paid, please
          bring your receipt to the bakery so we can begin preparing your order.
        </p>
        <p>Thank you for your understanding!</p>
      </div>
    </section>
  );
};
