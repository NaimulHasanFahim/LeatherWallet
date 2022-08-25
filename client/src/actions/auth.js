import * as api from '../api/index';
import { logout, signinFailure, signinStart, signinSuccess, signupFailure, signupStart, signupSuccess } from '../redux/userRedux';
// SIGN UP ACTION

export const signin = (formData, setUser) => async (dispatch) => {
    // console.log(formData);
    dispatch(signinStart());
    try {
        const { data } = await api.signIn(formData);
        // console.log(data);
        const temp =data.result;
        setUser(temp);
        console.log(temp);
        dispatch(signinSuccess(temp));
        
    } catch (error) {
        console.log(error)
        dispatch(signinFailure());
    }
}

export const signup = (formData, setUser) => async (dispatch) => {
    dispatch(signupStart());

    try {
        const { data } = await api.signUp(formData);
        // console.log(data);
        setUser(data.result);
        dispatch(signupSuccess(data));
        
    } catch (error) {
        console.log(error)
        dispatch(signupFailure());
    }
}

export const signout = (navigate, setUser) => async (dispatch) =>{
    try {
        dispatch(logout());

        navigate('/');
        setUser(null);
    } catch (error) {
        console.log(error)
    }
}
