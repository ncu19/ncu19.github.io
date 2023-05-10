// 確認上傳檔案是音檔
const audiofile = document.getElementById("audiofile");
audiofile.addEventListener("change", function() {
  const file = this.files[0];
  const fileType = file.type;
  if (fileType.indexOf("audio") === -1) {
    alert("請上傳音檔");
    this.value = "";
  }
});

function confirm(){
  window.location.href = 'confirm.html';
}






