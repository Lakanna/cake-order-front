import { CreamTypes, Filling } from '../../helpers/constants.js';
import { ProductButton } from '../ProductButton/ProductButton.jsx';
import css from './IcingFilling.module.css';

export const IcingFilling = ({ order, updateOrder }) => {
  return (
    <section>
      <h3 className={css.title}>Choose your icing</h3>
      <div className={css.container}>
        {CreamTypes.map((cream) => {
          return (
            <ProductButton
              key={cream.label}
              value={cream.label}
              label={cream.description}
              img={cream.img}
              selected={order.icing === cream.label}
              onSelect={() => {
                updateOrder('icing', cream.label);
              }}
              variant="default"
            />
          );
        })}
      </div>
      <h3 className={css.title}>Add jam filling?</h3>
      <div className={css.container}>
        {Filling.map((filling) => {
          return (
            <ProductButton
              key={filling.label}
              value={filling.label}
              label=""
              img={filling.img}
              selected={order.jam === filling.label}
              onSelect={() => {
                updateOrder('jam', filling.label);
              }}
              variant="default"
            />
          );
        })}
      </div>
    </section>
  );
};
