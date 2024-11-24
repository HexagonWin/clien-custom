// ==UserScript==
// @name        clien-custom
// @namespace   clien-custom
// @match       https://www.clien.net/service/*
// @grant       none
// @version     1.0
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

// 자동로그인 옮기기
var check_auto = $(".side_account:nth-of-type(1) .account_submit .check_auto");
var button_submit = $(".side_account:nth-of-type(1) .side_account_area .button_submit");
check_auto.insertBefore(button_submit);
