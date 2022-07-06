import React from "react";
import ButtonPanel from "./ButtonPanel";

import "./MyHeader.css";
import "./ButtonPanel.css";

export default function MyHeader (props){
		return (
			<div className="component-myHeader">
				<div style={{display:'flex', width:'30%', justifyContent:'flex-start', margin: '0 10px 0 20px'}}><font size='9'>INDIGITALL</font></div>
				<ButtonPanel logout={props.logout}></ButtonPanel>
			</div>
		);
}