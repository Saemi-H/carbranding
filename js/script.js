window.onload=function(){
    subMenu();
    visualSlide();
    privateAction();
    newsSlide();
    instaSlide();
}

function subMenu(){
    const hamMenu = document.querySelector('.click-menu > a');
    const subMenu = document.querySelector('#gnb');
    const hWrap=document.querySelector('#header_wrap');

    hamMenu.addEventListener('mouseover', dropMenu);
    hWrap.addEventListener('mouseleave', upMenu);


    function dropMenu(event){
        event.preventDefault();
        subMenu.classList.add('action');
    }
    function upMenu(){
        subMenu.classList.remove('action');
    }


}//subMenu

function visualSlide(){
    const visualMove = document.querySelector('#visual > ul');
    const imgList=visualMove.querySelectorAll('li');
    const imgLength = visualMove.querySelectorAll('li').length;
    imgList[0].classList.add('active');
    let imgNum=0;
    let timer;
    startSlide();
   
    
    //alert (imgLength);
    function autoSlide(){
        if(imgNum >= imgLength-1){
            imgNum=0;
            imgList[1].classList.add('active');
            imgList[0].classList.remove('active');
        }else{
                imgNum++;
                imgList[imgNum-1].classList.add('active');
                imgList[imgNum].classList.remove('active');    
            
        }
        
    }
    
    visualMove.addEventListener('mouseover',stopVisual);
    visualMove.addEventListener('mouseout', startSlide);

    
    function startSlide(){ 
        timer=setInterval(autoSlide, 3000);
        timer;
    }
    
    function stopVisual(){
        clearInterval(timer);
    }


}//visualSlide

function privateAction(){
    const privateInner = document.querySelector('#private');
    const privateBtn = privateInner.querySelector('#reserv');
    privateInner.addEventListener('mouseover', privateAni);
    privateInner.addEventListener('mouseout', stopAni);


    function privateAni(){
        privateBtn.classList.add('on');
    }
    function stopAni(){
        privateBtn.classList.remove('on');
    }
}

function newsSlide(){
    const newsMove = document.querySelector('#news_inner > ul');
    const newsImg= newsMove.querySelectorAll('li');
    const newsImgLength = newsImg.length;
    const newsImgWidth=newsImg[0].clientWidth;
    //alert(newsImgLength);
    //alert(newsImgWidth);
    newsMove.style.width=newsImgLength*(newsImgWidth+50)+"px";
    newsNum=0;
    let newsPlay;

    inEvent();

    function inEvent(){
        
        restartPlay();
        for(let i=0; i<=newsImgLength-1; i++){
            newsImg[i].addEventListener('mouseover', pauseNews);
            newsImg[i].addEventListener('mouseout', restartPlay);
        }
        
    }
    function newsAuto(){
        if(window.innerWidth <= 768){
            //alert(1200);
            
                if (newsNum >= newsImgLength-1){
                    newsNum=0;
                    newsMove.style.left = 0 + "px";
                }else{
                    newsNum++;
                    newsMove.style.left = -(newsImgWidth+50)*newsNum+"px";
                }
        }else{
            if (newsNum >= newsImgLength-3){
                newsNum=0;
                newsMove.style.left = 0 + "px";
            }else{
                newsNum++;
                newsMove.style.left = -(newsImgWidth+50)*newsNum+"px";
            }
        }
        }
       
    function pauseNews(){
        clearInterval(newsPlay);
    }
    function restartPlay(){
        newsPlay = setInterval(newsAuto, 3000);
        newsPlay;
    }
}//newsSlide

function instaSlide(){
    const instaMove = document.querySelector('#insta_inner > ul');
    const instaLi=instaMove.querySelectorAll('li');
    const instaLiLength=instaLi.length;
    //alert (instaLiLength);
    const instaLiWidth=instaLi[0].clientWidth+50;
    //alert (instaLiLength*instaLiWidth);
    let instaNum=0;
    let instaPlay;
    instaMove.style.width = instaLiLength*instaLiWidth+"px";

    instaEvent();

    function instaEvent(){
        instaReplay();
        for(let a=0; a<=instaLiLength-1; a++){
            instaLi[a].addEventListener('mouseover', pauseInsta);
            instaLi[a].addEventListener('mouseout', instaReplay);
        }
    }
    function instaAuto(){
        if(window.innerWidth<=768){
            if(instaNum >= instaLiLength-1){
                instaNum=0;
            }else{
                instaNum++;
            }
            instaMove.style.left= -instaNum*instaLiWidth+"px";    
        }else{
            if(instaNum >= instaLiLength-3){
                instaNum=0;
            }else{
                instaNum++;
            }
            instaMove.style.left= -instaNum*instaLiWidth+"px";    
        }
        }
        function instaReplay(){
            instaPlay = setInterval(instaAuto, 3000);
        instaPlay;
        }
        function pauseInsta(){
            clearInterval(instaPlay);
        }
        
}

