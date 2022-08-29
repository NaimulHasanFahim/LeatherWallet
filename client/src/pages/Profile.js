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

const SingleTransaction = styled.div`
background: '#f9f9f9f';
/* background: ${({ redBg }) => (redBg ? "#931314" : "#931314")}; */
margin-top: 5px;
padding: 10px 10px;
z-index: 1;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const H3 = styled.h3`
  color: black;
`;

const PaymentLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const H1 = styled.h1`
  color: black;
  margin-top: 20px;
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
  const temp = transaction.alltransaction;
  console.log(temp);
  
  return (
    <>
    
    <Container>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} user={user} setUser={setUser}/>
        <FormWrap>
            <FormContent>
              <ProfileBox>
                <ProfileImg src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLFlEKjQHLInSZGzlfwIAnCrqCOF3chDGhR6ZKfSw&s'}/>
                <H3>{user.username}</H3>
                <H3>Balance : {user.balance}</H3>
               <TransactionContainer>
                <H1>All Transactions</H1>
                {JSON.stringify(temp) !== '{}' && temp.map((item)=>(<SingleTransaction key={item._id}>
                  <PaymentLeftWrapper><H3>Method : Payment</H3> 
                  <h5> reciever : {item.reciever.accountNumber}</h5>
                  <h6>Transaction ID : {item._id}</h6>
                  </PaymentLeftWrapper>
                  <H3>Amount : {item.amount}</H3>
                </SingleTransaction>))}
                
                </TransactionContainer>
               </ProfileBox>
             </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default Profile