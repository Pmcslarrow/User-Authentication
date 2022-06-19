// Imports
const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const users = []
let obj = null
let signedIn = false
app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))

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

// When you press the login button
app.post('/login', async (req, resolve) => {
    let loginEmail = req.body.email
    let loginPassword = req.body.password
    let i = 0;
    //Iterate through the length of users. If the email ever matches then break
    for (user of users)
    {
        if (user.email === loginEmail)
        {
            bcrypt.compare(loginPassword, users[i].password, function(err, res) {
                if (res)
                {
                    signedIn = true
                    resolve.redirect('/homepage')
                }
            })
            break
        }
        i++
    }

})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

// When you press the register button
app.post('/register', async (req, res) => {

    let email = req.body.email
    let password = req.body.password

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

app.listen(3000)

