import * as actionTypes from './actionTypes';
import axios from '../../axios';
import * as actions from './repeatedActions';

export const fetchPosts = () => {
    return dispatch => {
        dispatch(actions.loadingHandler(actionTypes.FETCH_POSTS_START));
        axios.get('/posts')
            .then(response => {
                dispatch(fetchPostsSucceess(response.data.data))
            }).catch(error => {
                dispatch(actions.FailerHandler('Something went Wrong, Please Try Again Later'))
            });
    }
}

export const fetchPostsSucceess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCEESS,
        posts: posts
    }
}

export const addPost = (data) => {
    return dispatch => {
        dispatch(actions.loadingHandler(actionTypes.ADD_POST_START));
        const post = {
            body: data
        }
        axios.post('/create-post', post)
            .then(response => {
                dispatch(fetchPosts());
            }).catch(error => {
                dispatch(addPostFailed('Something went wrong, Please try again later'));
            });
    }
}

export const addPostFailed = (error) => {
    return {
        type: actionTypes.ADD_POST_FAILED,
        error: error
    }
}

export const editPost = (id, body) => {
    return {
        type: actionTypes.EDIT_POST,
        id: id,
        data: body
    }
}

export const editPostStart = (id, body) => {
    return dispatch => {
        dispatch(actions.loadingHandler(actionTypes.EDIT_POST_START));
        let newData = {
            body: body
        }
        axios.put(`/update-post/${id}`, newData)
            .then(response => {
                dispatch(fetchPosts());
                dispatch(editPostSuccess());
            }).catch(error => {
                dispatch(addPostFailed('Something went wrong, please try again later'));
            });
    }
}

export const editPostSuccess = () => {
    return {
        type: actionTypes.EDIT_POST_SUCCESS
    }
}

export const deletePost = (id) => {
    return dispatch => {
        dispatch(actions.loadingHandler(actionTypes.DELETE_POST_START));
        axios.delete(`/post/${id}`)
            .then(response => {
                dispatch(deletePostSuccess(id))
            }).catch(error => {
                dispatch(addPostFailed('Something went wrong, Please try again later'));
            });
    }
}

export const deletePostSuccess = (id) => {
    return {
        type: actionTypes.DELETE_POST,
        id: id
    }
}

export const handlePostDetails = (data) => {
    return {
        type: actionTypes.HANDLE_POST_DETAILS,
        data: data
    }
}