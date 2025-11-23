// ========================
// ① jQuery アコーディオン
// ========================

$(function () {
    $('.faq-accordion-header').click(function () { // .accordion-headerをクリックで発火
        $(this).next().slideToggle();
        // $(this)...$('.accordion-header')の.next()...次の要素が.slideToggle()...表示と非表示を交互にする
        $(this).toggleClass('active');
        // $(this)...$('.accordion-header')に、activeというクラスが追加と削除を交互にする
    });
});

// CDNでGSAPとScrollTriggerを読み込んだ前提
gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll(".top-page-curriculum");

sections.forEach((section) => {
  const pin = section.querySelector(".top-page-curriculum_pin");

  ScrollTrigger.create({
    trigger: section,
    start: "top top",        // セクションが画面上端に来たら
    end: "+=100%",            // 1画面分スクロールで終了
    pin: pin,                 // pinに固定
    pinSpacing: false,        // 次の要素の位置をずらさず重ねる
    markers: true
  });
});
