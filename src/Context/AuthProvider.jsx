// import { createContext, useContext, useEffect, useState } from "react";
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import app from "../firebase/firebase.config";

// const CreateAuth = createContext();

// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [loading, setLoading] = useState(true)
//     const [user, setUser] = useState(null)

//     const createUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signIn = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const googleProvider = new GoogleAuthProvider();
//     const signInGoogle = () => {
//         setLoading(true)
//         return signInWithPopup(auth, googleProvider);

//     }

//     const logOut = () => {
//         setLoading(true)
//         return signOut(auth)
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser)
//             setLoading(false)
//         })
//         return () => {
//             return unsubscribe()
//         }
//     }, [])

//     const authData = {
//         user,
//         loading,
//         createUser,
//         signIn,
//         logOut,
//         signInGoogle
//     }

//     return <CreateAuth.Provider value={authData}>
//         {children}
//     </CreateAuth.Provider>
// }

// const useAuth = () => {
//     return useContext(CreateAuth);
// }

// export { AuthProvider, useAuth }