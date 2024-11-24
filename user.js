// ==UserScript==
// @name        clien-custom
// @namespace   clien-custom
// @match       https://www.clien.net/service/*
// @grant       none
// @version     1.1
// @author      -
// @description Helper script for clien-custom
// ==/UserScript==

// 소모임 고치기
$('.menu_somoim #more').off();
var somoim =  document.getElementsByClassName('menu_somoim')[0];
somoim.firstElementChild.id = "";
somoim.firstElementChild.className = "menu-group all somoim";
tempsomoim = document.getElementsByClassName('menu-group somoim etc')[0];
somoim.insertBefore(tempsomoim, somoim.children[2]);
somoim.parentNode.insertAdjacentHTML('beforeend', `<button type="button" class="button_more" id="more"><span class="fa fa-angle-down"></span><span class="fa fa-angle-up"></span></button>`);
$('#more').click(function(){
  $('.menu_somoim').toggleClass('open');
  $('.button_more').toggleClass('open')
});
tempsomoim.insertAdjacentHTML('afterbegin', `<span class="fa fa-plus-square-o"></span>`);

// 고객지원 옮기기
var button_cs = document.getElementsByClassName('button_cs')[0];
var area_terms = document.getElementsByClassName('area_terms')[0];
area_terms.appendChild(button_cs);

// 게시글 정보 고치기
var view_count = $(".content_view .post_author .view_count:nth-of-type(1)");
var post_info = $(".content_view .post_info")
var post_author = $(".content_view .post_author");
var post_content = $(".content_view .post_view .post_content");
post_author.insertBefore(post_content);
post_info.append(view_count);

// 자동로그인 옮기기 (로그인 상태라면 오류 발생)
var check_auto = $(".side_account:nth-of-type(1) .account_submit .check_auto");
var button_submit = $(".side_account:nth-of-type(1) .side_account_area .button_submit");
var newbs = document.createElement("div");
button_submit.after(newbs);
newbs.className = "account_submit";
newbs.appendChild(check_auto[0]);
newbs.appendChild(button_submit[0]);
