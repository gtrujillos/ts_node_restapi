var a222_0x13ca=['videoConverting','start','exploreDir','bind','IMAGE_FILES_FOLDER','log','exploreDir:\x20','readdir','forEach','slice','join','existsSync','.mp4','createImageVideo','split','ffmpeg','-pattern_type','glob','-c:v','libx264','yuv420p','-vf','scale=1920:1080','Converting\x20','stderr','data','close','finished\x20mp4\x20convert','default','child_process','spawn','is-image'];(function(_0x2d753c,_0x35065c){var _0x5d5652=function(_0x3ad0c1){while(--_0x3ad0c1){_0x2d753c['push'](_0x2d753c['shift']());}};_0x5d5652(++_0x35065c);}(a222_0x13ca,0x7d));var a222_0x1020=function(_0x5da985,_0x363f9d){_0x5da985=_0x5da985-0x0;var _0x5d90eb=a222_0x13ca[_0x5da985];return _0x5d90eb;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const fs=require('fs');const spawn=require(a222_0x1020('0x0'))[a222_0x1020('0x1')];const fsExtra=require('fs-extra');const isImage=require(a222_0x1020('0x2'));class FileOptimizationTask{constructor(){this[a222_0x1020('0x3')]=![];}[a222_0x1020('0x4')](){const _0x3aff67=setInterval(function(){this[a222_0x1020('0x5')]();}[a222_0x1020('0x6')](this),0x1388);}[a222_0x1020('0x5')](){const _0x49a06d=process['env'][a222_0x1020('0x7')];console[a222_0x1020('0x8')](a222_0x1020('0x9')+_0x49a06d);fs[a222_0x1020('0xa')](_0x49a06d,(_0x4c37e8,_0x8c392f)=>{if(_0x8c392f!=null){_0x8c392f[a222_0x1020('0xb')](_0x545a34=>{const _0x13d5fd=0x14;const _0x1b26cd=_0x545a34['split']('.')[a222_0x1020('0xc')](0x0,-0x1)[a222_0x1020('0xd')]('.');if(isImage(_0x545a34)&&!this['videoConverting']&&!fsExtra[a222_0x1020('0xe')](_0x49a06d+_0x1b26cd+a222_0x1020('0xf'))){this['videoConverting']=!![];this[a222_0x1020('0x10')](_0x49a06d,_0x545a34,_0x13d5fd);}});}});}['createImageVideo'](_0x567139,_0x45a12f,_0x2fa15c=0x1e){const _0x74ce19=_0x567139+''+_0x45a12f;console[a222_0x1020('0x8')](_0x74ce19);console[a222_0x1020('0x8')](_0x45a12f);const _0x50ce71=_0x45a12f[a222_0x1020('0x11')]('.')[a222_0x1020('0xc')](0x0,-0x1)[a222_0x1020('0xd')]('.');const _0x3fdd83=a222_0x1020('0x12');const _0x5445e1=['-y','-r','1/2','-loop','1',a222_0x1020('0x13'),a222_0x1020('0x14'),'-i',_0x74ce19,'-t',String(_0x2fa15c),a222_0x1020('0x15'),a222_0x1020('0x16'),'-pix_fmt',a222_0x1020('0x17'),'-r','25',a222_0x1020('0x18'),a222_0x1020('0x19'),_0x567139+_0x50ce71+a222_0x1020('0xf')];const _0x3e2d11=spawn(_0x3fdd83,_0x5445e1);_0x3e2d11['stdout']['on']('data',function(_0xd446a3){console[a222_0x1020('0x8')](a222_0x1020('0x1a')+_0x74ce19);});_0x3e2d11[a222_0x1020('0x1b')]['on'](a222_0x1020('0x1c'),function(_0xf22920){console[a222_0x1020('0x8')]('stderr:\x20'+_0xf22920);}['bind'](this));_0x3e2d11['on'](a222_0x1020('0x1d'),function(){console[a222_0x1020('0x8')](a222_0x1020('0x1e'));this[a222_0x1020('0x3')]=![];}[a222_0x1020('0x6')](this));}}exports[a222_0x1020('0x1f')]=FileOptimizationTask;