import Home from "../pages/Home";
import Login from "../pages/Login";
import Contest from "../pages/Contest";
import Question from "../pages/Question";
import Account from "../pages/Account";
const publicRouters = [
  { path: "/", component: Home },
  { path: "/contest", component: Contest },
  { path: "/question", component: Question },
  { path: "/account", component: Account },
];
const privateRouters = [
  { path: "/", component: Login, layout: null },

];
export { publicRouters, privateRouters };
