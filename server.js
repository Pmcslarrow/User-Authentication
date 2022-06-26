// Imports
import express from 'express'
import * as bcrypt from 'bcrypt'
import alert from 'alert'
const users = []
const app = express()
let signedIn = false
app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getDatabase, ref, set, onValue } from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyCwts7Rtk62UnacEv_j-0dhI5NNw8wCE9k",
    authDomain: "user-authentication-75016.firebaseapp.com",
    projectId: "user-authentication-75016",
    storageBucket: "user-authentication-75016.appspot.com",
    messagingSenderId: "513838819682",
    appId: "1:513838819682:web:6a026d1fa86ab673b8a43b"
  };
const application = initializeApp(firebaseConfig);
const fireStore = getFirestore(application)


// Adds a new tree in the realtime database inside 'users'
function writeUserData(userId, name, email, password) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId + '/'), {
        name: name,
        email: email,
        password: password
    })
}

function parseEmail( email ) {
    let user2 = email.replace('@', '')
    let userId = user2.replace('.', '')
    return userId
}


/* When you try to access the homepage it checks if you are signed in first to allow access */
app.get('/homepage', (req, res) => {
    if (signedIn)
    {
        res.render('homepage.ejs')
    } else {
        res.render('login.ejs')
    }
})

app.post('/signout', (req, res) => {
    signedIn = false
    res.render('login.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

/* When you press the login button */
app.post('/login', async (req, resolve) => {
    const db = getDatabase()
    let attemptEmail = req.body.email
    let attemptPassword = req.body.password
    let userId = parseEmail(attemptEmail)
    let userRef = ref(db, 'users/')
    onValue(userRef, (snapshot) => {
        const data = snapshot.val()
        try {
            let account = data[userId]
            let hashedPassword = account.password
            bcrypt.compare(attemptPassword, hashedPassword, function (err, res) {
                if (res) {
                    signedIn = true
                    resolve.redirect('/homepage')
                } else {
                    resolve.redirect('/login')
                    alert("Email or Password was incorrect")
                }
                
            })
        } catch {
            console.log("bcrypt error [-] ")
        }
    })

})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

/* When you press the register button */
app.post('/register', async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        let user = req.body.email
        let userId = parseEmail(user)
        writeUserData(userId, req.body.name, req.body.email, hashedPassword)
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
})

app.listen(3000)

