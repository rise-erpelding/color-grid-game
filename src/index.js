import { initSandboxMode } from './flows/sandbox-mode';
import { addButtonListeners } from './flows/mode-handlers';

initSandboxMode(); // entry point into app
addButtonListeners(); // enables navigation
