// localStorageに保存して、保存した内容をHTML上に書き出す操作。
$('#save').on('click', function () {
  const key = $('#key').val();
  const value = $('#value').val();
  localStorage.setItem(key, value);

  const html = '<tr><th>' + key + '</th><th>' + value + '</th></tr>';
  $('#list').append(html);
});

//クリアボタンを押した時にlocalstorageとhtmlから消す操作
$('#clear').on('click', function () {
  localStorage.clear();
  $('#list').empty();
});

//ページがロードされた時にlocalstorage上のデータをhtml上に表示する操作
for (i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  const html = '<tr><th>' + key + '</th><th>' + value + '</th></tr>';
  $('#list').append(html);
}

//入力しないとボタンが押せないようにする
