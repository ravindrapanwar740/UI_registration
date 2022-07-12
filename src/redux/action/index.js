import { INCREMENT, DECREMENT } from '../constant/constant';
import { API } from '../../config/api';
import {callApi} from '../action/util'

export const increaseCounter = () => {

  return {

    type: INCREMENT,

  };

};
export const createUser = async (data) => {
  console.log(data,"----data in action")
  const res = await callApi(API.SIGN_UP, {
    method: "POST",
    data,
  });
  console.log(res,"----res")
  return res;
  // return async (dispatch) => {

  //   const data = await callApi(API.SIGN_UP);

  //   dispatch({
  //     type: USER_SIGNUP,
  //     payload: data,
  //   });
  //   return data;
  // };
};

// export const signUp = async (data) => {
//   const res = await callApi(`${API.AUTH}/register`, {
//     method: "POST",
//     data,
//   });
//   return res;
// };
// export const getShippingInformation = () => {
//   return async (dispatch) => {

//     const data = await callApi(API.SHIPPING_INFO+"/all");
//     dispatch({
//       type: shipping_info.SHIPPING_INFORMATION,
//       payload: data,
//     });
//     return data;
//   };
// };

export const decreaseCounter = () => {

  return {

    type: DECREMENT,

  };

};