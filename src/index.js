import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import { ThemProvider } from './layouts/components/Header/ThemeContext/ThemeContext';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles>
                <ThemProvider>
                    <App />
                </ThemProvider>
            </GlobalStyles>
        </Provider>
    </React.StrictMode>,
);
