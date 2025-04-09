const Text = document.getElementById('text');

const Btn = document.getElementById('btn');

Btn.addEventListener('click', () => {
  Text.innerHTML = "<span>ボタンをクリックしました</span>";

});