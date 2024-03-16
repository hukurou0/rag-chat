// この関数は非同期です。Promise<Response>を返します。
export async function postData(url: string, data: Record<string, unknown>): Promise<Response> {
    // HTTP POSTリクエストのオプションを設定
    const requestOptions: RequestInit = {
      method: 'POST', // HTTPメソッド
      headers: {
        'Content-Type': 'application/json', // コンテンツタイプをJSONに設定
      },
      body: JSON.stringify(data), // 送信するデータをJSON文字列に変換
    };
  
    // fetch APIを使用してリクエストを送信
    return fetch(url, requestOptions)
      .then(response => {
        // レスポンスが正常であることを確認
        if (!response.ok) {
          // レスポンスが異常であれば、エラーを投げる
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response; // 正常なレスポンスを返す
      });
  }