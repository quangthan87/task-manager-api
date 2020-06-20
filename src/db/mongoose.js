const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Invalid password')
//             }
//         }
//     }
// })

// const me = new User({
//     name: 'Quang Than    ',
//     email: 'QUANG@example.com   ',
//     age: 33,
//     password: 'abcd1234'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     }, 
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: 'Node         ',
// })

// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })