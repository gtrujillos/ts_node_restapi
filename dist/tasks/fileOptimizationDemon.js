var a222_0x15dd=['videoConverting','start','exploreDir','bind','env','IMAGE_FILES_FOLDER','readdir','forEach','split','existsSync','.mp4','createImageVideo','log','slice','join','ffmpeg','1/2','-loop','-c:v','-vf','scale=1920:1080','stdout','data','stderr:\x20','finished\x20mp4\x20convert','default','__esModule','child_process','spawn','is-image'];(function(_0x1f4970,_0x2bda50){var _0x488918=function(_0x1124a0){while(--_0x1124a0){_0x1f4970['push'](_0x1f4970['shift']());}};_0x488918(++_0x2bda50);}(a222_0x15dd,0x10a));var a222_0x4f1a=function(_0xb05a2c,_0x5589ec){_0xb05a2c=_0xb05a2c-0x0;var _0x58066a=a222_0x15dd[_0xb05a2c];return _0x58066a;};'use strict';Object['defineProperty'](exports,a222_0x4f1a('0x0'),{'value':!![]});const fs=require('fs');const spawn=require(a222_0x4f1a('0x1'))[a222_0x4f1a('0x2')];const fsExtra=require('fs-extra');const isImage=require(a222_0x4f1a('0x3'));class FileOptimizationTask{constructor(){this[a222_0x4f1a('0x4')]=![];}[a222_0x4f1a('0x5')](){const _0x2ab13c=setInterval(function(){this[a222_0x4f1a('0x6')]();}[a222_0x4f1a('0x7')](this),0x1388);}[a222_0x4f1a('0x6')](){const _0x18f8ee=process[a222_0x4f1a('0x8')][a222_0x4f1a('0x9')];console['log']('exploreDir:\x20'+_0x18f8ee);fs[a222_0x4f1a('0xa')](_0x18f8ee,(_0xee173,_0x277d32)=>{if(_0x277d32!=null){_0x277d32[a222_0x4f1a('0xb')](_0x5c90fc=>{const _0x7bce9b=0x14;const _0x579a6b=_0x5c90fc[a222_0x4f1a('0xc')]('.')['slice'](0x0,-0x1)['join']('.');if(isImage(_0x5c90fc)&&!this['videoConverting']&&!fsExtra[a222_0x4f1a('0xd')](_0x18f8ee+_0x579a6b+a222_0x4f1a('0xe'))){this[a222_0x4f1a('0x4')]=!![];this[a222_0x4f1a('0xf')](_0x18f8ee,_0x5c90fc,_0x7bce9b);}});}});}[a222_0x4f1a('0xf')](_0x68a09e,_0x11ffa8,_0x4e99e6=0x1e){const _0x49b2fb=_0x68a09e+''+_0x11ffa8;console[a222_0x4f1a('0x10')](_0x49b2fb);console[a222_0x4f1a('0x10')](_0x11ffa8);const _0x12bb37=_0x11ffa8[a222_0x4f1a('0xc')]('.')[a222_0x4f1a('0x11')](0x0,-0x1)[a222_0x4f1a('0x12')]('.');const _0x25cfe1=a222_0x4f1a('0x13');const _0x39d2b9=['-y','-r',a222_0x4f1a('0x14'),a222_0x4f1a('0x15'),'1','-pattern_type','glob','-i',_0x49b2fb,'-t',String(_0x4e99e6),a222_0x4f1a('0x16'),'libx264','-pix_fmt','yuv420p','-r','25',a222_0x4f1a('0x17'),a222_0x4f1a('0x18'),_0x68a09e+_0x12bb37+'.mp4'];const _0x5d3a38=spawn(_0x25cfe1,_0x39d2b9);_0x5d3a38[a222_0x4f1a('0x19')]['on'](a222_0x4f1a('0x1a'),function(_0x180897){console[a222_0x4f1a('0x10')]('Converting\x20'+_0x49b2fb);});_0x5d3a38['stderr']['on'](a222_0x4f1a('0x1a'),function(_0x2bd937){console[a222_0x4f1a('0x10')](a222_0x4f1a('0x1b')+_0x2bd937);}[a222_0x4f1a('0x7')](this));_0x5d3a38['on']('close',function(){console[a222_0x4f1a('0x10')](a222_0x4f1a('0x1c'));this[a222_0x4f1a('0x4')]=![];}[a222_0x4f1a('0x7')](this));}}exports[a222_0x4f1a('0x1d')]=FileOptimizationTask;