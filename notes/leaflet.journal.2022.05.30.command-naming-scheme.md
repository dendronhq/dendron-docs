---
id: mhv4mm5m3npl98jabr7i6pw
title: Command Naming Scheme
desc: ''
updated: 1654783400713
created: 1653950565943
documentId: 1Cnpu95UNygFLNphneZeYRkA0PpY5VVl3Pvx6bcP6cHc
revisionId: >-
  ALm37BXeLp4_enKyYGI_IlNTjuxzduFrMi6A2YCsTONwGUo2oJJty6yuRityFl6FglOz5j54YqFYDcO4KL1LjQ
---

This leaflet goes over naming scheme for Dendron Commands. 

We currently have two conventions that we use when creating commands:

1. `VERB` + `NOUN` (eg. Go to Note)
2. `NOUN` + `VERB` (eg. Vault Add)

We want to standardize on a convention moving forward

## VERB + NOUN
- more "natural" 
- most of our commands are already structured this way

## NOUN + VERB
- easier to organize (eg. all methods attached to entities)
- we currently use this for [[Feature Instrumentation|dendron://private/area.metrics.sop.feature-instrumentation]]

## Decisions
1. VERB + NOUN
2. NOUN + VERB
3. A mix of the two

## Output
- [[Decide on a name|dendron://dendron.docs/pkg.plugin-core.dev.cook.add-new-command#decide-on-a-name]]