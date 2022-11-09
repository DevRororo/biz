if (typeof $.fn.fullpage.destroy == 'function') { 
    $.fn.fullpage.destroy('all');
}

$(function(){
    $('#fullpage').fullpage({
        //options here
        anchors: ['section2','section3','section4','section5','section6'],
        navigation:true,
        navigationPosition:'right',
        sectionsColor : ['#eeee', '#eeee', '#eeee','#eeee','#eeee']
    });
});


const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_content');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

function onLogoClick()
{
	location.href ='https://deubigsigma.com/';
}

