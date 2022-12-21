# @youwol/jest-preset

Jest preset for Youwol projects.

## Environnements variables

| Name                         | Possible value(s)         | Details                                                                 |
| ---------------------------- | ------------------------- | ----------------------------------------------------------------------- |
| GITHUB_ACTIONS               | any (just need to be set) | Add github-actions reporter                                             |
| YOUWOL_JEST_PRESET_DEBUG     | any (just need to be set) | Dump configuration                                                      |
| INTEGRATION_PY_YOUWOL_PORT   | number                    | Port to contact py-youwol instance (default to 2001)                    |
| INTEGRATION_PY_YOUWOL_HOST   | string                    | Domain name to contact py-youwol instance (default to localhost)        |
| INTEGRATION_PY_YOUWOL_SECURE | any (just need to be set) | Use https scheme to contact py-youwol instance (default to http scheme) |
