/*! portfolio v1.0.0 | (c) 2020  | ISC License | git+https://github.com/Sebsterio/portfolio.git */
(function () {
	const config = {
		apiKey: "AIzaSyCIkTYpuhxmnXzLw5N2CyK0g1mxeH3a_Vc",
		authDomain: "portfolio-278211.firebaseapp.com",
		databaseURL: "https://portfolio-278211.firebaseio.com",
		projectId: "portfolio-278211",
		storageBucket: "portfolio-278211.appspot.com",
		messagingSenderId: "464226183275",
		appId: "1:464226183275:web:8a91a57a79e9edd633292e",
		measurementId: "G-46EFDV77BS",
	};

	// Initialize Firebase
	firebase.initializeApp(config);
	firebase.analytics();

	console.log(firebase.analytics);

	// ------------------------------- Database ------------------------------------

	// const db = firebase.firestore();

	// function updateCollection(profile, data, cb) {
	// 	if (!authenticateUser()) return;
	// 	const profileToLoad = profile ? profile : "wuitw";
	// 	db.collection("profiles")
	// 		.doc(profileToLoad)
	// 		.set({ links: data }) // Note: can't update individual fields, only the whole doc
	// 		.then((function () {
	// 			localStorage.setItem("auto-backup", JSON.stringify(data));
	// 			if (cb) cb();
	// 		}))
	// 		.catch((function (error) {
	// 			alert(
	// 				"Dabase Error. It's not you, it's me. " +
	// 					"Text Seb 07415880620 on Whatsapp with a screenshot of the below: \n\n" +
	// 					error
	// 			);
	// 		}));
	// }

	// function fetchCollection(profile, cb) {
	// 	const profileToLoad = profile ? profile : "wuitw";
	// 	db.collection("profiles")
	// 		.doc(profileToLoad)
	// 		.get()
	// 		.then((doc) => {
	// 			if (doc.exists) {
	// 				const links = doc.data().links;
	// 				cb(links);
	// 			} else {
	// 				alert("A new house has been built!");
	// 			}
	// 		})
	// 		.catch((function (error) {
	// 			alert(
	// 				"Database Sync Error. Showing locally saved media. Refresh page to try again." +
	// 					"If the problem persists, show this to Seb:\n\n" +
	// 					error
	// 			);
	// 			const dataBackup = JSON.parse(localStorage.getItem(key));
	// 			cb(dataBackup);
	// 		}));
	// }
	// // -------------------------- module exports -----------------------------

	// window.houseApp.firestore = {
	// 	update: updateCollection,
	// 	fetch: fetchCollection,
	// };
})();
