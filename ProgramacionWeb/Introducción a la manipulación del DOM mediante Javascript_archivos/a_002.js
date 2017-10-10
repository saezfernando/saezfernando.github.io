 
var pub_ist_layer, pub_ist_w, pub_ist_h, pub_ist_duree, pub_ist_show, pub_ist_hide, pub_logo, pub_logo_url, pub_opacity, pub_zindex;var p_ist_hsobj=1;
pub_ist_duree=9000;
pub_ist_show='visible';
pub_ist_hide='hidden';
pub_logo='';
pub_logo_url='';
pub_opacity=100;
pub_zindex=1000;
pub_ist_OffsetTop='0';
if (pub_ist_OffsetTop.substr(0,1)=='#') pub_ist_OffsetTop='0';
var MyResize=1;


function pub_ist_ho(x) {if (document.getElementsByTagName) {for (i=0; i<document.getElementsByTagName(x).length; ++i) {obj=document.getElementsByTagName(x)[i]; if (obj.id.indexOf('pub_Flash')==-1) obj.style.visibility="hidden";}} else if (document.all) {for (i=0;i<document.all.tags(x).length;i++) {obj=document.all.tags(x)[i]; if (! obj || ! obj.offsetParent) continue; if (obj.id.indexOf('pub_Flash')==-1) obj.style.visibility="hidden";}};}
function pub_ist_so(x) {if (document.getElementsByTagName) {for (i=0; i<document.getElementsByTagName(x).length; ++i) {obj=document.getElementsByTagName(x)[i]; if (obj.id.indexOf("pub_Flash")==-1) obj.style.visibility="visible";}} else  if (document.all) {for (i=0;i<document.all.tags(x).length;i++) {obj=document.all.tags(x)[i];if (! obj || ! obj.offsetParent) continue; if (obj.id.indexOf("pub_Flash")==-1) obj.style.visibility="visible";}};};
function pub_ist_layer(name) {var obj=null; if (document.getElementById) obj = document.getElementById(name); else if (document.all) obj = document.all[name]; else if (document.layers) {pub_ist_show='show';pub_ist_hide='hide';return document.layers[name];}; if (obj) return obj.style;}

function pub_ist_hd() {MyResize=0;	if (!inter_div_style) {inter_div_style = pub_ist_layer("pub_ist_layer");inter_div_style_fond = pub_ist_layer("pub_ist_fond");}	if (inter_div_style) {	if (p_ist_hsobj) {pub_ist_so("OBJECT");		pub_ist_so("SELECT");		pub_ist_so("IFRAME");}	inter_div_style.left=-10000;inter_div_style_fond.left=-10000;	inter_div_style.top=-10000;inter_div_style_fond.top=-10000;		inter_div_style.width=1;inter_div_style_fond.width=1;		inter_div_style.height=1;inter_div_style_fond.height=1;		inter_div_style.visibility=pub_ist_hide;inter_div_style_fond.visibility=pub_ist_hide;	var myFlashContainer = document.getElementById('pub_ist_layer'); myFlashContainer.innerHTML = '';} else {    setTimeout("pub_ist_hd();", 500);}};


function pub_ist_resized() {
if(MyResize==1){
	if (!inter_div_style) {
		inter_div_style = pub_ist_layer('pub_ist_layer');
	    inter_div_style_fond = pub_ist_layer('pub_ist_fond');
	}
	if (inter_div_style) {

	    if (p_ist_hsobj) {
		    pub_ist_ho('OBJECT');
		    pub_ist_ho('select');
		    pub_ist_ho('IFRAME');
		}

		//pub_ist_pos();
		inter_div_style.left=0;
		inter_div_style.top=pub_ist_OffsetTop;
		inter_div_style_fond.left=0;
		inter_div_style_fond.top=pub_ist_OffsetTop;
		
		var sas_document;
		sas_document = null;
		if (typeof(sas_in_iframe_popout)!="undefined"&&sas_in_iframe_popout) {
			sas_document = top.document;
		} else {
			sas_document = document;
		}
		if (sas_document == null) {
			sas_document = document;
		}
		winheight = sas_document.documentElement.clientHeight > 0 ? sas_document.documentElement.scrollHeight : sas_document.body.scrollHeight ;
		winwidth = sas_document.documentElement.clientWidth > 0 ? sas_document.documentElement.clientWidth : sas_document.body.clientWidth ;
		
	//	alert(window.innerHeight);
	//	alert(document.body.clientHeight);
	//	alert(document.body.scrollHeight);
	//	alert(document.documentElement.clientHeight);
	//	alert(winheight);

		inter_div_style.width=winwidth + 'px';
		inter_div_style.height=winheight + 'px';
		inter_div_style_fond.width=winwidth + 'px';
		inter_div_style_fond.height=winheight + 'px';

		inter_div_style.visibility=pub_ist_show;
		inter_div_style_fond.visibility=pub_ist_show;
	} else {
		setTimeout("pub_ist_resized();", 500);
	}
}else{
    innerCode='';
}
}

