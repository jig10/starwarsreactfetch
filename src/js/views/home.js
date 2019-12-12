import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Planets from "../component/planets";
import People from "../component/people";
import Vehicles from "../component/vehicles";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.planets);
	if (store.planets == null || store.planets == undefined) {
		console.log(<h1>Loading...</h1>);
	} else {
		return (
			<div>
				<Planets />
				<People />
				<Vehicles />
			</div>
		);
	}
};
