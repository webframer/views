https://webframe.app/docs

## Deployment

First, setup `.npmrc` with this content:

```
//registry.npmjs.org/:_authToken=<your_npm_publish_token>
```

Then, to deploy a package (Table, for example), run:

```shell
pnpm push table
```
