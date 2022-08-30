import * as api from '../api/index';
import { addTransaction } from '../redux/transactionRedux';

export const getAllTransaction = (id) => async (dispatch) => {
    
    try {
        console.log(id);
        const { data } = await api.getAllTransactionByUser(id);
        console.log(data);
        dispatch(addTransaction(data));
        // return data;
    } catch (error) {
        console.log(error)
    }
}
