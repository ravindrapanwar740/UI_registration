export const SERVER_HOST = "http://localhost:8080"; 

const APP_APIS = {
  ROOT: "/",
  APP: "/app",
  AUTH: "/auth",
  LOGIN: "/auth/login",
  FORGOT_PASSWORD: "/auth/forgotPassword",
  GET_EMAIL_BY_TOKEN: "/auth/getEmailByToken",
  UPDATE_PASSWORD: "/auth/updatePassword",
  EDIT_PASSWORD: "/auth/editPassword",
  SIGN_UP: "user/signup",
  EMAIL_VERIFICATION: "/auth/mail-verification",
};

Object.keys(APP_APIS).map((key) => {
  APP_APIS[key] = `${SERVER_HOST}/${APP_APIS[key]}`;
  return null;
});

export const API = { ...APP_APIS };


