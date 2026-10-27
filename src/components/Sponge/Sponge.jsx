import { SpongesType } from '../../helpers/constants.js';
import { ProductButton } from '../ProductButton/ProductButton.jsx';
import css from './Sponge.module.css';

export const Sponge = ({ order, updateOrder }) => {
  console.log(order.sponge, 'order.sponge');
  return (
    <section className={css.container}>
      {SpongesType.map((sponge) => {
        return (
          <ProductButton
            key={sponge.label}
            value={sponge.label}
            label={sponge.description}
            img={sponge.img}
            selected={order.sponge === sponge.label}
            onSelect={() => {
              updateOrder('sponge', sponge.label);
            }}
            variant="large"
          />
        );
      })}
      {order.sponge === 'Biscuit' &&
        order.size !== '8" Round' &&
        order.size !== '10" Round' && (
          <p className={css.errorSize}>
            Please choose a biscuit cake size in the previous step to continue.
          </p>
        )}
      {order.size === '10" Round' && order.sponge !== 'Biscuit' && (
        <p className={css.errorSize}>
          Please choose square cake shape in the previous step to continue.
        </p>
      )}
    </section>
  );
};
