import { addFormListener } from '../form/form-handlers';
import { removeNavigation } from '../navigation/navigation-helpers';
import {
  showForm,
  removeGameElements,
  updateParagraphText,
  resetForm,
} from '../helpers/dom-helpers';

function startApp() {
  removeNavigation();
  removeGameElements();
  showForm();
  updateParagraphText('Pick your colors to begin.');
  addFormListener();
}

function restartApp() {
  resetForm();
  startApp();
}

// eslint-disable-next-line import/prefer-default-export
export { startApp, restartApp };
