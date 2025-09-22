| [English](./README.md) | 日本語 |

## リポジトリをclone

```
git clone https://github.com/gubbai/cf-next-authjs-drizzle-pg PROJECT_NAME
```

- `wrangler.jsonc`の`name`
- `package.json`の`name`

を任意のプロジェクト名に変更。

## Authjs Secret の生成

```
pnpm dlx auth secret
```

これを実行すると、`.env.local` に `AUTH_SECRET` が生成されます。
生成された値を `.dev.vars` にコピー＆ペーストしてください。
その後、`.env.local` は削除してかまいません。

## PostgreSQLの作成

PostgresのDBを作成し、同じpostgresの接続文字列を`.env`, `.dev.vars`に記述します。

```.env
DATABASE_URL=postgresql://...
```

```.dev.vars
PG_URL=postgresql://...
```