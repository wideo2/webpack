import $ from 'jquery';

import "bootstrap";

import './app/mystyle.css';

import 'bootstrap/dist/css/bootstrap.css';

$(function(){
    $("#changeBtn").on("click", function(){
        $("h1").text("글자가 변경되었습니다. 변경변경");
        //주석 변경
        
    });
});