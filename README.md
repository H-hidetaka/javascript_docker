# javascript_docker

# docekr build
docker build . -t hidetaka/node-web-app

# docker　イメージの実行
docker run -p 49160:8080 -d hidetaka/node-web-app

# コンテナ ID を取得する
$ docker ps

# アプリ出力をプリントする
$ docker logs <container id>

# 例
Running on http://localhost:8080

# コンテナに入る
$ docker exec -it <container id> /bin/bash

# テスト方法
$ docker ps
->portsの確認
$ curl -i localhost:49160
->docker ps で確認したportを入力

# 参考url
https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/
