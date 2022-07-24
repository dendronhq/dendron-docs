---
id: tlxvvegvlbl11ul2kf92v5w
title: Lookup
desc: ''
updated: 1658685766609
created: 1658685256953
published: false
---

This describes how lookup works

## Entry
1. If the query is empty, show all root hierarchies
2. Otherwise perform the query with following options
    ```ts
    {
        // sort results by scopre
        shouldSort: true,

        // how much of an exact match should it be 
        // 1 = exact match, 0.2 implies very fuzzy
        threshold: 0.2,

        // match can be found anywhere
        ignoreLocation: true,

        // other options omitted
        ...
    }
    ```
1. If `onlyDirectChildren` is specified, remove all stubs
1. Sort results

## Sorting
- score, asc
- stub, desc
- levenstein, asc
- lastupdated, asc


Allows h1.h2.h3.h4 to be matched by h1.h4 respects the order of the elements when . are used.

## Lookup