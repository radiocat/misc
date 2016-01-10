// ==UserScript==
// @name         Tweet #NowPlaying of GPM
// @namespace    http://androidcat.seesaa.net/
// @version      0.1
// @description  Google Play Music の #NowPlaying をTwitterへ投稿
// @author       radiocat
// @match        https://play.google.com/music/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

$(document).ready(function () {
    $('body').append('<div class="rc-post" style="position: fixed; right: 5px; bottom: 5px; z-index : 1000;"><a href="#" id="rc-post-twitter" style="padding: 5px;">♪tweet</a></div>');

    $('#rc-post-twitter').on('click', function () {
        var $titleArea = $('#currently-playing-title');
        var title = $titleArea.text();
        if (title) {
            var artist = $('#player-artist').text();
            var album = $('#playerSongInfo > div.now-playing-info-wrapper > div.now-playing-info-content > div.currently-playing-details > div.player-album').text();
            var tweet = '♪' + title + ' / ' + artist + ' - ' + album;
            window.open('https://twitter.com/intent/tweet?text=' + tweet + '&hashtags=NowPlaying');
        }
    });
});
