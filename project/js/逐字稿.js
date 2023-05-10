const textfile = document.getElementById("textfile");
textfile.addEventListener("change", function() {
  const file = this.files[0];
  const fileType = file.type;
  if (fileType !== "text/plain" && fileType !== "text/html") {
    alert("請上傳文字檔");
    this.value = "";
  }
});

function confirm(){
  window.location.href = 'confirm.html';
}