# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

How to run frontend:
1. Install npm modules: type "npm i" in console
2. Run server: type "npm run dev" in console

Project structure: <br/>
.<br/>
└── src/<br/>
⠀⠀⠀├── assets/(stores all project assets)/<br/>
⠀⠀⠀│⠀⠀⠀└── components/(stores generic components(navbar, footer, product listing etc))/ <br/>
⠀⠀⠀│⠀⠀⠀⠀⠀⠀├── RegularComponent.jsx<br/>
⠀⠀⠀│⠀⠀⠀⠀⠀⠀└── ComplexComponent/(complex components are stored in their own directories)/<br/>
⠀⠀⠀│⠀⠀⠀⠀⠀⠀⠀⠀⠀├── components/<br/>
⠀⠀⠀│⠀⠀⠀⠀⠀⠀⠀⠀⠀└── ComplexComponent.jsx<br/>
⠀⠀⠀├── hooks/(stores custom hooks)<br/>
⠀⠀⠀├── jsons/(stores jsons that are used to render menus)<br/>
⠀⠀⠀├── pages/(stores all page directories)/<br/>
⠀⠀⠀│⠀⠀⠀└── Page/<br/>
⠀⠀⠀│⠀⠀⠀⠀⠀⠀├── components/(stores page-specific components)<br/>
⠀⠀⠀│⠀⠀⠀⠀⠀⠀└── Page.jsx(main page file)<br/>
⠀⠀⠀├── services/(stores api related files)<br/>
⠀⠀⠀├── utils/(stores utilities like regex patterns)<br/>
⠀⠀⠀├── App.css(main css file)<br/>
⠀⠀⠀├── App.jsx(main project file, contains react browser)<br/>
⠀⠀⠀└── other files are either unused or are immutable<br/>
All custom hooks:<br/>
    useRegexValidation(<initial value>, <regex>) = regex.text(value);<br/>
        usage:<br/>
            [<value>, <is valid>, <setter function>] = useRegexValidation(<initial value>, <regex>); <br/>
    useUsername() - sends request with credentials and returns user's username;<br/>
    useUserData() - sends post request with credentials and returns user's data;<br/>
<br/>
All custom api requests(services/api.js):
   requestWithCredentials(...) - config: {'withCredentials':true}
    requestWithoutCredentials(...) - 'withCredentials':false


