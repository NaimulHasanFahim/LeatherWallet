import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signin } from "../actions/auth";


const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;

background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
);
`;

const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px){
    height: 100%;
}

`;

const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}

`;

const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px){
    padding: 10px;
}

`;

const Form = styled.form`
background: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width: 400px){
    padding: 32px 32px;
}
`;

const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`;

const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`;

const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`;

const FormButton = styled.button`
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`;

const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`;

const initialState = { password: "", accountNumber: "" };

const Signin = ({user, setUser}) => {
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const { isFetching, error } = useSelector((state) => state.user);
  // console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    try {
        dispatch(signin(formData, setUser));
        navigate('/');    
    } catch (error) {
        console.log(error);
    }
    
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>dolla</Icon>
            <FormContent>
                <Form onSubmit={handleSubmit}>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Account Number</FormLabel>
                    <FormInput name="accountNumber" onChange={handleChange}  required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput name="password"  onChange={handleChange}  type='password' required/>
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default Signin