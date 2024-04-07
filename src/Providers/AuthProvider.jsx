/** @format */

import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	// create user
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// sign in user
	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// use log out
	const logOut = () => {
		return signOut(auth);
	};
	// set onAuthStateChanged
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log("current user in authSateChange", currentUser);
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
        loading,
		createUser,
		signIn,
		logOut,
        
	};

	return (
		<>
			<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
		</>
	);
};

export default AuthProvider;
