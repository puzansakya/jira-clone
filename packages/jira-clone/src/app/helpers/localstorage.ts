
const storage = {
  getToken: (title: string) => {
    return JSON.parse(window.localStorage.getItem(title) as string);
  },
  setToken: (title: string, token: string) => {
    window.localStorage.setItem(title, JSON.stringify(token));
  },
  clearToken: () => {
    const w: any = window.localStorage;
    w.clearAll();
  },
};

export default storage;