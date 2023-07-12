import './index.html';
import './index.scss';
import { setupTheme } from './modules/darkTheme';
import { createEventListener } from './modules/createProject';

createEventListener();
setupTheme();
