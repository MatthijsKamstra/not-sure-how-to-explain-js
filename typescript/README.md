## check

check for versions node and npm

```bash
node -v
npm -v
```

## start

```bash
# create folder
mkdir my-awesome-greeter && cd my-awesome-greeter
```

```
echo "node_modules" >> .gitignore
```

install

```bash
npm install --save-dev typescript
# or
npm install -g typescript
```

## lazy

```bash
# setup npm and typescript1
npm init -y
tsc --init
# if installed locally (without -g)
npx tsc --init

# create folders and files
mkdir src
touch src/index.ts
touch src/unicorn.ts
```

## source

- https://docs.microsoft.com/en-us/visualstudio/javascript/compile-typescript-code-npm?view=vs-2019
- https://www.typescriptlang.org/download
- https://dev.to/monisnap/5-min-typescript-npm-package-4ce4
- https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c
