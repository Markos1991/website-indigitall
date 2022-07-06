import React from "react";
import MyHeader from "./MyHeader";
import HomeContent from "./HomeContent";

import "./MyHeader.css";
import "./HomeContent.css";
import "./ProtectedArea.css";

const content = (<h1>PRIVATE AREA</h1>);

export default function ProtectedArea () {
		return (
			<div className="component-protectedArea">
				<MyHeader logout='1'></MyHeader>
				<div style={{background: 'Teal', height: '1%'}}></div>
				<HomeContent homeContent={content}></HomeContent>
			</div>
		);
}