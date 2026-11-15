import { CreamTypes, ExtraFilling, Filling } from '../../helpers/constants.js';
import { ProductButton } from '../ProductButton/ProductButton.jsx';
import { SmallBtn } from '../SmallBtn/SmallBtn.jsx';
import css from './IcingFilling.module.css';

export const IcingFilling = ({ order, updateOrder, toggleOrderArray }) => {
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

      <h3 className={css.title}>Extra Filling (additional price)</h3>
      <div className={css.containerFilling}>
        {ExtraFilling.map((filling) => {
          return (
            <SmallBtn
              value={filling}
              order={order.extraFilling}
              key={filling}
              onClick={() => toggleOrderArray('extraFilling', filling)}
            />
          );
        })}
      </div>
    </section>
  );
};
