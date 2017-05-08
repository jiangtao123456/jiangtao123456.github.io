$(document).ready(function(){ 
	var time1,
	 time = 30; //设置倒计时时间；
	$('#home').css('display', 'block');
	$('#home1').css('display', 'none');
	$('#gamepre').css('display', 'none');
	$('#rule').css('display', 'none');
	$('#game1').css('display', 'none');
	$('#failure').css('display','none');
	$('#congratulation').css('display','none');

	setTimeout(function(){
		$('#home').css('display', 'none');
		$('#home1').css('display', 'block');
	}, 3000);
	$('#home1').click(function(){
		$('#home1').css('display', 'none');
		$('#gamepre').css('display', 'block');
	});
	$('#gotogame').click(function(){
		$('#home1').css('display', 'none');
		$('#gamepre').css('display', 'block');
	});
	$('#gotorule').click(function(){
		$('#home1').css('display', 'none');
		$('#rule').css('display', 'block');
	});
	$('#next').click(function(){
		$('#game1').css('display', 'block');
		$('#home1').css('display', 'none');
		$('#gamepre').css('display', 'none');
		$('#rule').css('display', 'none');
		alert("游戏开始，请在30秒内通关！");

		timeoutFn();
	});
	$('#goback').click(function(){
		$('#home1').css('display', 'block');
		$('#gamepre').css('display', 'none');
		$('#rule').css('display', 'none');
	});
	$('#goback1').click(function(){
		$('#home1').css('display', 'none');
		$('#gamepre').css('display', 'block');
		$('#rule').css('display', 'none');
		$('#game1').css('display', 'none');
	});
	
	$('#failure').click(function(){
		$('#game1').css('display', 'block');
		$('#failure').css('display', 'none');
		time = 30;
		timeoutFn();
	});

	$('#congratulation').click(function(){
		// TODO sb啥惊喜
		alert('找设计人员发红包');
	});

	var arr4 = [11,11,11,11],
		arr6 = [12,34,41,23,11,11],
		arr8 = [12,34,41,23,11,11,22,22],
		arr10 = [12,34,41,23,11,11,11,22,22,22],
		a = [22, 11], 
		b = [12, 23, 34, 41],
		pathArr = [],
		ids = [],
		pathNum;

	$('ul').click(function(ev){
		var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        switch (target.id){
        	case 'id1': pathNum = nextImg(target, target.className); break;
        	case 'id2': pathNum = nextImg(target, target.className); break;
        	case 'id3': pathNum = nextImg(target, target.className); break;
        	case 'id4': pathNum = nextImg(target, target.className); break;
        	case 'id5': pathNum = nextImg(target, target.className); break;
        	case 'id6': pathNum = nextImg(target, target.className); break;
        	case 'id7': pathNum = nextImg(target, target.className); break;
        	case 'id8': pathNum = nextImg(target, target.className); break;
        	case 'id9': pathNum = nextImg(target, target.className); break;
        	case 'id10': pathNum = nextImg(target, target.className); break;
        	case 'id11': pathNum = nextImg(target, target.className); break;
        	case 'id12': pathNum = nextImg(target, target.className); break;
        	case 'id13': pathNum = nextImg(target, target.className); break;
        	case 'id14': pathNum = nextImg(target, target.className); break;
        	case 'id15': pathNum = nextImg(target, target.className); break;
        	case 'id16': pathNum = nextImg(target, target.className); break;
        }

        if(ids.indexOf(target.id) < 0){
        	ids.push(target.id);
        	pathArr.push(pathNum);
        }else{
        	var i = -1;
        	if((i=a.indexOf(pathNum)) >= 0){
        		i = (i-1 < 0) ? 1 : i-1;
        		var z = pathArr.indexOf(a[i]) >= 0 ? 1 : 0;
        		pathArr.splice(pathArr.indexOf(a[i]), z, pathNum);
        	}
        	if((i=b.indexOf(pathNum)) >= 0){
        		i = (i-1 < 0) ? 3 : i-1;
        		var z = pathArr.indexOf(b[i]) >= 0 ? 1 : 0;
        		pathArr.splice(pathArr.indexOf(b[i]), z, pathNum);
        	}
        }
        // console.log(pathArr)
        if(ids.length === 4 && pathArr.sort().toString() == arr4.sort().toString()){
        	$('#home1').css('display', 'none');
			$('#gamepre').css('display', 'none');
			$('#rule').css('display', 'none');
			$('#game1').css('display', 'none');
			$('#failure').css('display','none');

        	$('#congratulation').css('display', 'block');
			 clearTimeout(time1);
        }
        else if(ids.length === 6 && pathArr.sort().toString() == arr6.sort().toString()){
        	$('#home1').css('display', 'none');
			$('#gamepre').css('display', 'none');
			$('#rule').css('display', 'none');
			$('#game1').css('display', 'none');
			$('#failure').css('display','none');

        	$('#congratulation').css('display', 'block');
			 clearTimeout(time1);
        }
        else if(ids.length === 8 && pathArr.sort().toString() == arr8.sort().toString()){
        	$('#home1').css('display', 'none');
			$('#gamepre').css('display', 'none');
			$('#rule').css('display', 'none');
			$('#game1').css('display', 'none');
			$('#failure').css('display','none');

        	$('#congratulation').css('display', 'block');
			 clearTimeout(time1);
        }
        else if(ids.length === 10 && pathArr.sort().toString() == arr10.sort().toString()){
        	$('#home1').css('display', 'none');
			$('#gamepre').css('display', 'none');
			$('#rule').css('display', 'none');
			$('#game1').css('display', 'none');
			$('#failure').css('display','none');

        	$('#congratulation').css('display', 'block');
			 clearTimeout(time1);
        }
        else{
        	// $('#msg').addClass('success');
        	// $('#msg').val('通关失败');
			//alert("33");
        }
	});

	function timeoutFn(){
		
		$('#timeout').html(time + ' s');
		time1 = setTimeout(function(){
			if(time > 0){
				clearTimeout(a);
				time--;
				$('#timeout').html(time + ' s');
				time1 = setTimeout(arguments.callee, 1000);
			}else{
				$('#game1').css('display', 'none');
				$('#failure').css('display','block');
			}
		},1000);
	}

	function nextImg(target, classname){
		var num = Number(classname.replace(/[^0-9]/ig,"")),
			aIndex,
			bIndex,
			numAfter;

		$(target).removeClass(classname);
		if((aIndex=a.indexOf(num)) >= 0){
			numAfter = a[++aIndex >= 2 ? 0 : aIndex];
			$(target).addClass('path' + numAfter);
		}
		if((bIndex=b.indexOf(num)) >= 0){
			numAfter = b[++bIndex >= 4 ? 0 : bIndex];
			$(target).addClass('path' + numAfter);
		}	
		return numAfter;
	}
});
