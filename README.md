# Getting started

This project is created using NX
https://nx.dev/react

Run

```
npm install
npm start
```

# Render Component

SimpleText.tsx

The render component will be rendered in the CMS editor and on the final website.

Consider that the component will be rendered on the server side.

Although we use material-ui, you are encouraged to use simple css rules for styles. Remember that components should be high level, but still customizable for the end-users.

# Modifier Component

SimpleTextModifier.tsx

The modifier component will be used in the CMS editor to change the parameters of the "render component".

Please use standard material-ui controls.

# App

You can use the main app for the development of the component. NextJs is only used for development, please do not add any NextJs specific features to the components.

# PageElementProps interface

We need this interface for integration in a later stage, please do not remove it.
