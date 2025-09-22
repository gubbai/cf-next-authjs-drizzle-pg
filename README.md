| English | [日本語](./ja.README.md) |

## Clone the repository

```
git clone https://github.com/gubbai/cf-next-authjs-drizzle-pg PROJECT_NAME
```

Update the project name in the following files as needed:

- `name` in `wrangler.jsonc`
- `name` in `package.json`

## Generate the Auth.js secret

```
pnpm dlx auth secret
```

Running this command creates `AUTH_SECRET` in `.env.local`.
Copy the generated value into `.dev.vars`, then you can delete `.env.local`.

## Provision PostgreSQL

Create a Postgres database and add the same connection string to both `.env` and `.dev.vars`.

```.env
DATABASE_URL=postgresql://...
```

```.dev.vars
PG_URL=postgresql://...
```
