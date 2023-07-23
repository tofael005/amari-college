import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	updateProfile,
	GoogleAuthProvider,
	signInWithPopup,
	GithubAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const provider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	const handleGithubSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};
	const handleGoogleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};
	const registerUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// const updateName = (name, photo) => {
	// 	return updateProfile(auth.currentUser, {
	// 		displayName: name,
	// 		photoURL: photo,
	// 	});
	// };

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (LoggedInUser) => {
			setUser(LoggedInUser);
			setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);
	const authInfo = {
		loading,
		registerUser,
		user,
		logOut,
		signIn,
		handleGoogleSignIn,
		handleGithubSignIn,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;