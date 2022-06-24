
const tggSidebar =  $('.toggle-sidebar')
const showCart = $('.header-select-showcart')
const searchIcon =  $('#search-icon')
const searchBox = $('#search-box')
const btnSearch = $('.header-select-search')
const label = document.querySelector('#form-search').querySelector('label')


$(window).on('load', function(event) {
    $('.loading').hide()
});

function showInputSearch() {
    $('.menu-options').removeClass('hide') 
    $('.product-search').removeClass('show')
}

function hideInputSearch() {
    $('.menu-options').addClass('hide')
    $('.product-search').addClass('show')
}


tggSidebar.click((e) => {
    tggSidebar.toggleClass('open')
    tggSidebar.toggleClass('border')
    showCart.toggleClass('border')
    let menutWrap = $('.menu-wrap')
    menutWrap.fadeToggle(400)
})


btnSearch.click(() =>{
    tggSidebar.toggleClass('open')
    tggSidebar.toggleClass('border')
    showCart.toggleClass('border')
    let menutWrap = $('.menu-wrap')
    menutWrap.fadeToggle(400)
    
    searchBox.addClass('show-input')
    searchBox.removeClass('hide-input')
    hideInputSearch()
})

searchBox.focus(() =>{ 
    searchBox.addClass('show-input')
    searchBox.removeClass('hide-input')
    $('#form-search label').attr("for","search-submit")
    hideInputSearch()
})

// //Xóa mặc định form không load lại trang
$('#search-submit').click((e)=>{
    e.preventDefault()
})

$('.header-content').click((e) =>{
    let isShow =!(e.target.closest('.menu-content-layout')) && 
                !e.target.closest('.open') &&
                !e.target.closest('.header-select-search') && 
                !e.target.closest('.product-search') 
    if(isShow){
        searchBox.addClass('hide-input')
        searchBox.removeClass('show-input')
        let label = $('#form-search label')
        label.attr("for","search-box")  
       showInputSearch()
    }
})

    
$('.toggle-link').click(function(){
    $(this).find('.menu-link').toggleClass('active')
    $(this).find('.icon-rotate').toggleClass('rotate-180')
    $(this).find('.menu-toggle-sub').slideToggle()
})


