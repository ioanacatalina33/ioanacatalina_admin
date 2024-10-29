import React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyleSheetManager } from 'styled-components';
import { StyledTarget } from 'styled-components/dist/types';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <App />
        </StyleSheetManager>
    </React.StrictMode>
);

function shouldForwardProp(propName: string, target: StyledTarget<'web'>) {
    if (typeof target === 'string') {
        // For HTML elements, forward the prop if it is a valid HTML attribute
        return isPropValid(propName);
    }
    // For other elements, forward all props
    return true;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
