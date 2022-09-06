---
id: bfkmwvp69n79r9rxy4ugx4e
title: Upload New Prisma Client
desc: ''
updated: 1662490209008
created: 1662490198426
---

```sh
zip -r ../generated-prisma-client.zip *
cd ../
BUCKET=org-dendron-public-assets
aws --profile aws-s3-bot s3 cp --acl public-read generated-prisma-client.zip s3://$BUCKET/publish/generated-prisma-client.zip
```