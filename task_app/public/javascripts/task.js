document.addEventListener('DOMContentLoaded', () => {
  // タブ切り替え
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons[0].addEventListener('click', () => {
    tabContents[0].style.display = 'block';
    tabButtons[0].classList.add('active');
    tabContents[1].style.display = 'none';
    tabButtons[1].classList.remove('active');
  });
  tabButtons[1].addEventListener('click', () => {
    tabContents[1].style.display = 'block';
    tabButtons[1].classList.add('active');
    tabContents[0].style.display = 'none';
    tabButtons[0].classList.remove('active');
  });

  // 通常タスク追加ボタン
  const addBtn1 = document.getElementById('js-add-btn-1');
  const taskAddContainer1 = document.getElementById('js-task-add-container-1');
  if (addBtn1 && taskAddContainer1) {
    addBtn1.addEventListener('click', () => {
      taskAddContainer1.classList.remove('hidden');
    });
  }

  // 固定タスク追加ボタン
  const addBtn2 = document.getElementById('js-add-btn-2');
  const taskAddContainer2 = document.getElementById('js-task-add-container-2');
  if (addBtn2 && taskAddContainer2) {
    addBtn2.addEventListener('click', () => {
      taskAddContainer2.classList.remove('hidden');
    });
  }

  // 戻るボタン（通常タスク）
  const closeBtn1 = document.getElementById('js-close-btn1');
  if (closeBtn1 && taskAddContainer1) {
    closeBtn1.addEventListener('click', () => {
      taskAddContainer1.classList.add('hidden');
    });
  }

  // 戻るボタン（固定タスク）
  const closeBtn2 = document.getElementById('js-close-btn2');
  if (closeBtn2 && taskAddContainer2) {
    closeBtn2.addEventListener('click', () => {
      taskAddContainer2.classList.add('hidden');
    });
  }
});