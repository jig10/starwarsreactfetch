import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Planets = () => {
	const { store, actions } = useContext(Context);
	console.log(store.planets);
	if (store.planets == null || store.planets == undefined) {
		console.log(<h1>Loading...</h1>);
	} else {
		return (
			<div className="text-center mt-5" style={{ width: "33%", position: "absolute" }}>
				<table className="table table-bordered mt-2 pt-5">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Planet</th>
						</tr>
					</thead>
					<tbody className="tbody-dark">
						{store.planets.map((e, index) => (
							<tr key={index}>
								<td>{e.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
};
export default Planets;
