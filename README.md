## Деплой на GitHub Pages

### Вариант 1: через npm-скрипт

```bash
git init
git add .
git commit -m "init resume page"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```
```bash
npm run deploy
```

4. На GitHub открой:
   - `Settings` -> `Pages`
   - В `Source` выбери `Deploy from a branch`
   - Branch: `gh-pages` / `/ (root)`
   - Нажми `Save`

5. Подожди 1-2 минуты. Сайт будет доступен по ссылке:
   - `https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/`

### Вариант 2: через GitHub Actions (автоматически при push)

Если хочешь, можно подключить автодеплой через workflow. Для текущей задачи достаточно варианта выше.

## Security score (MDN Observatory)

Для высокого балла на [MDN HTTP Observatory](https://developer.mozilla.org/en-US/observatory) нужны именно HTTP-headers.

Что уже сделано в проекте:

- Добавлен файл `public/_headers` со строгими security headers:
  - `Content-Security-Policy`
  - `X-Content-Type-Options`
  - `X-Frame-Options`
  - `Referrer-Policy`
  - `Cross-Origin-Resource-Policy`
  - `Permissions-Policy`
  - `Strict-Transport-Security`

Важно:

- `github.io` хостинг не применяет `public/_headers`, поэтому на `https://<user>.github.io` часть проверок будет падать независимо от кода.
- Чтобы получить максимум (A/A+), нужен хостинг/прокси, где можно управлять заголовками:
  - Cloudflare Pages (+ custom domain)
  - Netlify
  - Vercel
  - Nginx/Caddy на своем сервере

## Cloudflare Pages (when deploy command is required)

Если в интерфейсе Cloudflare поле `Deploy command` обязательно, используй безопасный вариант для Pages:

- `Build command`: `npm run build`
- `Build output directory`: `dist`
- `Deploy command`: `npm run cf:deploy`

Что важно:

- Используй именно `wrangler pages deploy`, а не `wrangler deploy`.
- `wrangler deploy` запускает сценарий Workers и может попытаться добавить несовместимый Vite plugin.
