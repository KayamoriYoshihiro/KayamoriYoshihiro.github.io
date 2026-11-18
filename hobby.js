const figureImages = [
    "images/figures/figure01.jpg",
    "images/figures/figure02.jpg",
    "images/figures/figure03.jpg",
    "images/figures/figure04.jpg",
    "images/figures/figure05.jpg",
    "images/figures/figure06.jpg",
    "images/figures/figure07.jpg",
    "images/figures/figure08.jpg",
    "images/figures/figure09.jpg",
    "images/figures/figure10.jpg"
];


/* =========================
   配列シャッフル
========================= */

function shuffle(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [result[i], result[j]] =
            [result[j], result[i]];
    }

    return result;
}


/* =========================
   1グループ作成
========================= */

function createGroup(images) {

    const group =
        document.createElement("div");

    group.className =
        "figure-group";

    images.forEach((src, index) => {

const img = document.createElement("img");

img.src = src;
img.alt = "";

group.appendChild(img);

    });

    return group;
}


/* =========================
   各列を生成
========================= */

document
    .querySelectorAll(".figure-track")
    .forEach(track => {

        const shuffled =
            shuffle(figureImages);

        /*
         * 同じグループを2つ並べることで
         * 完全な無限ループにする
         */
        const group1 =
            createGroup(shuffled);

        const group2 =
            createGroup(shuffled);

        /*
         * 画面外に余裕を持たせるため
         * さらにコピーを追加
         */
        const group3 =
            createGroup(shuffled);

        track.appendChild(group1);
        track.appendChild(group2);
        track.appendChild(group3);

    });