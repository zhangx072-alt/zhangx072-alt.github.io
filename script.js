// 🌸 打字机效果（日语）
const text = "おはようございます、チョウショウです。一緒に勉強できて、楽しかったです。日本語学校は、日本の生活と学びの第一歩であり、卒業は終わりではなく、新たな始まりです。これからも変わらずに情熱を持ち続け、勇気を持って前へ進んでいけるように願っています……大家好，我是萧。怀念和大家一起学习的时光。语校作为日本的第一站，毕业不是结束，而是新的开始。";
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
    "このニ年間の笑顔や努力、そして出会いは、これからも大切な思い出となっていくでしょう。それぞれが違う道へ進んでも、皆さんの未来が輝きに満ちたものになりますよう……🌸 ご卒業おめでとうございます！心中有梦，脚下有路。毕业快乐，未来可期。";
}