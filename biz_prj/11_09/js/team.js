
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

	