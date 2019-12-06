# @cweise/redux-valacts

redux-valacts is a small companion library to create flux like redux-actions with a validation schema.

## Install

```bash
npm i @cweise/redux-valacts yup --save
```

```bash
yarn add @cweise/redux-valacts yup
```

## Usage

```javascript
import { object, string } from "yup";
import { createAction } from "@cweise/redux-valacts";

const validationSchema = object({
  username: string().required(),
  password: string()
});

const login = createAction("LOGIN", { validationSchema });

// This will throw an error because username is required
login({
  username: "",
  password: "XXX"
});
```
