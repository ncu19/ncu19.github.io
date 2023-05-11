const form = document.getElementById('forgot-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;

  // Perform validation on email
  if (!email || !email.includes('@')) {
    message.innerHTML = '請輸入有效的電子郵件地址。';
    return;
  }

  // Perform some action to reset password, such as sending email
  // Here we just display a message indicating that password reset email has been sent
  message.innerHTML = '重置密碼的郵件已發送至您的電子郵件地址。';
});
