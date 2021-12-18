---
id: 49HqQJwNu9Yp2OQTGNtXh
title: Orbit
desc: ""
updated: 1639850431494
created: 1639847321803
---

<!--
See [[Ref|dendron://dendron.docs/ref.module-schema#ref]]
-->

## Summary

<!-- 2-3 sentences describing what this module does-->

## Entry

- [[../packages/pods-core/src/builtin/OrbitPod.ts]]

## Lifecycle

```ts
plant {
      while(next != null) {
            result = getMembersFromOrbit
            members += result.members
            next = result.next
      }

      create, conflicts = membersToNotes(members)

      bulkAddNotes(create)

      @onConflict(conflicts)

}

membersToNotes {
      members.each m => {

            noteName = cleanFname
            note = getNoteByFnameV5

            if note {
                  conflicts = getConflictedData
                  if (conflicts) {
                        conflicts.push conflicts
                  } else {
                        updateNote
                  }
            } else {
                  create.push note
            }

      }
      updateNoteData
}

onConflict {

}
```

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->
