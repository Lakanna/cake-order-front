import {
  CakeSides,
  DecorOnTop,
  messageColours,
} from '../../helpers/constants.js';
import { ProductButton } from '../ProductButton/ProductButton.jsx';
import css from './Decoration.module.css';

export const Decoration = ({ order, updateOrder, toggleOrderArray }) => {
  return (
    <section>
      <h3>Writing on top?</h3>
      <div className={css.messageField}>
        <input
          id="writingOnTop"
          type="text"
          className={css.input}
          placeholder="e.g. Happy Birthday Emma"
          value={order.writingOnTop}
          onChange={(e) => updateOrder('writingOnTop', e.target.value)}
          maxLength={50}
        />

        <p className={css.hint}>Up to 50 characters.</p>
      </div>

      <h3 className={css.text}>Colour of writing?</h3>

      <div className={css.colourField}>
        <div className={css.colourOptions}>
          {messageColours.map((colour) => (
            <button
              key={colour.name}
              type="button"
              className={`${css.colourOption} ${
                order.colourOfWriting === colour.name ? css.selected : ''
              }`}
              onClick={() => updateOrder('colourOfWriting', colour.name)}
              aria-label={colour.name}
              aria-pressed={order.colourOfWriting === colour.name}
            >
              <span
                className={css.colourCircle}
                style={{ backgroundColor: colour.value }}
              >
                {order.colourOfWriting === colour.name && (
                  <span className={css.check}>✓</span>
                )}
              </span>

              <span className={css.colourName}>{colour.name}</span>
            </button>
          ))}
        </div>

        <label className={css.customOption}>
          <input
            type="radio"
            name="messageColour"
            checked={order.colourOfWriting === 'Custom'}
            onChange={() => updateOrder('colourOfWriting', 'Custom')}
          />
          I'd like a different colour
        </label>

        {order.colourOfWriting === 'Custom' && (
          <input
            type="text"
            className={css.customInput}
            placeholder="Please specify your preferred colour..."
            value={order.customWritingColour}
            onChange={(e) => updateOrder('customWritingColour', e.target.value)}
            maxLength={40}
          />
        )}
      </div>

      <h3 className={css.text}>Decor on top</h3>
      <div className={css.buttonBox}>
        {DecorOnTop.map((decor) => {
          return (
            <button
              key={decor}
              className={`${css.decorBtn} ${order.decorations.includes(decor) ? css.selected : ''} `}
              // checked={order.decorations.includes(decor)}
              onClick={() => toggleOrderArray('decorations', decor)}
            >
              {decor}
            </button>
          );
        })}
      </div>

      <h3 className={css.text}>Sides of the cake</h3>
      <div className={css.buttonBox}>
        {CakeSides.map((side) => {
          return (
            <ProductButton
              key={side.name}
              value={side.name}
              img={side.img}
              selected={order.sides === side.name}
              onSelect={() => updateOrder('sides', side.name)}
            />
          );
        })}
      </div>
    </section>
  );
};
