# ベースイメージを指定
FROM node:latest

# アプリケーションの作業ディレクトリを設定
WORKDIR /usr/src/front

# パッケージ.jsonとyarn.lockまたはpackage-lock.jsonをコピー
COPY package.json yarn.lock* ./

# 依存関係をインストール
RUN yarn install --production

# アプリケーションのソースコードをコピー
COPY . .

# ポート3000を公開
EXPOSE 3000

# アプリケーションを起動
CMD ["yarn", "start"]
