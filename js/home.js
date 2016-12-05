$(document).ready(function(){
//welcome
    welcome();
//#banner-autoAd
    autoAd("#banner-autoAd","#autoAd-pic","#autoAd-list",300);
//shop-car
    shopCar();
//flashSale-time
    showLeftTime(23,59,59);
//flashSale-ad
    flashSaleScroll();
//banner-sidebar  
    autoSidebar("#sidebar-autoAd","#sidebar-pic","#sidebar-list",226);
//hot-sale
    manualAd();
//mobile-recharg
    mobileRecharg();
//good-opinion
    slidingdoors();
//good-recommending
    manualAd2();
    autoSidebar("#sidebar-autoAd2","#sidebar-pic2","#sidebar-list2",238);
//Overseas-shopping
    modelAutoad("#model-autoad-box","#model-autoad","#model-autobar");
    subAutoad("#subAds-btn","#subAds-box");
//Mobile-photography
    modelAutoad("#model-autoad-box2","#model-autoad2","#model-autobar2");
    subAutoad("#subAds-btn2","#subAds-box2");
//Tablet-PC
    modelAutoad("#model-autoad-box3","#model-autoad3","#model-autobar3");
    subAutoad("#subAds-btn3","#subAds-box3");
//Household-appliances
    modelAutoad("#model-autoad-box4","#model-autoad4","#model-autobar4");
    subAutoad("#subAds-btn4","#subAds-box4");
//Department-store
    modelAutoad("#model-autoad-box5","#model-autoad5","#model-autobar5");
    subAutoad("#subAds-btn5","#subAds-box5");
//slidingbar
    slidingBar("#slidingBar");
})
// --------------------------------------------------------------------------------------------------------------------
function welcome(){
    var time=new Date(),
        h=time.getHours(),
        $welcome=$("#welcome");
    if (h<12) {
        $welcome.text("上午好，欢迎来新蛋购物！");
    }else if(h<14){
    	$welcome.text("中午好，欢迎来新蛋购物！");
    }else if(h<18){
    	$welcome.text("下午好，欢迎来新蛋购物！");
    }else{
    	$welcome.text("晚上好，欢迎来新蛋购物！");
    }
}
// -------------------------------------------------------------------------
function autoAd(boxid,picid,listid,time){
		var $autoAdBox=$(boxid);
		var $pic=$(picid).children("li");
		var $list=$(listid).children("li");
		var index=0;
		var timer=null;
		if($pic.length!=$list.length) return;
		function changePic(current,time){
			$pic.each(function(i, ele) {
				$(ele).fadeOut(0);
			});
			$list.each(function(i, ele) {
				$(ele).css("background-color","#737373");
			});
			$pic.eq(current).fadeIn(time);
			$list.eq(current).css("background-color","#ff6600");
		}
		function autoPlay() {
			index++;
			if(index>=$pic.length){
				index=0;
			}
			changePic(index,time);
		}
		timer=setInterval(autoPlay,5000);
	 	$autoAdBox.mouseover(function() {
			clearInterval(timer);
		})
		$autoAdBox.mouseout(function() {
            clearInterval(timer);
			timer=setInterval(autoPlay,5000);
		})
		$list.each(function(i, ele) {
			ele.id=i;
			$(ele).mouseover(function() {
				clearInterval(timer);
				changePic(this.id,0);
				index=this.id;
			});
		});
	}
// ---------------------------------------------------------------------
function shopCar(){
	var $shopCar=$("#shop-car"),
	    $shopCollect=$("#shop-collect");
	$shopCar.mouseover(function(){
		$("#shop-tips").removeClass("hide");
	})
	$shopCar.mouseout(function(){
		$("#shop-tips").addClass(" hide");
	})
	$shopCollect.mouseover(function(){
		$("#collect-tips").removeClass("hide");
	})
	$shopCollect.mouseout(function(){
		$("#collect-tips").addClass(" hide");
	})
}
// ---------------------------------------------------------------------
function showLeftTime(hours,minutes,seconds){
    var timer=setInterval(countTime,1000)
	function countTime(){
		    var end=new Date();
	            end.setHours(hours);
		        end.setMinutes(minutes);
		        end.setSeconds(seconds);
			var now=new Date(),
				leftTime=parseInt((end.getTime()-now.getTime())/1000),
        	    hour=parseInt(leftTime/(60*60)%24),
			    minute=parseInt(leftTime/60%60),
			    second=parseInt(leftTime%60);
			if (hour<=9) hour="0"+hour;
			if (minute<=9) minute="0"+minute;
		    if (second<=9) second="0"+second;
            $("#hour").text(hour);
		    $("#minute").text(minute);
		    $("#second").text(second);
        }
	}
