import { StepsList } from '../../helpers/constants';
import css from './ProgressiveBar.module.css';

export const ProgressiveBar = ({ currentStep, onClick }) => {
  return (
    <div className={css.progressiveBar}>
      {StepsList.map((step, index) => {
        const status =
          index + 1 < currentStep
            ? css.completed
            : index + 1 === currentStep
              ? css.active
              : css.pending;

        const destStep = index + 1;

        return (
          <button
            type="button"
            key={index}
            className={`${css.step} ${status}`}
            onClick={() => onClick(destStep)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
