var a102_0x5cfc=['bind','env','IMAGE_FILES_FOLDER','join','existsSync','createImageVideo','split','slice','1/2','-loop','-pattern_type','glob','libx264','scale=1920:1080','stdout','Converting\x20','stderr','data','stderr:\x20','close','default','defineProperty','__esModule','spawn','fs-extra','videoConverting','log','setInterval','exploreDir'];(function(_0x568727,_0x3e66d0){var _0x1ac516=function(_0x52cb03){while(--_0x52cb03){_0x568727['push'](_0x568727['shift']());}};_0x1ac516(++_0x3e66d0);}(a102_0x5cfc,0x154));var a102_0x5e42=function(_0x231bb0,_0x80c167){_0x231bb0=_0x231bb0-0x0;var _0xae12c7=a102_0x5cfc[_0x231bb0];return _0xae12c7;};'use strict';Object[a102_0x5e42('0x0')](exports,a102_0x5e42('0x1'),{'value':!![]});const fs=require('fs');const spawn=require('child_process')[a102_0x5e42('0x2')];const fsExtra=require(a102_0x5e42('0x3'));const isImage=require('is-image');class FileOptimizationDemon{constructor(){this[a102_0x5e42('0x4')]=![];}['start'](){const _0x203b8a=setInterval(function(){console[a102_0x5e42('0x5')](a102_0x5e42('0x6'));this[a102_0x5e42('0x7')]();}[a102_0x5e42('0x8')](this),0x1388);}[a102_0x5e42('0x7')](){const _0x28f40d=process[a102_0x5e42('0x9')][a102_0x5e42('0xa')];console['log'](_0x28f40d);fs['readdir'](_0x28f40d,(_0x4f04eb,_0x985013)=>{if(_0x985013!=null){_0x985013['forEach'](_0x343548=>{const _0x5c7a61=0x1e;console['log'](_0x343548);const _0x5c344d=_0x343548['split']('.')['slice'](0x0,-0x1)[a102_0x5e42('0xb')]('.');if(isImage(_0x343548)&&!this['videoConverting']&&!fsExtra[a102_0x5e42('0xc')](_0x28f40d+_0x5c344d+'.mp4')){this['videoConverting']=!![];this[a102_0x5e42('0xd')](_0x28f40d,_0x343548,_0x5c7a61);}});}});}['createImageVideo'](_0x5703d9,_0x1affa1,_0x5912fd=0x1e){const _0x5c51b9=_0x5703d9+''+_0x1affa1;console[a102_0x5e42('0x5')](_0x5c51b9);console['log'](_0x1affa1);const _0xe44aa5=_0x1affa1[a102_0x5e42('0xe')]('.')[a102_0x5e42('0xf')](0x0,-0x1)[a102_0x5e42('0xb')]('.');const _0x3146f8='ffmpeg';const _0x33631c=['-y','-r',a102_0x5e42('0x10'),a102_0x5e42('0x11'),'1',a102_0x5e42('0x12'),a102_0x5e42('0x13'),'-i',_0x5c51b9,'-t',String(_0x5912fd),'-c:v',a102_0x5e42('0x14'),'-pix_fmt','yuv420p','-r','25','-vf',a102_0x5e42('0x15'),_0x5703d9+_0xe44aa5+'.mp4'];const _0x567520=spawn(_0x3146f8,_0x33631c);_0x567520[a102_0x5e42('0x16')]['on']('data',function(_0xd9cbdf){console[a102_0x5e42('0x5')](a102_0x5e42('0x17')+_0x5c51b9);});_0x567520[a102_0x5e42('0x18')]['on'](a102_0x5e42('0x19'),function(_0x4a10c4){console['log'](a102_0x5e42('0x1a')+_0x4a10c4);}['bind'](this));_0x567520['on'](a102_0x5e42('0x1b'),function(){console['log']('finished\x20mp4\x20convert');this[a102_0x5e42('0x4')]=![];}['bind'](this));}}exports[a102_0x5e42('0x1c')]=FileOptimizationDemon;