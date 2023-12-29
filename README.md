



```bash
# 生成静态文件
npm run build
```
```bash
# 进入生成的文件夹
cd build

git init
git add -A
git commit -m 'hi'

# 如果发布到 https://<USERNAME>.github.io
git push git@github.com:Jinzedev/Jinzedev.github.io.git master
```








# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:messiahhh/blog.git master:gh-pages
git push -f https://${access_token}@github.com/Dcose/dcose.github.io.git master:gh-pages

cd -
