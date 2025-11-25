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
    autoplaySpeed: 6000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    autoplay: true, // 自動再生
    centerMode: true,// 前後スライドを部分表示
    centerPadding: '33%',// 両端の見切れるスライド幅
    prevArrow: '<img src="img/トップベージ/arrow left.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="img/トップベージ/arrow right.png" class="slide-arrow next-arrow">',
    responsive: [
      {
        breakpoint: 500, // 500px未満で・・・
        settings: "unslick", // スライダーを無効
      },
    ],
  });

  $(window).on("resize orientationchange", function () {
    $(".slider").slick("resize");

  });

  $(".teacher-voice-contents").slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 6000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    autoplay: true, // 自動再生
    centerMode: true,// 前後スライドを部分表示
    centerPadding: '33%',// 両端の見切れるスライド幅
    prevArrow: '<img src="img/トップベージ/arrow left.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="img/トップベージ/arrow right.png" class="slide-arrow next-arrow">',
    responsive: [
      {
        breakpoint: 500, // 500px未満で・・・
        settings: "unslick", // スライダーを無効
      },
    ],
  });

  $(window).on("resize orientationchange", function () {
    $(".slider").slick("resize");

  });
});



$(function () {
  $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
    $('.menu , .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});