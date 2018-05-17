import axios from 'axios';
let base = process.env.NODE_ENV==="production"?
    "http://code-withus.herokuapp.com":"http://localhost:3000";
axios.defaults.baseURL = base;
// sets saved login info
export function setAuth () {
    
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("CWUTOKEN");
};
// USERS //
 
//log in
export async function login (credentials) {
    return await axios.post('/api/auth',credentials)
    .then(res =>{
        localStorage.setItem("CWUTOKEN","Bearer "+res.data.token);
        return res.data;
    });
}

export async function defaultLogin () {
    return await axios.get('api/user/fromtoken')
    .then(res => {return res.data});
}

//log out
export function logout () {
    localStorage.setItem("CWUTOKEN",null);
    axios.defaults.headers.common['Authorization'] = null;
}

// gets all user data
export function getAllUsers () {
    return axios.get('/api/user');
}

// creates a new user
/** 
 *@param {obj} user = {
 *   email:string,
 *   username:string,
 *   password:string
 *}
 * 
*/
export function createUser (user) {
    return axios.post('/api/user',user);
}

//get specific user
/**
 * 
 * @param int userId
 * could also be a parseable string 
 */
export function getUser (userId) {
    return axios.get('/api/user/' + userId);
}

// returns all of a specified user's posts
export function getAllUserPosts (userId) {
    return axios.get('/api/user/posts/' + userId);
}

// returns all of a specified user's threads
export function getAllUserThreads (userId) {
    return axios.get('/api/user/threads/' + userId);
}


// updates specified user's password
export function updatePassword (userId, newPassword) {
    return axios.put('/api/user/' + userId , newPassword);
} 

// updates specified user's email
export function updateEmail  (userId, newEmail) {
    return axios.put('/api/user/' +userId,newEmail);
}

// increases specified user's reputation
export function increaseUserRep (userId) {
    return axios.put('/api/user/' +userId);
}

// decreases specified user's reputation
export function decreaseUserRep (userId) {
    return axios.put('/api/user/' +userId);
}

export function deleteUser (userId) {
    return axios.delete('/api/user/' +userId);
}

// THREAD //

// Creates a new thread to be associated with a user and subforum
export function createThread  (thread) {
    return axios.post('/api/user/thread',thread)
}

// finds all threads
export function getAllThreads () {
    return axios.get('/api/thread');
}

// finds all posts for the specified thread
export function getAllThreadPosts (threadId) {
    return axios.get('/api/thread/' + threadId);
}

// updates the thread's reputation by +1
export function updateThreadRep (threadId) {
    return axios.post('/api/thread/rep/' + threadId);
}



// POST //

// allows user to create new post that will be associated with the thread it is in
export function createPost(post) {
    console.log("in api: ",post)
    return axios.post('/api/post', post)
    .catch(err => console.log(err));
}

// gets the specified post
export function getPost (postId) {
    return axios.get('/api/post');
}

// allows user or moderator to edit specified post
export function editPost (newPost) {
    return axios.put('/api/post',newPost);
}

// allows user or moderator to delete specified post
export function deletePost (postId) {
    return axios.delete('/api/post/'+postId);
}

// SUBFORUM //

//returns all the subforums
export function getAllSubForums () {
    return axios.get('api/subforum');
}

// Allows Moderator to create new Subforum
export function createSubforum (newForum) {
    return axios.post('/api/subforum',newForum);
}

// returns all the subforums in the specified category
export function getSubforumByCategory (category) {
    return axios.get('/api/subforum/'+category);
}

// returns all threads associated with the specified subforum
export function getAllSubforumThreads (subforumId) {
    return axios.get('/api/subforum/'+subforumId);
}