// ---------------------------------------------------------------------
function flashSaleScroll(){
	var $scrollArea=$("#scrollArea"),
	    $leftBtn=$("#left-btn"),
	    $rightBtn=$("#right-btn"),
	    flag=false,
	    timer=null;
	function autoScroll(){
		if(!flag){
			scrollLeft();
		    setTimeout(function(){
			scrollRight();
		    },5000);
		}else{
			scrollRight();
			setTimeout(function(){
			scrollLeft();
		    },5000);
		};
	}
	timer=setInterval(autoScroll,10000);
    $leftBtn.click(function(){
    	if(!flag){
    		clearInterval(timer);
    		scrollLeft();
    		timer=setInterval(autoScroll,10000);
    	}
    })
    $rightBtn.click(function(){
    	if(flag){
    		clearInterval(timer);
    		scrollRight();
    		timer=setInterval(autoScroll,10000);
    	}
    })
    function scrollLeft(){
    	$scrollArea.animate({marginLeft:"-742px"},"slow");
		$rightBtn.removeClass("right-btnT").addClass("right-btn");
		$leftBtn.removeClass("left-btn").addClass("left-btnT");
		flag=true;
    }
    function scrollRight(){
    	$scrollArea.animate({marginLeft:"0px"},"slow");
		$leftBtn.removeClass("left-btnT").addClass("left-btn");
		$rightBtn.removeClass("right-btn").addClass("right-btnT");
		flag=false;
    }
}
// ---------------------------------------------------------------------
function autoSidebar(boxId,picId,barId,picW){
	var $box=$(boxId),
	    $picBox=$(picId),
	    $pics=$picBox.children("li"),
	    $bars=$(barId).children("li"),
	    index=0,
	    timer=null;
	    if($pics.length!=$bars.length) return;
	function changePic(current){
		$picBox.animate({marginLeft:-picW*current+"px"},"slow");
		$bars.each(function(i,ele){
			$(ele).removeClass("sidebar-item-on");
		})
		$bars.eq(current).addClass(" sidebar-item-on");
	}
	function autoPlay() {
		index++;
		if(index>=$pics.length){
			index=0;
		}
		changePic(index);
    }
    timer=setInterval(autoPlay,4000);
    $box.mouseover(function(){
        clearInterval(timer);
    });
    $box.mouseout(function(){
    	clearInterval(timer);
        timer=setInterval(autoPlay,4000);
    });
    $bars.each(function(i,ele){
        ele.id=i;
        $(ele).mouseover(function() {
				clearInterval(timer);
				changePic(this.id);
				index=this.id;
			});
    })
}
// ---------------------------------------------------------------------
function manualAd(){
    var $changeBtn=$("#change-btn"),
        $changeBox=$("#hot-sale-ad"),
        index=1;
    $changeBtn.click(function(){
    	$changeBox.animate({"marginLeft":-960*index+"px"},"slow");
    	index++;
    	if(index>=4){index=0};
    })
}
// ---------------------------------------------------------------------
function mobileRecharg(){
	var $pay=$("#pay"),
	    $number=$("#number"),
	    $denomination=$("#money").children("option");
	    $denomination.each(function(i,ele){
            $(ele).click(function(){
            	$pay.text(this.value);
            })
	    })
        $number.keyup(function(event){
        	var $num=$number.val();
        	var reg = /[0-9]{4}$/;
        	if(event.which!=8){
                if (reg.test($num)) {
                   $number.val($num+" ");
                }
        	}
        });
}
// ---------------------------------------------------------------------
function slidingdoors(){
    var $box=$("#good-opinion-box"),
        $door=$box.children("li"),
        doorWidth=$door.eq(0).outerWidth(),
        exposeWidth=174,
        hideWidth=doorWidth-exposeWidth;
        function location(){
        	$door.not($door[0]).each(function(i,ele){
        	$(ele).css("left",doorWidth+exposeWidth*i+"px");
            })
        }
        location();
        $door.each(function(i,ele){
        	$(ele).mouseover(function(){
                location();
                for(var j=1;j<=i;j++){
                $door.eq(j).css("left",parseInt($door.eq(j).css("left"),10)-hideWidth+"px");
                }
        	});
        });
}
// ---------------------------------------------------------------------
function manualAd2(){
    var $btn=$("#recommend-title").children("span"),
        $pannel=$("#recommend-body").children("li");
    if($btn.length!=$pannel.length) return;
    $btn.each(function(i,ele){
        $(ele).mouseover(function(){
            $btn.each(function(i,ele){
            	$(ele).removeClass("recommend-on");
            })
            $pannel.each(function(i,ele){
            	$(ele).css("display","none");
            })
            $(this).addClass(" recommend-on");
            $pannel.eq(i).css("display","block");
        })
    })
}
//-----------------------------------------------------------------------
function modelAutoad(boxId,picId,barId){ 
	var $box=$(boxId),
	    $picBox=$(picId),
	    $bar=$(barId).children("li"),
	    index=0,
	    timer=null;
	function changePic(current){
        $picBox.animate({"marginLeft":-current*485+"px"}, "slow");
        $bar.each(function(i,ele){
        	$bar.each(function(i,ele){
        		$(ele).removeClass("bar-on");
        	})
        	$bar.eq(current).addClass("bar-on");
        })
	}
	function autoPlay(){
		index++;
		if (index>=$bar.length) {
			index=0;
		}
		changePic(index);
	}
	timer=setInterval(autoPlay,3000);
	$box.mouseover(function(){
		clearInterval(timer);
	})
	$box.mouseout(function(){
		clearInterval(timer);
		timer=setInterval(autoPlay,3000);
	})
	$bar.each(function(i,ele){
		ele.flag=i;
    	$(ele).mouseover(function(){
            clearInterval(timer);
		    changePic(this.flag);
		    index=this.flag;
    	});
    })
}
//-----------------------------------------------------------------------
function subAutoad(barId,pageId){ 
	var $bar=$(barId).children("span.btn-item"),
        $page=$(pageId).children("li");
    function changePage(current){
        $bar.each(function(i,ele){
        	$(ele).removeClass("btn-item-on");
        })
        $bar.eq(current).addClass("btn-item-on");
        $page.each(function(i,ele){
        	$(ele).hide();
        })
        $page.eq(current).show();
    }
    $bar.each(function(i,ele){
        $(ele).mouseover(function(){
        	changePage(i);
        });
    })
}
//----------------------------------------------------------------------
function slidingBar(barId){
    $(window).scroll(function () {
        if ($(window).scrollTop()>213) {
            $(barId).fadeIn("fast");
        }else{
        	 $(barId).fadeOut("fast");
        }
    });  
}
