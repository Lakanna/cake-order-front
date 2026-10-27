import { CakeSizeList } from '../../helpers/constants.js';
import { BiscuitCakeSize } from '../../helpers/constants.js';
import { IoIosCheckmark } from 'react-icons/io';
import Biscuit from '../../pictures/biscuit.png';
import css from './CakeSize.module.css';
import { ProductButton } from '../ProductButton/ProductButton.jsx';

export const CakeSize = ({ order, updateOrder }) => {
  return (
    <section className={css.container}>
      {CakeSizeList.map((size) => {
        return (
          <ProductButton
            key={size.size}
            value={size.size}
            label={size.label}
            img={size.img}
            selected={order.size === size.size}
            onSelect={() => {
              updateOrder('size', size.size);
              updateOrder('sponge', '');
            }}
          />
        );
      })}
      <h3 className={css.cakeSizeText}>Looking for a biscuit cake?</h3>
      <p>Our biscuit cakes are available in round shapes only, in two sizes.</p>
      {BiscuitCakeSize.map((biscuit) => {
        return (
          <ProductButton
            key={biscuit}
            value={biscuit}
            img={Biscuit}
            selected={order.size === biscuit && order.sponge === 'Biscuit'}
            onSelect={() => {
              updateOrder('size', biscuit);
              updateOrder('sponge', 'Biscuit');
            }}
          />
        );
      })}
    </section>
  );
};
