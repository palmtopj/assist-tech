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
  // logout: async () => {
  //   fetch(`${URL_PREFIX}/api/user`)
  // }
  // logoutBtn.addEventListener("click", async () => {
  //   const response = await fetch("/api/Retailers/logout", {
  //     method: "DELETE",
  //   })
  //   console.log(response)
  // })
};
export default API;