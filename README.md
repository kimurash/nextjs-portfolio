# ポートフォリオサイト

## 環境構築

### 環境変数

| 変数名 | 説明 |
| --- | --- |
| CONTACT_FORM_RECIPIENT_EMAIL | 問い合わせを受け取るメールアドレス |
| RESEND_API_KEY | Resend の API キー |
| RECAPTCHA_SECRET_KEY | reCAPTCHA のシークレットキー |
| NEXT_PUBLIC_RECAPTCHA_SITE_KEY | reCAPTCHA のサイトキー |

### ローカル起動

```
pnpm i
pnpm dev
```

## 技術スタック

| 項目 | 使用技術 |
| --- | --- |
| 言語 | TypeScript |
| フレームワーク | [Next.js][nextjs], [Tailwind CSS][tailwindcss] |
| リンター / フォーマッター | [Biome][biome] |
| メール送信サービス | [Resend][resend] |
| ホスティングサービス | [Vercel][vercel] |

## ディレクトリ構成

```
.
├── app
│   ├── about/
│   ├── contact/
│   ├── products/
│   ├── skills/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── opengraph-image.png
│   └── page.tsx
├── biome.json
├── components
│   ├── layout/
│   └── ui/
├── components.json
├── lib
│   ├── schemas.ts
│   └── utils.ts
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public/
├── README.md
└── tsconfig.json
```

## npm scripts

| コマンド | 説明 |
| --- | --- |
| `pnpm dev` | 開発サーバを起動する（Turbopack） |
| `pnpm build` | 本番用にアプリケーションをビルドする |
| `pnpm start` | ビルド済みアプリケーションを起動する |
| `pnpm lint` | Next.js のルールに基づいて静的解析する |
| `pnpm format` | Biome を使ってフォーマットする |
| `pnpm check` | Biome を使って構文・型・規約のチェックして自動で修正する |

[nextjs]: https://nextjs.org/
[tailwindcss]: https://tailwindcss.com/
[biome]: https://biomejs.dev/
[resend]: https://resend.com/
[vercel]: https://vercel.com/
