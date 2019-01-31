import { COMPLETEDTESTDATA_LOAD_SUCCESS,COMPLETEDTESTDATA_LOAD_ERROR} from '../types';
import { TESTDATAURL } from '../../url/url';
import axios from 'axios'


export function loadCompletedTestDatasSuccess(tests){
    console.log(tests)
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
   //console.log(TESTDATAURL)
    return function(dispatch) {
        return axios.get(TESTDATAURL + 'GetFinishedTests').then((res) => {
            //console.log(JSON.stringify(res))
                //const tests = res.data;
                const tests = JSON.parse("[{\"customerTestId\":312552,\"startDate\":\"2018-01-11T14:03:12\",\"name\":\"VUX Svenska som andraspråk\",\"schoolName\":\"Botkyrka Vux\",\"startLevel\":\"Svenska som andraspråk, nationell delkurs 2\",\"customerId\":201206,\"productId\":22},{\"customerTestId\":249928,\"startDate\":\"2016-12-01T14:09:03\",\"name\":\"VUX Svenska som andraspråk\",\"schoolName\":\"Botkyrka Vux\",\"startLevel\":\"Svenska som andraspråk, nationell delkurs 1\",\"customerId\":201206,\"productId\":22}]")

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