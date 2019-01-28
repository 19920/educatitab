import { COMPLETEDTESTDATA_LOAD_SUCCESS,COMPLETEDTESTDATA_LOAD_ERROR} from '../types';
import { TESTDATAURL } from '../../url/url';
import axios from 'axios'


export function loadCompletedTestDatasSuccess(tests){
    return {
         type:COMPLETEDTESTDATA_LOAD_SUCCESS,
          payload: tests
     };
}
export function loadCompletedTestDatasError(){
    return {
         type:COMPLETEDTESTDATA_LOAD_ERROR

     };
}
export function loadCompletedTestData() {

    return function(dispatch) {
        return axios.get(TESTDATAURL + 'GetFinishedTests').then((res) => {
                const tests = res.data;
              
                return dispatch(loadCompletedTestDatasSuccess(tests));
            },
            (err) => {
                dispatch(loadCompletedTestDatasError());
                alert(JSON.stringify(err));
                throw (err);
            }
        );
    };
}