// ==UserScript==
// @name         Change the background color of Spotify lyrics.
// @namespace    http://tampermonkey.net/
// @version      2024-06-14
// @description  Change the background color of Spotify lyrics. Spotifyの歌詞の背景色を変更するスクリプト。
// @author       telianghung@outlook.com
// @match        https://open.spotify.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spotify.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const fun = () =>{
         // 希望なcolor
        const color = 'rgb(121, 121, 121)'

        if(location.href !== "https://open.spotify.com/lyrics") return;

        const backgroundColor = `--lyrics-color-background: ${color};`

        const lyricsElement = document.querySelector('[aria-label="Spotify"] > :first-child')

        if (!lyricsElement) return;

        // 正規表現を使って --lyrics-color-background: rgb(...) の値を抽出
        const match = lyricsElement.style.cssText.match(/--lyrics-color-background:\s*rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\);/);

        // 抽出した値が期待する値かどうかを確認
        if (match && match[0] !== backgroundColor) {
            lyricsElement.style.cssText= lyricsElement.style.cssText.replace(/(--lyrics-color-background:\s*rgb\([^)]+\);)/g, backgroundColor)
            console.log('background colorを変えた')
        }
    }


    setInterval(fun, 1000)
})();
