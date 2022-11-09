if (typeof $.fn.fullpage.destroy == 'function') { 
    $.fn.fullpage.destroy('all');
}


$(function(){
    $('#fullpage').fullpage({
		//options here
		anchors:['section1', 'section2', 'section3', 'section4', 'section5'],
		navigation : true,
		navigationPosition:'right',
		sectionsColor : ['#fff', '#fff', '#fff', '#000', '#fff'],
		onLeave: function(anchorLink, index){
			if(index == 4){
				document.getElementById("logoimg").src = "./img/logo2.png";
				document.getElementById('contentsid0').style.color = "#fff";
				document.getElementById('contentsid1').style.color = "#fff";
				document.getElementById('contentsid2').style.color = "#fff";
				document.getElementById('contentsid3').style.color = "#fff";
			}
			else{
				document.getElementById("logoimg").src = "./img/logo2_black.png";
				document.getElementById('contentsid0').style.color = "#000";
				document.getElementById('contentsid1').style.color = "#000";
				document.getElementById('contentsid2').style.color = "#000";
				document.getElementById('contentsid3').style.color = "#000";
			}
		}
	});
	$.fn.fullpage.setAutoScrolling(true);
});



  $(function(){
	$('#slider-div').slick({
		slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
		infinite : true, 	//무한 반복 옵션	 
		slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
		dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
		autoplay : true,			// 자동 스크롤 사용 여부
		autoplaySpeed : 4000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover : false,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		vertical : false,		// 세로 방향 슬라이드 옵션
		prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
		nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
		dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
		draggable : true, 	//드래그 가능 여부 
		
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 960, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:1
				} 
			},
			{ 
				breakpoint: 768, //화면 사이즈 768px
				settings: {	
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:1
				} 
			}
		]

	});
  })

var vm = new Vue
({ 
	el: "#app",
	data: 
	{
		wdwwidth:"",
		wdwheight:"",
		mainload:"true",

	},
	methods: 
	{
		// 화면크기 관련 코드
		handleResize() 
		{
			
			this.wdwwidth = window.innerWidth;
			this.wdwheight = window.innerHeight;
			if (this.wdwwidth < 1300 || this.wdwheight < 750) 
			{
				this.mainload="false";
			}
			else
			{
				this.mainload="true";
			}
		},
	},
	computed:
	{
	},
	created() 
	{
		//화면크기 제어 코드
		window.addEventListener('resize', this.handleResize);
		this.handleResize();
	},
	mounted() 
	{
	},
	destroyed() 
	{
		//화면크기 제어 코드
		window.removeEventListener('resize', this.handleResize);
	},
});

function onLogoClick()
{
	location.href ='https://deubigsigma.com/';
}

function Mobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}
if (Mobile() == true) 
{
	vm.mainload = "false";
	alert("모바일버전 준비중...pc환경에서 접속해주세요")
}
else
{
	console.log("pc에서 접속함");
}


