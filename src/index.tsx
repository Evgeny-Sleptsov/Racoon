import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import './index.scss';

const rootElement = document.getElementById('root');

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, rootElement);
