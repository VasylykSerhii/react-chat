const LOCAL_STORAGE_TOKEN_KEY = "authToken";

const getToken = () => localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

const setToken = (value) =>
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, value);

const clearToken = () => localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);

const isTokenValid = () => {
  const token = getToken();

  // TODO: add some token validation logic
  const isValid = !!token;

  return isValid;
};

const authTokenService = {
  getToken,
  setToken,
  clearToken,
  isTokenValid,
};

export default authTokenService;
