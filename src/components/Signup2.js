import React from "react";
import MyHeader from "./MyHeader";
import HomeContent from "./HomeContent";
import SignupStp2 from "./SignupStp2";

import "./MyHeader.css";
import "./HomeContent.css";
import "./Signup.css";

export default function Signup2 () {

	let content = <SignupStp2></SignupStp2>;
	return (
		<div className="component-signup">
			<MyHeader></MyHeader>
			<div style={{background: 'Teal', height: '1%'}}></div>
			<HomeContent loginContent={content}></HomeContent>
		</div>
	);
}