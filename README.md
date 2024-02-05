# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

How to run frontend:
1. Install npm modules: type "npm i" in console
2. Run server: type "npm run dev" in console

Project structure:
src/
 |
 |-assets/(stores all project assets)
 |
 |-components/(stores generic components(navbar, footer, product listing etc))
 | |-RegularComponent.jsx
 | |-ComplexComponent/(complex components are stored in their own directories)
 |   |-components/
 |   |-Component.jsx
 |
 |-hooks/(stores custom hooks)
 |
 |-jsons/(stores jsons that are used to render menus)
 |
 |-pages/(stores all page directories)
 | |
 | |-Page/
 |   |
 |   |-components/(stores page-specific components)
 |   |
 |   |-Page.jsx(main page file)
 |
 |-services/(stores api related files)
 |
 |-utils/(stores utilities like regex patterns)
 |
 |-App.css(main css file)
 | 
 |-App.jsx(main project file, contains react browser)
 |
 |-other files are either unused or are immutable

All custom hooks:
    useRegexValidation(<initial value>, <regex>) = regex.text(value);
        usage:
            [<value>, <is valid>, <setter function>] = useRegexValidation(<initial value>, <regex>); 
    useUsername() - sends request with credentials and returns user's username;
    useUserData() - sends post request with credentials and returns user's data;

All custom api requests(services/api.js):
   requestWithCredentials(...) - config: {'withCredentials':true}
    requestWithoutCredentials(...) - 'withCredentials':false


