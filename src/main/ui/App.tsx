import React from 'react';
import './App.css';
import {RoutesList} from "./routes/RoutesList";
import {Header} from "./Header/Header";
import ComponentsDemo from "../../features/demo/ComponentsDemo";


function App() {
    return (
        <div>
            <Header/>
            <RoutesList/>
            <ComponentsDemo/>


        </div>
    )
}

export default App