var p492114_FlashMode8=0;
var p492114_FlashNN=(navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if ( p492114_FlashNN ) {
 p492114_FlashMode8=parseInt(p492114_FlashNN.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")[0]) >= 8;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0) {
 if (navigator.userAgent.indexOf("Win")>=0) {
 document.write('<SCR'+'IPT LANGUAGE=VBScript\> \n');
 document.write('on error resume next \n');
 document.write('p492114_FlashMode8=(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.8")))\n');
 document.write('</SCR'+'IPT\> \n');
 }
 else {
 p492114_FlashMode8=(navigator.userAgent.indexOf("Mac")>=0);
 }
}


if (window.innerHeight) {
	MyTabheight = window.innerHeight;
	MyTabwidth = window.innerWidth;
} else if (document.documentElement) {
	MyTabheight = document.documentElement.clientHeight > 0 ? document.documentElement.clientHeight : document.body.clientHeight ;
	MyTabwidth = document.documentElement.clientWidth > 0 ? document.documentElement.clientWidth : document.body.clientWidth ;
} else {
	MyTabheight = document.body.clientheight;
	MyTabwidth = document.body.clientWidth;
}

var innerCode = '<table width=100% height=100% border=0><tr><td align=center valign=top><table width='+MyTabwidth+' height='+(MyTabheight-6)+' border=0 ID="Table1">';
innerCode = innerCode + '<tr><td align=center valign=middle>';
if(pub_logo!=''){
    if(pub_logo_url!=''){
        innerCode = innerCode + '<a href="' + pub_logo_url + '" target="_blank"><img src="' + pub_logo + '" border="0"></a><br><br>';
    }else{
        innerCode = innerCode + '<img src="' + pub_logo + '" border="0"><br><br>';
    }
}

 var innerScript= 'var p_ist_hsobj=1;';
 innerScript=innerScript + 'function pub_ist_so(x) {if (document.getElementsByTagName) {for (i=0; i<document.getElementsByTagName(x).length; ++i) {obj=document.getElementsByTagName(x)[i]; if (obj.id.indexOf("pub_Flash")==-1) obj.style.visibility="visible";}} else  if (document.all) {for (i=0;i<document.all.tags(x).length;i++) {obj=document.all.tags(x)[i];if (! obj || ! obj.offsetParent) continue; if (obj.id.indexOf("pub_Flash")==-1) obj.style.visibility="visible";}};};';
 innerScript=innerScript + 'function pub_ist_layer(name) {var obj=null; if (document.getElementById) obj = document.getElementById(name); else if (document.all) obj = document.all[name]; else if (document.layers) {pub_ist_show="show";pub_ist_hide="hide";return document.layers[name];}; if (obj) return obj.style;};';
 innerScript=innerScript + 'function pub_ist_hd() {MyResize=0; inter_div_style = pub_ist_layer("pub_ist_layer");inter_div_style_fond = pub_ist_layer("pub_ist_fond");	if (inter_div_style) {		if (p_ist_hsobj) {pub_ist_so("OBJECT");		pub_ist_so("SELECT");		pub_ist_so("IFRAME");}		inter_div_style.left=-10000;inter_div_style_fond.left=-10000;		inter_div_style.top=-10000;inter_div_style_fond.top=-10000;		inter_div_style.width=1;inter_div_style_fond.width=1;		inter_div_style.height=1;inter_div_style_fond.height=1;		inter_div_style.visibility="hidden";inter_div_style_fond.visibility="hidden"; var myFlashContainer = document.getElementById("pub_ist_layer"); myFlashContainer.innerHTML = "";} else {		setTimeout("pub_ist_hd();", 500);	}};';





if (p492114_FlashMode8) {
innerCode=innerCode + '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
innerCode=innerCode + '  codebase="' + document.location.protocol + '//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" ';
innerCode=innerCode + ' id="pub_Flash2315010" width="336" height="280"> ';
innerCode=innerCode + ' <param name="allowScriptAccess" value="always" />';
innerCode=innerCode + ' <param name="movie" value="http://akamai.smartadserver.com/diff/159/492114/336x280_vstudio_2.swf"> ';
innerCode=innerCode + ' <param name="flashvars" value="target=_blank&clicktag=http://www2.smartadserver.com/diff/159/492114/go1.asp%3F492114;76878;8867356404314786392;7267791294;V;2315010&clickTag=http://www2.smartadserver.com/diff/159/492114/go1.asp%3F492114;76878;8867356404314786392;7267791294;V;2315010&clickTAG=http://www2.smartadserver.com/diff/159/492114/go1.asp%3F492114;76878;8867356404314786392;7267791294;V;2315010"> ';
innerCode=innerCode + ' <param name="quality" value="high"> ';
innerCode=innerCode + ' <param name="wmode" value="Opaque"> ';
innerCode=innerCode + ' <embed name="pub_Flash2315010" id="pub_Flash2315010" src="http://akamai.smartadserver.com/diff/159/492114/336x280_vstudio_2.swf" flashvars="target=_blank&clicktag=http://www2.smartadserver.com/diff/159/492114/go1.asp%3F492114;76878;8867356404314786392;7267791294;V;2315010&clickTag=http://www2.smartadserver.com/diff/159/492114/go1.asp%3F492114;76878;8867356404314786392;7267791294;V;2315010&clickTAG=http://www2.smartadserver.com/diff/159/492114/go1.asp%3F492114;76878;8867356404314786392;7267791294;V;2315010" ';
innerCode=innerCode + ' swLiveConnect="true" width="336" height="280" ';
innerCode=innerCode + ' quality="high" wmode="Opaque" ';
innerCode=innerCode + ' allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"> ';
innerCode=innerCode + '</embed> ';
innerCode=innerCode + '</object> ';
}
else
{
innerCode=innerCode + '<a href="http://www2.smartadserver.com/diff/159/492114/go0.asp?492114;76878;8867356404314786392;7267791294;V;2315010" target="_blank"><img src="http://www2.smartadserver.com/diff/159/492114/336x280_vstudio_2.gif" width=336 height=280 border="0"></a>';


}

innerCode=innerCode + '<br><a href="#" onclick="javascr'+'ipt:pub_ist_hd();return false;"><font face=Arial color=#000000 size=1>CERRAR</font></a>';

innerCode = innerCode + '</td></tr></table></td></tr></table>';

var sas_body;
sas_body = null;
if (typeof(sas_in_iframe_popout)!="undefined"&&sas_in_iframe_popout) {
	sas_body = top.document.body;
} else {
	sas_body = document.body;
}
if (sas_body != null) {
	try {

	    inter_div_fond=sas_body.ownerDocument.createElement("DIV");
		sas_body.insertBefore(inter_div_fond,sas_body.firstChild);
		inter_div_fond.id='pub_ist_fond';
		var s_fond=inter_div_fond.style;
		s_fond.visibility='hidden';
		s_fond.position='absolute';
		s_fond.zIndex=pub_zindex;
		s_fond.width = '100%';
		s_fond.height = '100%';
		s_fond.overflow = 'hidden';
		s_fond.background = '#FFFFFF';
		s_fond.filter='Alpha(opacity=' + pub_opacity + ')';
		s_fond.opacity=pub_opacity/100;
		inter_div_style_fond=inter_div_fond.style;

		scr=sas_body.ownerDocument.createElement("SCRIPT");
		sas_body.insertBefore(scr,sas_body.firstChild);
		scr.text = innerScript;

		inter_div=sas_body.ownerDocument.createElement("DIV");
		sas_body.insertBefore(inter_div,sas_body.firstChild);
		inter_div.id='pub_ist_layer';
		var s=inter_div.style;
		s.visibility='hidden';
		s.position='absolute';
		s.zIndex=pub_zindex+500;
		s.width = '100%';
		s.height = '100%';
		s.overflow = 'hidden';
		inter_div.innerHTML = innerCode;
		inter_div_style=inter_div.style;
	}catch(e){}
}




document.write('\r\n');



window.onresize=pub_ist_resized;

pub_ist_resized();
setTimeout("pub_ist_resized();", 500);
setTimeout("pub_ist_hd();", pub_ist_duree);
