var a223_0x5666=['readdir','split','join','existsSync','.mp4','createImageVideo','ffmpeg','1/2','-pattern_type','-c:v','-pix_fmt','yuv420p','-vf','scale=1920:1080','stdout','data','Converting\x20','stderr:\x20','close','finished\x20mp4\x20convert','default','child_process','spawn','is-image','videoConverting','start','exploreDir','bind','IMAGE_FILES_FOLDER','log'];(function(_0x29f87f,_0x50fc86){var _0x12a170=function(_0x2eaccf){while(--_0x2eaccf){_0x29f87f['push'](_0x29f87f['shift']());}};_0x12a170(++_0x50fc86);}(a223_0x5666,0x105));var a223_0x20a7=function(_0x378d10,_0x4a9a7b){_0x378d10=_0x378d10-0x0;var _0x527e0b=a223_0x5666[_0x378d10];return _0x527e0b;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const fs=require('fs');const spawn=require(a223_0x20a7('0x0'))[a223_0x20a7('0x1')];const fsExtra=require('fs-extra');const isImage=require(a223_0x20a7('0x2'));class FileOptimizationTask{constructor(){this[a223_0x20a7('0x3')]=![];}[a223_0x20a7('0x4')](){const _0x296af0=setInterval(function(){this[a223_0x20a7('0x5')]();}[a223_0x20a7('0x6')](this),0x2710);}[a223_0x20a7('0x5')](){const _0x5ab55d=process['env'][a223_0x20a7('0x7')];console[a223_0x20a7('0x8')]('exploreDir:\x20'+_0x5ab55d);fs[a223_0x20a7('0x9')](_0x5ab55d,(_0x4e9dbc,_0x1c7a9e)=>{if(_0x1c7a9e!=null){_0x1c7a9e['forEach'](_0x5039fb=>{const _0x44a0f9=0x14;const _0x402677=_0x5039fb[a223_0x20a7('0xa')]('.')['slice'](0x0,-0x1)[a223_0x20a7('0xb')]('.');if(isImage(_0x5039fb)&&!this['videoConverting']&&!fsExtra[a223_0x20a7('0xc')](_0x5ab55d+_0x402677+a223_0x20a7('0xd'))){this[a223_0x20a7('0x3')]=!![];this[a223_0x20a7('0xe')](_0x5ab55d,_0x5039fb,_0x44a0f9);}});}});}[a223_0x20a7('0xe')](_0x3001c6,_0x44b63c,_0x1e0720=0xa){const _0x2aa181=_0x3001c6+''+_0x44b63c;console[a223_0x20a7('0x8')](_0x2aa181);console[a223_0x20a7('0x8')](_0x44b63c);const _0x13b052=_0x44b63c[a223_0x20a7('0xa')]('.')['slice'](0x0,-0x1)[a223_0x20a7('0xb')]('.');const _0x3537d5=a223_0x20a7('0xf');const _0x36a2ec=['-y','-r',a223_0x20a7('0x10'),'-loop','1',a223_0x20a7('0x11'),'glob','-i',_0x2aa181,'-t',String(_0x1e0720),a223_0x20a7('0x12'),'libx264',a223_0x20a7('0x13'),a223_0x20a7('0x14'),'-r','25',a223_0x20a7('0x15'),a223_0x20a7('0x16'),_0x3001c6+_0x13b052+a223_0x20a7('0xd')];const _0x411203=spawn(_0x3537d5,_0x36a2ec);_0x411203[a223_0x20a7('0x17')]['on'](a223_0x20a7('0x18'),function(_0x342c7f){console['log'](a223_0x20a7('0x19')+_0x2aa181);});_0x411203['stderr']['on']('data',function(_0x7c047e){console[a223_0x20a7('0x8')](a223_0x20a7('0x1a')+_0x7c047e);}[a223_0x20a7('0x6')](this));_0x411203['on'](a223_0x20a7('0x1b'),function(){console[a223_0x20a7('0x8')](a223_0x20a7('0x1c'));this[a223_0x20a7('0x3')]=![];}[a223_0x20a7('0x6')](this));}}exports[a223_0x20a7('0x1d')]=FileOptimizationTask;