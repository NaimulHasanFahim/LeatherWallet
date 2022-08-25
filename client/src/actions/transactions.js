import * as api from '../api/index';
import { addTransaction } from '../redux/transactionRedux';

export const getAllTransaction = (id) => async (dispatch) => {
    
    try {
        console.log(id);
        const { data } = await api.getAllTransactionByUser(id);
        dispatch(addTransaction(data));
        // return data;
    } catch (error) {
        console.log(error)
    }
}
