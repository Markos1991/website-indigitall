import React from "react";
import MyHeader from "./MyHeader";
import HomeContent from "./HomeContent";
import SignupStp1 from "./SignupStp1";

import "./MyHeader.css";
import "./HomeContent.css";
import "./Signup.css";

export default function Signup1 () {

	let content = <SignupStp1></SignupStp1>;
	return (
		<div className="component-signup">
			<MyHeader></MyHeader>
			<div style={{background: 'Teal', height: '1%'}}></div>
			<HomeContent loginContent={content}></HomeContent>
		</div>
	);
}