const sequelize = require('sequelize');
const db = require('../models');

//array  of data objects to create subforums
const subforums = [
    {category:"Markdown"},
    {category:"Miscellaneous"}
];

//array of data objects to create users
const users = [
    {
        email:"harris@harris.com",
        username:"Harris",
        password:"12345",
        isModerator:true

    },
    {
        email:"zach@zach.com",
        username:"Zach",
        password:"12345",
        isModerator:true
    },
    {
        email:"erick@erick.com",
        username:"Erick",
        password:"12345",
        isModerator:true
    },
    {
        email:"rich@rich.com",
        username:"Rich",
        password:"12345",
        isModerator:true
    }
]

//array of data objects to create threads
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

/*
* To avoid key constraints on the thread insertions, 
* we add users and subforums using special async functions
* that await all the promises to return completed
*/

//await all user inserts
const addusers = async () =>
    await Promise.all(users.map(async user =>
      await db.User.create(user)
      .then(user => console.log("---CREATED USER:---",user.get({plain:true})))
    ));

//await all subforum inserts
const addsubs = async () =>
    await Promise.all(subforums.map(async subforum => 
      await db.Subforum.create(subforum)
      .then(subforum => console.log("---CREATED SUBFORUM:---",subforum.get({plain:true})))
    ));

//insert all users, then insert all subforums,
//finally, insert threads and add them to association tables
const Seed =  () =>     
    addusers().then(() => addsubs().then(() =>     
    threads.forEach(thread =>
        db.Thread.create(thread)
        .then(thread => {
              db.User.findById(thread.UserId)
             .then(user => user.addThread(thread));
             db.Subforum.findById(thread.SubforumId)
             .then(subforum => {
                 subforum.addThread(thread);
                 subforum.increment({threadCount:1});
             })
        })
    )));

//executes on export
module.exports = Seed();
