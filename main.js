'use strict'

{

  let t = 0;


    // function draw() {
    //   const canvas = document.querySelector('canvas');
    //   if (typeof canvas.getContext === 'undefined') {
    //   return;
    // }
  // canvas定義
    // const ctx = canvas.getContext('2d');


    // let canvasParent = document.getElementById("canvasParent");

    var s = window.screen;
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");


    const CANVAS_WIDTH = 1660;
    const CANVAS_HEIGHT = 800;
    const dpr = window.devicepixelRatio || 1;
    console.log(dpr);
    c.width = CANVAS_WIDTH *dpr;
    c.height = CANVAS_HEIGHT *dpr;
    // ctx.scale(dpr, dpr);
    c.style.width = CANVAS_WIDTH + 'px';
    c.style.height = CANVAS_HEIGHT + 'px';

    var width = c.width = s.width;
    var height = c.height = s.height;
  }
    var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#$%^&*()*&^%";
    // var matrix = "ABCWENEVERFOGETTIJKLMNOPQRSTZ123456789#$%^&*()*&^%";

    matrix = matrix.split("");

    var font_size = 10;
    var columns = c.width / font_size;
    var drops = [];
    for(var x = 0; x < columns; x++)
    drops[x] = 1;

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = "#0F0";
      ctx.font = font_size + "px arial";
      for( var i = 0; i < drops.length; i++ ) {
        var text = matrix[ Math.floor( Math.random() * matrix.length ) ];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if( drops[i] * font_size > c.height && Math.random() > 0.975 )
        drops[i] = 0;
        drops[i]++;
      }
    }
    setInterval(draw, 35 );
