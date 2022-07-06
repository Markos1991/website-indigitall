import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup1 from "./components/Signup1";
import Signup2 from "./components/Signup2";
import Signup3 from "./components/Signup3";
import ProtectedArea from "./components/ProtectedArea";

import "./App.css";

export default class App extends React.Component {

	render() {
		return (
		<div className="component-app">
			<BrowserRouter>
					<Routes style={{width:'100%', height:'100%'}}>
						<Route path="/" element={<Home/>} />
						<Route path="/Home" element={<Home/>} />
						<Route path="/Login" element={<Login/>}/>
						<Route path="/Signupstep1" element={<Signup1/>} />
						<Route path="/Signupstep2" element={<Signup2/>} />
						<Route path="/Signupstep3" element={<Signup3/>} />
						<Route path="/ProtectedArea" element={<ProtectedArea />} />
					</Routes>			
			</BrowserRouter>
		</div>
		);
	}
}