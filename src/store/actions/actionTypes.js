// Repeated actions types
/// loading handler: fired when starting any action 
export const LOADING_HANDLER = "LOADING_HANDLER";
/// server error: when there is error on the serve
export const SERVER_ERROR_HANDLER = "SERVER_ERROR_HANDLER";
/// Rich Editor action to handle data in rich editor it used used in posts and tasks
export const HANDLE_DATA = "HANDLE_DATA";

// RGISTER
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

// LOGIN
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

// committees
// fetch committees in committees page
export const FETCH_COMMITTEES_SUCCESS = "FETCH_COMMITTEES_SUCCESS";
export const FETCH_COMMITTEES_FAILED = "FETCH_COMMITTEES_FAILED";
// add committee
export const ADD_COMMITTEE_SUCCESS = "ADD_COMMITTEE_SUCCESS";
export const ADD_COMMITTEE_FAILED = "ADD_COMMITTEE_FAILED";
// edit committee
export const EDIT_COMMITTEE = "EDIT_COMMITTEE";

// Tasks
export const ADD_TASK = "ADD_TASK";
export const DELIVER_TASK = "DELIVER_TASK";
export const RESET_TASK = "RESET_TASK";
export const EVALUATE_TASK = "EVALUATE_TASK";
export const FETCH_COMPLETED_TASKS_SUCCESS = "FETCH_COMPLETED_TASKS_SUCCESS";
export const FETCH_PENDING_TASKS_SUCCESS = "FETCH_PENDING_TASKS_SUCCESS";

// Posts
export const ADD_POST = "ADD_POST";
export const ADD_POST_FAILED = "ADD_POST_FAILED";
export const REMOVE_POST = "REMOVE_POST";
export const EDIT_POSTS = "EDIT_POSTS";
export const FETCH_POSTS_SUCEESS = "FETCH_POSTS_SUCEESS";
export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED";

// Profile
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const EDIT_PROFILE = "EDIT_PROFILE";