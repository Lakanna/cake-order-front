import {
  CakeSides,
  DecorOnTop,
  messageColours,
  TopIcing,
} from '../../helpers/constants.js';
import { ProductButton } from '../ProductButton/ProductButton.jsx';
import { SmallBtn } from '../SmallBtn/SmallBtn.jsx';
import css from './Decoration.module.css';

export const Decoration = ({ order, updateOrder, toggleOrderArray }) => {
  return (
    <section>
      <h2 className={css.title}>Top Decoration</h2>
      <h3>Choose your top icing</h3>
      <div className={css.noteBox}>
        {TopIcing.map((icing) => {
          return (
            <SmallBtn
              key={icing}
              value={icing}
              order={order.topIcing}
              onClick={() => updateOrder('topIcing', icing)}
            />
          );
        })}
      </div>
      {order.topIcing === 'Coloured Buttercream' && (
        <div className={css.messageField}>
          <h4>Colour of buttercream on top</h4>
          <input
            id="colourButtercreamOnTop"
            type="text"
            className={`${css.input} ${css.yellow}`}
            placeholder="your colour"
            value={order.colourButtercreamOnTop}
            onChange={(e) =>
              updateOrder('colourButtercreamOnTop', e.target.value)
            }
            maxLength={50}
          />
        </div>
      )}

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

      <div className={css.noteBox}>
        <h4>Please note:</h4>
        <p>
          If your cake is covered in fresh cream, the message can only be
          written in chocolate.
        </p>
        <p>
          If your cake is covered in buttercream, you can choose your preferred
          message colour.
        </p>
      </div>

      {order.topIcing?.toLowerCase().includes('buttercream') && (
        <>
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
                onChange={(e) =>
                  updateOrder('customWritingColour', e.target.value)
                }
                maxLength={40}
              />
            )}
          </div>
        </>
      )}

      <h3 className={css.text}>Decor on top</h3>
      <div className={css.buttonBox}>
        {DecorOnTop.map((decor) => {
          return (
            <SmallBtn
              key={decor}
              value={decor}
              order={order.decorations}
              // checked={order.decorations.includes(decor)}
              onClick={() => toggleOrderArray('decorations', decor)}
            />
          );
        })}
      </div>

      <h2 className={css.title}>Sides Decoration</h2>
      <h3>Choose your sides icing</h3>
      <div className={css.noteBox}>
        {TopIcing.map((icing) => {
          return (
            <SmallBtn
              key={icing}
              value={icing}
              order={order.sidesIcing}
              onClick={() => updateOrder('sidesIcing', icing)}
            />
          );
        })}
      </div>

      {order.sidesIcing === 'Coloured Buttercream' && (
        <div className={css.messageField}>
          <h4>Colour of buttercream on sides</h4>
          <input
            id="colourButtercreamOnSides"
            type="text"
            className={`${css.input} ${css.yellow}`}
            placeholder="your colour"
            value={order.colourButtercreamOnSides}
            onChange={(e) =>
              updateOrder('colourButtercreamOnSides', e.target.value)
            }
            maxLength={50}
          />
        </div>
      )}

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

      <h3 className={css.text}>Anything else you'd like us to know?</h3>
      <textarea
        className={css.input}
        placeholder="Add any other details or special requests here..."
        value={order.additionalNotes}
        onChange={(e) => updateOrder('additionalNotes', e.target.value)}
        maxLength={200}
      />
    </section>
  );
};
