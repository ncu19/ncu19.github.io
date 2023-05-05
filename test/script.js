function login() {
	// 執行登入驗證，例如檢查用戶名和密碼是否正確

	// 驗證成功，跳轉到主頁面
	window.location.href = 'homepage.html';
}

function register() {
	// 執行註冊帳號

	window.location.href = 'register.html';
}

function forget() {
	// 忘記密碼
    
	window.location.href = 'homepage.html';
}

var timerId; // 存储计时器ID

function start() {
  // 开始计时器
  timerId = setInterval(function() {
    // 在此处更新计时器显示
    console.log("计时器正在运行...");
  }, 1000);
}

function pause() {
  // 暂停计时器
  clearInterval(timerId);
}

function stop() {
  // 停止计时器
  clearInterval(timerId);
  // 在此处重置计时器显示
  console.log("计时器已停止。");
}