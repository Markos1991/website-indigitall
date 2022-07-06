import React from "react";
import MyHeader from "./MyHeader";
import HomeContent from "./HomeContent";
import LoginForm from "./LoginForm";

import "./MyHeader.css";
import "./HomeContent.css";
import "./Login.css";



export default function Login () {
		let content = <LoginForm></LoginForm>;
		return (
			<div className="component-login">
				<MyHeader></MyHeader>
				<div style={{background: 'Teal', height: '1%'}}></div>
				<HomeContent loginContent={content}></HomeContent>
			</div>
		);
}