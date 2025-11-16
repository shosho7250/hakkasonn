$(function () {
    $('.faq-accordion-header').click(function () { // .accordion-headerをクリックで発火
        $(this).next().slideToggle();
        // $(this)...$('.accordion-header')の.next()...次の要素が.slideToggle()...表示と非表示を交互にする
        $(this).toggleClass('active');
        // $(this)...$('.accordion-header')に、activeというクラスが追加と削除を交互にする
    });
});