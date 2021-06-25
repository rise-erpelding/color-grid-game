import { addFormListener } from '../form/form-handlers';
import { removeNavigation } from '../navigation/navigation-helpers';
import { addSurpriseMeListener } from '../form/surprise-me';
import {
  showForm,
  removeGameElements,
  updateParagraphText,
  resetForm,
} from '../helpers/dom-helpers';
import { disableSubmitButtonUntilColorsPicked } from '../form/color-validator';

const instructionalText = 'Pick your colors to begin or use the Surprise me button below.';

function startApp() {
  removeNavigation();
  removeGameElements();
  showForm();
  updateParagraphText(instructionalText);
  addFormListener();
  addSurpriseMeListener();
}

function restartApp() {
  resetForm();
  disableSubmitButtonUntilColorsPicked();
  startApp();
}

// eslint-disable-next-line import/prefer-default-export
export { startApp, restartApp };
