var a96_0x1e32=['forEach','split','join','existsSync','.mp4','createImageVideo','slice','ffmpeg','1/2','-loop','glob','libx264','-pix_fmt','yuv420p','-vf','scale=1920:1080','stderr','stderr:\x20','close','finished\x20mp4\x20convert','defineProperty','__esModule','child_process','spawn','is-image','videoConverting','start','log','setInterval','exploreDir','bind','env','IMAGE_FILES_FOLDER'];(function(_0x32e9be,_0x56ad89){var _0x5d8450=function(_0x277eb9){while(--_0x277eb9){_0x32e9be['push'](_0x32e9be['shift']());}};_0x5d8450(++_0x56ad89);}(a96_0x1e32,0x1a0));var a96_0xe9a2=function(_0x3b2fb4,_0xd52de0){_0x3b2fb4=_0x3b2fb4-0x0;var _0x299418=a96_0x1e32[_0x3b2fb4];return _0x299418;};'use strict';Object[a96_0xe9a2('0x0')](exports,a96_0xe9a2('0x1'),{'value':!![]});const fs=require('fs');const spawn=require(a96_0xe9a2('0x2'))[a96_0xe9a2('0x3')];const fsExtra=require('fs-extra');const isImage=require(a96_0xe9a2('0x4'));class FileOptimizationDemon{constructor(){this[a96_0xe9a2('0x5')]=![];}[a96_0xe9a2('0x6')](){const _0xc7a0ce=setInterval(function(){console[a96_0xe9a2('0x7')](a96_0xe9a2('0x8'));this[a96_0xe9a2('0x9')]();}[a96_0xe9a2('0xa')](this),0x1388);}[a96_0xe9a2('0x9')](){const _0x20ad22=process[a96_0xe9a2('0xb')][a96_0xe9a2('0xc')];console[a96_0xe9a2('0x7')](_0x20ad22);fs['readdir'](_0x20ad22,(_0x530700,_0x3db090)=>{if(_0x3db090!=null){_0x3db090[a96_0xe9a2('0xd')](_0x48b9c8=>{const _0x53d95f=0x1e;console[a96_0xe9a2('0x7')](_0x48b9c8);const _0x5d39ae=_0x48b9c8[a96_0xe9a2('0xe')]('.')['slice'](0x0,-0x1)[a96_0xe9a2('0xf')]('.');if(isImage(_0x48b9c8)&&!this['videoConverting']&&!fsExtra[a96_0xe9a2('0x10')](_0x20ad22+_0x5d39ae+a96_0xe9a2('0x11'))){this[a96_0xe9a2('0x5')]=!![];this['createImageVideo'](_0x20ad22,_0x48b9c8,_0x53d95f);}});}});}[a96_0xe9a2('0x12')](_0x44de5f,_0x11164a,_0xf88bee=0x1e){const _0x1fe0e2=_0x44de5f+''+_0x11164a;console['log'](_0x1fe0e2);console['log'](_0x11164a);const _0x5571d4=_0x11164a['split']('.')[a96_0xe9a2('0x13')](0x0,-0x1)['join']('.');const _0x28abf8=a96_0xe9a2('0x14');const _0x378707=['-y','-r',a96_0xe9a2('0x15'),a96_0xe9a2('0x16'),'1','-pattern_type',a96_0xe9a2('0x17'),'-i',_0x1fe0e2,'-t',String(_0xf88bee),'-c:v',a96_0xe9a2('0x18'),a96_0xe9a2('0x19'),a96_0xe9a2('0x1a'),'-r','25',a96_0xe9a2('0x1b'),a96_0xe9a2('0x1c'),_0x44de5f+_0x5571d4+a96_0xe9a2('0x11')];const _0x2260ee=spawn(_0x28abf8,_0x378707);_0x2260ee['stdout']['on']('data',function(_0x1d405e){console['log']('Converting\x20'+_0x1fe0e2);});_0x2260ee[a96_0xe9a2('0x1d')]['on']('data',function(_0x1dd777){console[a96_0xe9a2('0x7')](a96_0xe9a2('0x1e')+_0x1dd777);}[a96_0xe9a2('0xa')](this));_0x2260ee['on'](a96_0xe9a2('0x1f'),function(){console[a96_0xe9a2('0x7')](a96_0xe9a2('0x20'));this[a96_0xe9a2('0x5')]=![];}[a96_0xe9a2('0xa')](this));}}exports['default']=FileOptimizationDemon;