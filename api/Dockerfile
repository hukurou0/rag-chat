# Pythonのベースイメージを指定
FROM python:3.11-slim

# 作業ディレクトリを設定
WORKDIR /usr/src/api

# アプリケーションの依存関係ファイルをコピー
COPY requirements.txt .

# 依存関係をインストール
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションのソースコードをコピー
COPY . .

# Flaskサーバーを起動
CMD ["flask", "run", "--host=0.0.0.0"]
