import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyD6_EHbAEL7TtXIJjhmVHafpvpxWhSrB9Q",
    authDomain: "apibase-a242d.firebaseapp.com",
    projectId: "apibase-a242d",
    storageBucket: "apibase-a242d.appspot.com",
    messagingSenderId: "760551311842",
    appId: "1:760551311842:web:c016f52f24cf7f2fdad1bb"
})

const db = firebase.firestore()

export default {
    createUser: async (user) => {
        await db.collection("users").add({
            name: user.name,
            email: user.email
        }).then(docRef => console.log("Doc ref: ", docRef.id))
        .catch(error => console.log("Error add doc:", error))
    }
}

