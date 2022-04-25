
import "./styles/styles.scss";

let theme = "light";
const themes = {};

themes[theme] = document.querySelector("#theme");

async function loadTheme(newTheme) {

   const themeElement = document.querySelector("#theme");

   if (themeElement) {
      themeElement.remove();
   }

   if (themes[newTheme]) {

      document.head.appendChild(themes[newTheme]);

      return;
   }

   if (newTheme === "dark") {


      import(/* webpackChunkName: "dark" */ "./styles/styles.scss?dark").then(() => {
         themes[newTheme] = document.querySelector("#theme");

      });
   }
}
/*
document.onclick = () => {
   if (theme === "light") {
      theme = "dark";
   } else {
      theme = "light";
   }

   loadTheme(theme);
};*/