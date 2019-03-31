# Auth Axios Adapter for Vue Admin

## Introduction
***This package is one of the adapters that can be used with Vue Admin. It provides very simple and minimalistic authentication and authorization support for the axios client.***

## Dependencies

+   [**vue-admin-js types**](https://github.com/Cambalab/vue-admin/blob/develop/src/va-auth/src/types/index.js) The action types provided by Vue Admin to generate modifications in the store.
+   [**axios**](https://github.com/axios/axios) This package assumes axios is already installed in your project.

## Installation

**Install as an npm dependency**

```bash
  npm install --save va-auth-axios-adapter
```

## Configuration

**We recommend to implement your adapters in a separate directory from your App.vue**

Let's assume in our src/ directory we created another directory named providers and we wrote our implementation there.

***src/providers/auth.axios.adapter.js***
```javascript
import { createAxiosAdapter } from 'va-auth-axios-adapter'
import axios from 'axios'

const authUrl = 'http://localhost:8888/api/auth'
const client = axios

const authProvider = createAxiosAdapter(client, {
  authUrl,
})

export default authProvider
```

## Options

**The Adapter accepts the following options:**

+   **authFields**: The fields of the credentials supported in your backend. ***(optional)***
+   **authUrl**: The url of your authentication api **(required)**
+   **storageKey**: The name of the field of your token ***(optional)***
+   **userField**: The name of the field of the user object in the backend response ***(optional)***

***Here is an example using the default values for some of the options***

***src/providers/auth.axios.adapter.js***
```javascript
const authFields = { username: 'username', password: 'password' }
const authUrl = 'http://localhost:8888/api/auth'
const client = axios
const storageKey = 'token'
const userField = 'user'

const authProvider = createAxiosAdapter(client, {
  authFields,
  authUrl,
  storageKey,
  userField,
})

export default authProvider
```

## Usage

**Simply assign the returned value from the `createAxiosAdapter` function into the `Admin` component**

***src/App.vue***
```vue
<template>
  <Admin :authProvider="authProvider">
    <Resource>
      <!-- Your Views should be here -->
    </Resource>
  </Admin>
</template>

<script>
  import authProvider from './providers/auth.axios.adapter'

  export default {
    name: 'App',
    components: {
      Admin: Admin,
      Resource: Resource
    },
    data() {
      return {
        authProvider,
        // The rest of your View components ...
      }
    }
  }
</script>
```

## Contributing and Future features

**We are currently working on this project while learning new stuff day after day. We also receive ideas and improvements from Vue meetings and people we work with everyday.**

**Nothing could make us happier than the community involvement into this library and the Vue Admin framework, so**
***if you feel like contributing or just sharing an idea for us to improve the library, please do not hesitate to comment our issues or open an issue.***

---

<p align="center">
  <a href="https://camba.coop" target="_blank" rel="noopener noreferrer">
    <img class="margin" width="20" src="public/camba_icon.png" />
  </a>
  <strong>With :green_heart: :purple_heart: :heart: by <a href="https://camba.coop" target="_blank" rel="noopener noreferrer">Cambá Coop</a> :earth_americas: Buenos Aires, Argentina</strong>
  <a href="https://camba.coop" target="_blank" rel="noopener noreferrer">
    <img class="margin" width="20" src="public/camba_icon.png" />
  </a>
</p>
