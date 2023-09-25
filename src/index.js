import React, { createContext } from "react"
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import DatabasesStore from './store/DatabasesStore.js'
import ItBasicsStore from './store/ItBasicsStore.js'
import NetworkingStore from './store/NetworkingStore.js'
import ProgrammingStore from './store/ProgrammingStore.js'
import ProjectManagementStore from './store/ProjectManagementStore.js'
import SecurityStore from './store/SecurityStore.js'
import WebTechStore from './store/WebTechStore.js'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Context.Provider value={{
            databases: new DatabasesStore(),
            itbasics: new ItBasicsStore(),
            networking: new NetworkingStore(),
            programming: new ProgrammingStore(),
            projectmanagement: new ProjectManagementStore(),
            security: new SecurityStore(),
            webtech: new WebTechStore()
        }}>
            <App />
        </Context.Provider>
    </Router>
)