export const environment = {
  production: true,
  api: {
    base: "https://jsonplaceholder.typicode.com/",
    posts: () => environment.api.base + "posts/",
    comments: () => environment.api.base + "comments",
    users: () => environment.api.base + "users/",
  },
};
