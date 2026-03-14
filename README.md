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
