const sequelize = require('sequelize');
const db = require('../models');

const subforums = [
    {category:"Markdown"},
    {category:"Miscellaneous"}
];

const users = [
    {
        email:"harris@harris.com",
        username:"Harris",
        password:"12345"

    },
    {
        email:"zach@zach.com",
        username:"Zach",
        password:"12345"
    },
    {
        email:"erick@erick.com",
        username:"Erick",
        password:"12345"
    },
    {
        email:"rich@rich.com",
        username:"Rich",
        password:"12345"
    }
]

const threads = [
    {
        title:"Introduction",
        UserId:1,
        SubforumId:1
    },
    {
        title:"For Fun",
        UserId:2,
        SubforumId:1
    },
    {
        title:"Introduction",
        UserId:1,
        SubforumId:2
    },
    {
        title:"For Fun",
        UserId:2,
        SubforumId:2
    }
];

const addusers = async () =>
    await Promise.all(users.map(async user =>
      await db.User.create(user)
      .then(user => console.log("---CREATED USER:---",user.get({plain:true})))
    ));

const addsubs = async () =>
    await Promise.all(subforums.map(async subforum => 
      await db.Subforum.create(subforum)
      .then(subforum => console.log("---CREATED SUBFORUM:---",subforum.get({plain:true})))
    ));

const Seed =  () =>     
    addusers().then(() => addsubs().then(() =>     
    threads.forEach(thread =>
        db.Thread.create(thread)
        .then(thread => {
              db.User.findById(thread.UserId)
             .then(user => user.addThread(thread));
             db.Subforum.findById(thread.SubforumId)
             .then(subforum => subforum.addThread(thread))
        })
    )));


module.exports = Seed();
