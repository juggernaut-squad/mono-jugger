## Welcome to the Jugger front-end project.

There are two apps `client (runs on port 3000)` and `api (runs on port 3100)` using the following tech stack:
>- [Nx](https://nx.dev/)
>- [React.js](https://reactjs.org/)
>- [Recoil](https://recoiljs.org/)
>- [Capacitor](https://capacitorjs.com/solution/react)
>- [MUi](https://mui.com/)
>- [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
>- [Cypress](https://www.cypress.io/)

---
#### Generate an [app](https://nx.dev/structure/applications-and-libraries#applications-and-libraries) `nx g @nrwl/react:app my-app`

---
#### Generate a new [library](https://nx.dev/structure/library-types) `nx g @nrwl/react:lib ui` where `ui` is a library name.

---
#### Generate a [component](https://nx.dev/packages/react/generators/component) inside the library `nx g @nrwl/react:component todos --project=ui --export`

---
#### Generate a [component](https://nx.dev/packages/react/generators/component) inside the specific sub folder `nx generate @nrwl/react:component atomExample --project=ui --directory=atoms --export`

---
#### Run development [server](https://nx.dev/cli/serve) `nx serve client`

---
#### [Run many](https://nx.dev/cli/run-many) apps in parallel `nx run-many --target=serve --projects=client,api`

---
#### Running unit tests `nx test my-app`

#### Execute the unit tests [affected](https://nx.dev/using-nx/affected#affected) by a change `nx affected:test`

---

#### Execute the end-to-end tests via Cypress `nx e2e my-app`

#### Execute the end-to-end tests [affected](https://nx.dev/using-nx/affected#affected) by a change `nx affected:e2e`

---
#### [Build](https://nx.dev/cli/build#build) the project `nx build my-app`

---
#### Analyze a dependencies [graph](https://nx.dev/cli/dep-graph#graph) `nx graph`

---

### Project styleguide:

- Components organized using [atomic approach](https://danilowoz.com/blog/atomic-design-with-react)
- All requests work through [redux thunks](https://redux-toolkit.js.org/api/createAsyncThunk)
- Global types declarations live in the root directory in the `common.d.ts` file (until a better solution will be found)
- Global alias is `@jugger/` described in the `tsconfig.base.json` file.

### Developers:

>**[Evgeny Kirichuk](https://github.com/evgeny-kirichuk)** (evgeny@kirichuk.me)
>
>**[Stsiapan Sukach](https://github.com/Qry1)**
> 
>**[Ilya Kaminsky](https://github.com/Ikaminsky)**
