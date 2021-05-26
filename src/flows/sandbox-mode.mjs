import { addFormListener } from '../form/form-handlers';
import {
  showForm,
  removeGameElements,
} from '../helpers/dom-helpers';

function initSandboxMode() {
  removeGameElements();
  showForm();
  addFormListener();
}

// eslint-disable-next-line import/prefer-default-export
export { initSandboxMode };
