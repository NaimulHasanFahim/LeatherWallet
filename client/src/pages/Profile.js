import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllTransaction } from '../actions/transactions';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
/* min-height: 692px; */
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
background: black;
`;


const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
/* background-color: yellow; */

@media screen and (max-width: 400px){
    height: 100%;
}

`;

const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media screen and (max-width: 480px){
    padding: 10px;
}

`;


const ProfileBox = styled.div`
background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
);
display: flex;
flex-direction: column;
align-items: center;
padding-top: 40px;
padding-left: 90px;
padding-right: 90px;
/* padding: 40px 90px; */
border-radius: 10px;
max-width: 90vh;
min-height: 70vh;
z-index: 1;
margin-top: 100px;


@media screen and (max-width: 400px){
    padding: 32px 32px;
}
`;
const ProfileImg = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
  z-index: 1;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TransactionContainer = styled.div`
background: #fff;
text-align: center;
align-items: center;
/* justify-content: center; */
min-height: 70vh;
min-width: 90vh;
margin-top: 20px;
padding-bottom: -10px;
border-radius: 20px;
`;


const Profile = ({isOpen , toggle, user, setUser}) => {
  const dispatch = useDispatch();

  
  useEffect(() => {
    
    const getAllTrans = (  )=>{
      dispatch(getAllTransaction(user.accountNumber));
      
    }

    getAllTrans();
  }, []);
  
  
  const transaction = useSelector(state => state.transaction)
  console.log(transaction);
  return (
    <>
    
    <Container>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} user={user} setUser={setUser}/>
        <FormWrap>
            <FormContent>
              <ProfileBox>
                <ProfileImg src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLFlEKjQHLInSZGzlfwIAnCrqCOF3chDGhR6ZKfSw&s'}/>
                <h3>{user.username}</h3>
                <h3>Balance : {user.balance}</h3>
               <TransactionContainer>
                <h1>All Transactions</h1>
                </TransactionContainer>
               </ProfileBox>
             </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default Profile