var a223_0xb021=['videoConverting','existsSync','.mp4','createImageVideo','log','ffmpeg','1/2','-loop','-pattern_type','glob','-c:v','libx264','-pix_fmt','yuv420p','-vf','scale=1920:1080','stdout','stderr','data','stderr:\x20','close','finished\x20mp4\x20convert','default','defineProperty','__esModule','spawn','fs-extra','is-image','bind','IMAGE_FILES_FOLDER','exploreDir:\x20','readdir','forEach','slice','join'];(function(_0x2d89bc,_0x50fce2){var _0x2bd72a=function(_0x21d203){while(--_0x21d203){_0x2d89bc['push'](_0x2d89bc['shift']());}};_0x2bd72a(++_0x50fce2);}(a223_0xb021,0x175));var a223_0x3e19=function(_0x31be16,_0x26dc80){_0x31be16=_0x31be16-0x0;var _0x34bce7=a223_0xb021[_0x31be16];return _0x34bce7;};'use strict';Object[a223_0x3e19('0x0')](exports,a223_0x3e19('0x1'),{'value':!![]});const fs=require('fs');const spawn=require('child_process')[a223_0x3e19('0x2')];const fsExtra=require(a223_0x3e19('0x3'));const isImage=require(a223_0x3e19('0x4'));class FileOptimizationTask{constructor(){this['videoConverting']=![];}['start'](){const _0x4a60f9=setInterval(function(){this['exploreDir']();}[a223_0x3e19('0x5')](this),0x2710);}['exploreDir'](){const _0xba0f8f=process['env'][a223_0x3e19('0x6')];console['log'](a223_0x3e19('0x7')+_0xba0f8f);fs[a223_0x3e19('0x8')](_0xba0f8f,(_0x45474c,_0x2db1a2)=>{if(_0x2db1a2!=null){_0x2db1a2[a223_0x3e19('0x9')](_0x1b2870=>{const _0x4e14f1=0x14;const _0x223889=_0x1b2870['split']('.')[a223_0x3e19('0xa')](0x0,-0x1)[a223_0x3e19('0xb')]('.');if(isImage(_0x1b2870)&&!this[a223_0x3e19('0xc')]&&!fsExtra[a223_0x3e19('0xd')](_0xba0f8f+_0x223889+a223_0x3e19('0xe'))){this[a223_0x3e19('0xc')]=!![];this['createImageVideo'](_0xba0f8f,_0x1b2870,_0x4e14f1);}});}});}[a223_0x3e19('0xf')](_0x2ea86d,_0x5f4dfc,_0x3c48ee=0xa){const _0x152ec0=_0x2ea86d+''+_0x5f4dfc;console['log'](_0x152ec0);console[a223_0x3e19('0x10')](_0x5f4dfc);const _0x383523=_0x5f4dfc['split']('.')[a223_0x3e19('0xa')](0x0,-0x1)['join']('.');const _0x480aea=a223_0x3e19('0x11');const _0x3f5424=['-y','-r',a223_0x3e19('0x12'),a223_0x3e19('0x13'),'1',a223_0x3e19('0x14'),a223_0x3e19('0x15'),'-i',_0x152ec0,'-t',String(_0x3c48ee),a223_0x3e19('0x16'),a223_0x3e19('0x17'),a223_0x3e19('0x18'),a223_0x3e19('0x19'),'-r','25',a223_0x3e19('0x1a'),a223_0x3e19('0x1b'),_0x2ea86d+_0x383523+a223_0x3e19('0xe')];const _0x2cf76c=spawn(_0x480aea,_0x3f5424);_0x2cf76c[a223_0x3e19('0x1c')]['on']('data',function(_0x44e467){console[a223_0x3e19('0x10')]('Converting\x20'+_0x152ec0);});_0x2cf76c[a223_0x3e19('0x1d')]['on'](a223_0x3e19('0x1e'),function(_0x5bcc9){console[a223_0x3e19('0x10')](a223_0x3e19('0x1f')+_0x5bcc9);}[a223_0x3e19('0x5')](this));_0x2cf76c['on'](a223_0x3e19('0x20'),function(){console[a223_0x3e19('0x10')](a223_0x3e19('0x21'));this[a223_0x3e19('0xc')]=![];}[a223_0x3e19('0x5')](this));}}exports[a223_0x3e19('0x22')]=FileOptimizationTask;