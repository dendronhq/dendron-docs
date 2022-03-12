---
id: tv6msp7u75nfdrrhmalmqnu
title: Diagram
desc: ""
updated: 1647103863258
created: 1647103858466
---

```mermaid
sequenceDiagram
    participant VSCode
    participant plugin
    participant engine
    VSCode->>plugin: user opens new note, scrolls, or types
    plugin->>engine: ask for decorations
    VSCode->>plugin: user types again
    engine->>plugin: plain decoration objects
    plugin->>engine: ask for decorations
    engine->>plugin: plain decoration objects
    plugin->>VSCode: VSCode decorations
```
