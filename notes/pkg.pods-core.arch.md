---
id: rXSP43bX1Iyg8mVoEgM4L
title: Arch
desc: ''
updated: 1662659312966
created: 1636915094883
---


## V2 Architecture

This architecture replaces the existing architecture for Pods.

### Differences between Pods V2 and V1

#### Limitations in V1

- In V1, there's a 1-1 mapping between a Pod Type and a Config. This is limiting, because users may want to have multiple configurations for the same pod type.  Furthermore, they may even want to maintain multiple connections to the same service type (for example, one may want to use both their personal and work google accounts with the gdoc pod).
- The existing Pod interfaces make it difficult to have varied UI flows for the various Pods.  For example, authenticating with gdocs may require a different UI workflow than working with Airtable

#### Changes in V2

- The configuration for Pods has been separated from service connection information.  For example, with GDoc pod, the authentication tokens required for OAuth access have been pulled out into a separate config class, called `ExternalTarget`.  This way, multiple connections can reuse the same credential set.  This also further allows us to move the storage of connection credentials in more secure places instead of a .yaml config file.
- A single pod type can support multiple configurations. These configurations now have a unique pod configuration ID.
- Each pod type implements their own VS Code command.  From the user's perspective, there is still a single command for Pods Import and a single command for Pods Export; these commands will in turn execute the respective pod type command. This allows for greater flexibility of UI flows for each pod type.
- Publish Pod and Export Pod have been unified to Export Pod.