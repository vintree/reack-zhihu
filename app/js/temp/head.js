import $ from 'jquery';
import React from 'react';

var Head = function() {};
Head.init  = function(tit) {
    var head = '';
    head += '<title>'+ tit +'</title>'
    head += '<link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">';
    head += '<link type="text/css" rel="stylesheet" href="../font/css/font-awesome.min.css">';
    $('head').append(head);
}

module.exports = Head;

//export default class Head {
//    init(tit) {
//        var head = '';
//        head += '<title>'+ tit +'</title>'
//    //head += '<meta charset="utf-8" />';
//        head += '<link type="text/css" rel="stylesheet" href="../font/css/font-awesome.min.css">';
//        $('head').append(head);
//    }
//};

//ReactDOM.render(
//    <Head />, document.getElementById('html')
//)