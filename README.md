# Roofing website pitch concepts

This repository hosts independent website concepts for local roofing businesses.

The published root is deliberately blank — nothing is linked from it. Each concept is
reached by typing its own URL.

## Published concepts

| URL | Concept |
| --- | --- |
| `https://co0oper.github.io/roofing/` | blank page, by design |
| `https://co0oper.github.io/roofing/ultimate/` | Ultimate Roof Repair — static, review-wall concept |
| `https://co0oper.github.io/roofing/ultimate/v2/` | Ultimate Roof Repair — Vite/React concept |
| `https://co0oper.github.io/roofing/v2/` | TopGuard Roofing — static concept |
| `https://co0oper.github.io/roofing/marco-roofing/` | Marco Roofing — Vite/React concept |
| `https://co0oper.github.io/roofing/garner/` | Garner Roofing — static review-led pitch concept |

A blank root keeps the concepts out of casual browsing. It is not access control: the
URLs above are public, and anyone who has one can open it.

Each concept is built from public business information and clearly identifies itself as an
independent, non-connected preview. Their forms demonstrate the customer journey without
sending or storing data.

## Local development

```sh
npm ci
npm run dev:marco
```

## Production builds

```sh
npm run build:github   # Ultimate Roof Repair Vite site -> dist-ultimate-v2/
npm run build:marco    # Marco Roofing -> dist-marco/
```

The Pages workflow assembles those builds, the two static folders and the blank root into
a single `dist-github/` artifact.
