export const storeUserData = (token) => {
   return localStorage.setItem('userToken', token);
  };