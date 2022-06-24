import React from 'react';
import './App.css';
import {RoutesList} from "./routes/RoutesList";
import {Header} from "./Header/Header";
import ComponentsDemo from "../../features/demo/ComponentsDemo";
import {Preloader} from "./common/Preloader/Preloader";


function App() {
    return (
        <div>
            <Header/>
            <Preloader/>
            <RoutesList/>
            <ComponentsDemo/>
        </div>
    )
}

export default App
