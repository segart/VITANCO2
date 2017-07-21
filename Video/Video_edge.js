
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x5='rgba(0,0,0,0)',x8='rgba(255,255,255,1)',g='image',x4='both',xc='rgba(0,0,0,1)',x7='rgba(192,192,192,0.00)',m='rect',i='none';var g6='video-bg.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:x4,cg:x4,rI:n,cn:{dom:[{id:'barra_inferior',t:g,r:['0px','603px','1024px','166px','auto','auto'],f:[x5,'Images/barra_inferior.png','0px','0px']},{id:'video-bg2',t:g,r:['40px','39px','944px','584px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'Vitanco_V10',t:'video',tag:'video',r:['55px','52px','914px','514px','auto','auto'],cn:'controls',sr:['Video/Vitanco_V10.mp4'],pr:'auto'},{id:'btn4_2-VideoCopy',t:g,r:['797px','663px','95px','95px','auto','auto'],f:[x5,'Images/btn4_2-Video.png','0px','0px']},{id:'btn3_2-IPPCopy',t:g,r:['698px','663px','95px','95px','auto','auto'],f:[x5,'Images/btn3_2-IPP.png','0px','0px']},{id:'btn2_2-MonografiaCopy',t:g,r:['598px','663px','95px','95px','auto','auto'],f:[x5,'Images/btn2_2-Monografia.png','0px','0px']},{id:'btn1_2-Ayuda-VisualCopy',t:g,r:['499px','663px','95px','95px','auto','auto'],f:[x5,'Images/btn1_2-Ayuda-Visual.png','0px','0px']},{id:'btn_home_video',t:m,r:['9px','663px','316px','95px','auto','auto'],f:[x7],s:[0,xc,i]}],style:{'${Stage}':{isStage:true,r:['null','null','1024px','768px','auto','auto'],overflow:'hidden',f:[x8]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-602501467");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${btn1_2-Ayuda-VisualCopy}","click",function(sym,e){window.open("../Ayuda_Visual/01/Vitanco_APP_Ayuda-Visual_1.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btn2_2-MonografiaCopy}","click",function(sym,e){window.open("../Monografia/Contenido/Monografia_Contenido.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btn3_2-IPPCopy}","click",function(sym,e){window.open("../IPP/IPP_01.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btn4_2-VideoCopy}","click",function(sym,e){window.open("../../Video/Video.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${btn_home_video}","click",function(sym,e){window.open("../Vitanco_APP_Home.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-602501467");