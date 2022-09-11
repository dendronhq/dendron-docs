---
id: g6h6ajij5w0i6lpeep28ulr
title: Lifecycle
desc: ''
updated: 1657660423060
created: 1657659308169
---

## create a site
- loc: [[../packages/api-publish/server/api/services/site.service.ts#^rd9sycxoe611]]

```ts
// workspace is the site that the user is publishing
cWorkspace = { 
    domain: domain.domain
    job: {
        jobId: "-1",
        status: JobStatus.SUBMITTED,
        workspace: wsId,
        created: -1,
    },
}

DomainsService.create
WorkspaceModel.create
```

### create a domain
- loc: [[../packages/api-publish/server/api/services/domains.service.ts#^y590po7ddqkz]]

Add domain to domain table

```ts
create {
    ...
}
```


## hooks
- loc: [[../packages/api-publish/server/api/controllers/hooks/controller.ts#^5thal0gf96dc]]
```ts
onGithubHook { 
    hooksService.onGithubHook
}
```

- loc: [[../packages/api-publish/server/api/services/hooks.service.ts#^hg7eppm07r11]]
```ts
jobsService.create

```

## job create
- loc: [[../packages/api-publish/server/api/services/jobs.service.ts#^q80rstmajueh]]

Writes message into SQS

```ts
create { 
    ...
}
```