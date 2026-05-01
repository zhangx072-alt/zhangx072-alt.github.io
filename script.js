// 🌸 打字机效果（日语）
const text = "おはようございます、チョウショウです。日本語学校で一緒に勉強できて楽しかったです。";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();


// 💬 留言功能
function addComment() {
    let msg = prompt("コメントを書いてください：");
    if (msg) {
        let area = document.getElementById("comments");
        area.innerHTML += `<div>💬 ${msg}</div>`;
    }
}


// 🎓 祝福按钮
function showWish() {
    document.getElementById("wish").innerText =
    "🌸 ご卒業おめでとうございます！";
}