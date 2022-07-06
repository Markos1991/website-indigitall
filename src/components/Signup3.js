import React from "react";
import MyHeader from "./MyHeader";
import HomeContent from "./HomeContent";
import SignupStp3 from "./SignupStp3";

import "./MyHeader.css";
import "./HomeContent.css";
import "./Signup.css";

export default function Signup3 () {

	let content = <SignupStp3></SignupStp3>;
	return (
		<div className="component-signup">
			<MyHeader></MyHeader>
			<div style={{background: 'Teal', height: '1%'}}></div>
			<HomeContent loginContent={content}></HomeContent>
		</div>
	);
}