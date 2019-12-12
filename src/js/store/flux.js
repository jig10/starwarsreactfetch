const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const url = "https://swapi.co/api/planets";
				fetch(url)
					.then(res => res.json())
					.then(data => {
						console.log("string", data), setStore({ planets: data.results });
					});
			},
			loadPeople: () => {
				const url = "https://swapi.co/api/people";
				fetch(url)
					.then(res => res.json())
					.then(data => {
						console.log("string", data), setStore({ people: data.results });
					});
			},
			loadVehicles: () => {
				const url = "https://swapi.co/api/vehicles";
				fetch(url)
					.then(res => res.json())
					.then(data => {
						console.log("string", data), setStore({ vehicles: data.results });
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
