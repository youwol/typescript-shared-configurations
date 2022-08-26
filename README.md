# ESLint & prettier configurations for youwol projects

## Using these configurations

### Add the pakages to your project :

```shell
yarn add --dev @youwol/prettier-config @youwol/eslint-config
```

### Update package.json :

```json
{
    "prettier": "@youwol/prettier-config",
    "eslintConfig": {
        "extends": [
            "@youwol"
        ]
    }
}
```

## Publishing ESLint or prettier

### Update version

```shell
yarn workspace <@youwol/eslint-config or @youwol/prettier-config> version <semver>
```

### Publish

```shell
yarn workspace <@youwol/eslint-config or @youwol/prettier-config> publish
```

## Publishing both

### Update versions
```shell
yarn workspace @youwol/eslint-config version <semver>
yarn workspace @youwol/prettier-config version <semver>
```

### Publish
```shell
yarn publish
```
