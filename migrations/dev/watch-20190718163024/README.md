# Migration `watch-20190718163024`

This migration has been generated by Khaled Hossain at 7/18/2019, 4:30:24 PM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "file:demo"."User"("id" INTEGER NOT NULL DEFAULT 0 ,"email" TEXT NOT NULL DEFAULT '' ,"name" TEXT NOT NULL DEFAULT '' ,PRIMARY KEY ("id"));

CREATE TABLE "file:demo"."Post"("id" INTEGER NOT NULL DEFAULT 0 ,"title" TEXT NOT NULL DEFAULT '' ,"user" INTEGER NOT NULL  REFERENCES User(id),PRIMARY KEY ("id"));

CREATE UNIQUE INDEX "file:demo"."User.email._UNIQUE" ON "User"("email")
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration ..watch-20190718163024
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,22 @@
+datasource pg {
+  provider = "sqlite"
+  url      = "file:demo.db"
+}
+
+generator photon {
+  provider = "photonjs"
+  output = "node_modules/@generated/photon"
+}
+
+model User {
+  id Int @id
+  email String @unique
+  name String
+  posts Post[]
+}
+
+model Post {
+  id Int @id
+  user User
+  title String
+}
```

## Photon Usage

You can use a specific Photon built for this migration (watch-20190718163024)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/watch-20190718163024'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
