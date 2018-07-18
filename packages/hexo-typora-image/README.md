# hexo-typora-image

## What hexo-typora-image solve?

### Problem

Suppose you have `content/image.png` file and write `![](content/image.png)` on some markdown file.

You can generate HTML via `hexo generate` cli command, but generated HTML refers duplicated image path(eg, `content/content/image.png`)

**hexo-typora-image** fixes it. (eg. `content/image.png`)

## Prerequisition

It assumes you set `post_asset_folder: true` in `_config.yml`.

When you command `hexo new post <title>`, Hexo create `<title>.md` and asset directory named `<title>` like below.

```
.
├── [D] content
└── content.md
```

open Typora with content.md and set `typora-copy-images-to: {{ title }}` into metadata(yaml).

```yaml
---
<...>
typora-copy-images-to: {{ title }}
---
```

> [DOC: when-insert-local-image](https://support.typora.io/Images/#when-insert-local-image)

drag and drop some image(ex image.png) into Typora(content.md).

Typora copy image to `<title>` directory automatically via `typora-copy-images-to` property.

## Installation

Just install

```bash
npm install --save-dev hexo-typora-image
```

## Configuration

Zero configuration

---

> [Other packages](/README.md)

## LICENSE
MIT