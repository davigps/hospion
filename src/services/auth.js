export const TOKEN_KEY = '@HospiOn-Token';
export const USER_KEY = '@Logged-User';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getUser = () => JSON.parse(localStorage.getItem(USER_KEY));

export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const logout = () => {
  localStorage.clear();
};
