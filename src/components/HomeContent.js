import React from "react";

import "./HomeContent.css";

export default function HomeContent (props){
		return (
			<div className="component-home-content">
				{props.homeContent}{props.loginContent}
			</div>
		);

}

