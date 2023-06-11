const URL_PREFIX = "https://backendtech4all.herokuapp.com"
// const URL_PREFIX = "http://localhost:3001";

const API = {
  login: async (userObj) => {
    const res = await fetch(`${URL_PREFIX}/api/user/login`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("falied login");
    }
  },
  signup: async (userObj) => {
    const res = await fetch(`${URL_PREFIX}/api/user`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("falied signup");
    }
  },
};
export default API;