import { Context } from "../store/appContext";
import React, { useContext } from "react";

const Vehicles = () => {
	const { store, actions } = useContext(Context);
	console.log(store.vehicles);
	if (store.vehicles == null || store.vehicles == undefined) {
		console.log(<h1>Loading...</h1>);
	} else {
		return (
			<div className="text-center mt-5" style={{ width: "33%", position: "absolute", left: "67%" }}>
				<table className="table table-bordered mt-2 pt-5">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Vehicles</th>
						</tr>
					</thead>
					<tbody className="tbody-dark">
						{store.vehicles.map((e, index) => (
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
export default Vehicles;
