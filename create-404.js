import { copyFileSync } from "node:fs";

//Needed because refreshing or directly manipulating path causing 404 Error due to gh pages can't handle client side routing
//https://www.frontendmentor.io/solutions/coffee-subscription-page-with-mobile-first-workflow-and-react-router-bk0veAlOfh#comment-6a81912a40d87e7b3661716a
//https://stackoverflow.com/questions/76115927/page-not-found-react-vite-app-not-routing-correctly-on-github-pages

copyFileSync("dist/index.html", "dist/404.html");
