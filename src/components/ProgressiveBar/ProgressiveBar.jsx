import { StepsList } from '../../helpers/constants';
import css from './ProgressiveBar.module.css';

export const ProgressiveBar = ({ currentStep }) => {
  // const StepsList = [
  //   { step: 1, label: "Collection Date" },
  //   { step: 2, label: "Cake Size" },
  //   { step: 3, label: "Sponge" },
  //   { step: 4, label: "Icing & Filling" },
  //   { step: 5, label: "Design" },
  //   { step: 6, label: "Review Order" },
  // ];
  return (
    <div className={css.progressiveBar}>
      {StepsList.map((step, index) => {
        const status =
          index + 1 < currentStep
            ? css.completed
            : index + 1 === currentStep
              ? css.active
              : css.pending;
        return (
          <div key={index} className={`${css.step} ${status}`}>
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
