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

  // slick
  $(".before-after").slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 3000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    autoplay: true, // 自動再生
    centerMode: true,// 前後スライドを部分表示
    centerPadding: '33%',// 両端の見切れるスライド幅
    prevArrow: '<img src="img/トップベージ/arrow left.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="img/トップベージ/arrow right.png" class="slide-arrow next-arrow">',

  });

  $(".teacher-voice-contents").slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 3000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    autoplay: true, // 自動再生
    centerMode: true,// 前後スライドを部分表示
    centerPadding: '33%',// 両端の見切れるスライド幅
    prevArrow: '<img src="img/トップベージ/arrow left.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="img/トップベージ/arrow right.png" class="slide-arrow next-arrow">',

  });


});



window.onload = function () {
  const fade = document.getElementsByClassName('kv-animation');
  fade[0].classList.add('show');
}


document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('.fade-left');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  targets.forEach(el => observer.observe(el));
});

$(function () {
  // ハンバーガーアイコンをクリックしたとき
  $('.js-btn').on('click', function () {
    $('.menu , .btn , .btn-line').toggleClass('open');
  });

  // メニューのリンクをクリックしたとき（スマホ時はメニューを閉じる）
  $('.menu a').on('click', function () {
    // スマホ幅のときだけ閉じたいなら条件をつける
    if (window.innerWidth <= 961) {  // ブレークポイントは好きに調整してOK
      $('.menu , .btn , .btn-line').removeClass('open');
    }
  });
});