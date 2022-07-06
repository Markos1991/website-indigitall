import React from "react";
import MyHeader from "./MyHeader";
import HomeContent from "./HomeContent";

import "./MyHeader.css";
import "./HomeContent.css";
import "./Home.css";

const content = (<h1>HOME</h1>);

export default function Home () {
		return (
			<div className="component-home">
				<MyHeader></MyHeader>
				<div style={{background: 'Teal', height: '1%'}}></div>
				<HomeContent homeContent={content}></HomeContent>
			</div>
		);
}