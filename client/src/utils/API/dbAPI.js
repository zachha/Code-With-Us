import axios from 'axios';


// USERS //

// gets all user data
export function getAllUsers () {
    return axios.get('/api/user');
}

// creates a new user
export function createUser (email, userName, password) {
    return axios.post('/api/user');
}

//get specific user
export function getUser (userId) {
    return axios.get('/api/user/' + userId);
}

// returns all of a specified user's posts
export function getAllUserPosts (userId) {
    return axios.get('/api/user/' + userId);
}

// updates specified user's password
export function updatePassword (userId, newPassword) {
    return axios.put('/api/user/' + userId);
} 

// updates specified user's email
export function updateEmail  (userId, newEmail) {
    return axios.put('/api/user/' +userId);
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
export function createThread  (content, subforumId, userId) {
    return axios.post('/api/thread')
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
export function increaseThreadRep (threadId) {
    return axios.post('/api/thread/' + threadId);
}

// updates the thread's reputation by -1
export function decreaseThreadRep (threadId) {
    return axios.post('api/thread' +threadId);
}

// POST //

// allows user to create new post that will be associated with the thread it is in
export function createPost(content, threadId, userId) {
    return axios.post('/api/post');
}

// gets the specified post
export function getPost (postId) {
    return axios.get('/api/post');
}

// allows user or moderator to edit specified post
export function editPost (postId) {
    return axios.put('/api/post');
}

// allows user or moderator to delete specified post
export function deletePost (postId) {
    return axios.delete('/api/post');
}

// SUBFORUM //

// Allows Moderator to create new Subforum
export function createSubforum (category) {
    return axios.get('/api/subforum');
}

// returns all the subforums in the specified category
export function getSubforumByCategory (subforumId) {
    return axios.get('/api/subforum');
}

// returns all threads associated with the specified subforum
export function getAllSubforumThreads (subforumId) {
    return axios.get('/api/subforum');
}
