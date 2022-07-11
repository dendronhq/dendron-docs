---
id: 6ot2yhq0apz7ngaqvwj75dn
title: Google Docs Connection
desc: ''
updated: 1657530156142
created: 1657526984948
---

The google docs import/export pod does not work in dev environment without some gotchas.
The secret and client id are encrytped in github workflow.

## Create Google API console account
To run the gdoc pods in dev environment, we create a test service account in google API console. Follow the below steps to create one:
1. Create account in API console using this guide: https://developers.google.com/identity/protocols/oauth2
1. Create a project. Go to Enabled API and Services and enable `Google Docs API` and `Google Drive API`.
1. Go To Credentials > Create Creadential > Oauth Client ID
    - Click on Create Consent Screen > and select User type `External`.
    - Fill required details (App Info and Developer Info), Click on Save and continue
    - Add Docs and Drive Scopes., Click on Save and continue
    - Add Test Users(emails that should be whitelisted). Add only your gmail id.
1. Again, Go to Credentials > Create Creadential > Oauth Client ID. 
    - Select Application type as `Web Application`.
    - Click on Create.
    - Download json.

## Update code

After creating the account, you would get the credentials: client id and secret. 

- update the client id in pods.ts(https://github.com/dendronhq/dendron/blob/101923cf32e749fc795af5f427ae5ed71e74b03b/packages/plugin-core/src/utils/pods.ts#L47)
-  both client id and sercret in Server.ts https://github.com/dendronhq/dendron/blob/06fbc91530c6f1dd546761158d45a3afadd4ed36/packages/api-server/src/Server.ts#L121 


NOTE: This is only for dev env, do not commit your client id and secret