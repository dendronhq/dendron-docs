---
id: r6ub0qm23xibicsuzmbug5n
title: GitHub Actions
desc: ''
updated: 1663102259752
created: 1663102133669
---

Every pull request goes through a github actions job that runs our unit and integration tests


## Troubleshooting

### CI/CD is failing but passes locally

Sometimes due to caching of stale types, the ci/cd might fail. In this case, you'll want to invalidate the remote cache by updating [[../.github/workflows/ci.yml]]

Specifically, update the `key` value for the following by incrementing the number suffix
```yml
      - name: Restore typescript lib cache
        uses: actions/cache@v2
        id: ts-cache
        with:
          path: |
            packages/*/lib/*
          # change -22 to -23 to invalidate the old key
          key: ${{ runner.os }}-${{ hashFiles('yarn.lock') }}-22
          restore-keys: |
            ${{ runner.os }}-yarn-9
```