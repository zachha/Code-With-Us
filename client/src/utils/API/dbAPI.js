import axios from 'axios';

export default {
    // USERS //

    // gets all user data
    getAllUsers: (res) => {
        return axios.get('/api/user');
    },

    // creates a new user
    createUser: (email, userName, password, res) => {
        return axios.post('/api/user');
    },

    //get specific user
    getUser: (userId, res) => {
        return axios.get('/api/user/' + id);
    },

    // returns all of a specified user's posts
    getAllUserPosts: (userId, res) => {
        return axios.get('/api/user/' + id);
    },

    // updates specified user's password
    updatePassword: (userId, newPassword) => {
        return axios.put('/api/user/' + id);
    },

    // updates specified user's email
    updateEmail: (userId, newEmail) => {
        return axios.put('/api/user/' +id);
    },

    // increases specified user's reputation
    increaseUserRep: (userId, res) => {
        return axios.put('/api/user/' +id);
    },

    // decreases specified user's reputation
    decreaseUserRep: (userId, res) => {
        return axios.put('/api/user/' +id);
    },

    deleteUser: userId => {
        return axios.delete('/api/user/' +id);
    },

    // THREAD //

    // Creates a new thread to be associated with a user and subforum
    createThread: (content, subforumId, userId, res) => {
        return axios.post('/api/thread')
    },

    // finds all threads
    getAllThreads: (res) => {
        return axios.get('/api/thread');
    },

    // finds all posts for the specified thread
    getAllThreadPosts: (threadId, res) => {
        return axios.get('/api/thread/' + id);
    },

    // updates the thread's reputation by +1
    increaseThreadRep: (threadId, res) => {
        return axios.post('/api/thread/' + id);
    },

    // updates the thread's reputation by -1
    decreaseThreadRep: (threadId, res) => {
        return axios.post('api/thread' +id);
    },

    // POST //

    // allows user to create new post that will be associated with the thread it is in
    createPost: (content, threadId, userId, res) => {
        return axios.post('/api/post');
    },

    // gets the specified post
    getPost: (postId, res) => {
        return axios.get('/api/post');
    },

    // allows user or moderator to edit specified post
    editPost: (postId, res) => {
        return axios.put('/api/post');
    },

    // allows user or moderator to delete specified post
    deletePost: postId => {
        return axios.delete('/api/post');
    },

    // SUBFORUM //

    // Allows Moderator to create new Subforum
    createSubforum: (category, res) => {
        return axios.get('/api/subforum');
    },

    // returns all the subforums in the specified category
    getSubforumByCategory: (subforumId, res) => {
        return axios.get('/api/subforum');
    },

    // returns all threads associated with the specified subforum
    getAllSubforumThreads: (subforumId, res) => {
        return axios.get('/api/subforum');
    }
}