import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import { ThemProvider } from './layouts/components/Header/ThemeContext/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <ThemProvider>
                <App />
            </ThemProvider>
        </GlobalStyles>
    </React.StrictMode>,
);
