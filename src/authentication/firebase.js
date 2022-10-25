import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyB9z-LDfCoRJBRTCykPd-01z3BNqXATt90',
    authDomain: 'profound-hearth-366016.firebaseapp.com',
    projectId: 'profound-heart-336016',
    storageBucket: 'profound-hearth-366016.appspot.com',
    appId: '1:147604325032:web:0c19a4e6674fc3ac62f89d',
    measurementId: 'G-R4N0BVYVZZ',
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const register = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return alert(response.user, ' Berhasil Register');
    } catch (error) {
        console.log(error.message);
    }
};

const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log('User berhasil login: ', userCredential.user);
    } catch (error) {
        console.log(error);
    }
};

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
    }
};

export { auth, register, login, logout };
