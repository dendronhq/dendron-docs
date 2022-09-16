---
id: ai7ppoe1ptl02utduxop1pf
title: Get Line Offset of Frontmatter
desc: ''
updated: 1663295501251
created: 1663295495054
---

- A lot of the times you need to offset the line count of the file content of a markdown file so that it takes into account of the prepended frontmatter.
- You can use the utility method `RemarkUtils.getNodePositionPastFrontmatter` to get the position where the first non-frontmatter text starts.
- The return value of this can be converted to VSCode positions with `VSCodeUtils.point2VSCodePosition`