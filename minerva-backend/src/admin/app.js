// /src/admin/app.js
import authlogo from "./extensions/authlogo.png"
export default {
  config: {
    tutorials : false,
    menu : {
      logo : authlogo
    },
    translations: {
      en: {"app.components.HomePage.welcome.again": "Welcome to Minerva Admin Panel..",
        "app.components.HomePage.welcomeBlock.content.again" : " "
      }
    },
    theme: {
      light : {
        primary600: "800080"
      },
      dark: {
        colors: {
          primary600: "#800080",
          buttonPrimary500: "blue",
          buttonPrimary600: "red"
        },
      }
    }
  },
  bootstrap() {},
};
