/*!
* Start Bootstrap - Agency v7.0.6 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    var test = document.getElementById("test");

    document.onscroll = function() {

        scrollTop = document.documentElement.scrollTop;
        test.innerHTML = scrollTop;
        
        allDivs = document.getElementsByTagName('section');

        for( i=0; i< allDivs.length; i++ )
        {
            curDiv = allDivs[i];
                    
            heightBefore = 0;    
            if (i > 0){
                heightBefore = allDivs[i-1].offsetHeight / 3;
            }
            
            if (scrollTop > curDiv.offsetTop - heightBefore){
                color = curDiv.getAttribute("data-color");
                document.body.style.background = color;
            }
                    
        }
    };



    //FUN TEXTTTTTTT
    var canvas = document.querySelector("#scene"),
      ctx = canvas.getContext("2d"),
      particles = [],
      amount = 0,
      mouse = {x:0,y:0},
      radius = 1;

    var colors = ["#B23027","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];

    var copy = document.querySelector("#copy");

    var ww = canvas.width = window.innerWidth;
    var wh = canvas.height = window.innerHeight;

    function Particle(x,y){
      this.x =  Math.random()*ww;
      this.y =  Math.random()*wh;
      this.dest = {
        x : x,
        y: y
      };
      this.r =  Math.random()*5 + 2;
      this.vx = (Math.random()-0.5)*20;
      this.vy = (Math.random()-0.5)*20;
      this.accX = 0;
      this.accY = 0;
      this.friction = Math.random()*0.05 + 0.94;

      this.color = colors[Math.floor(Math.random()*6)];
    }

    Particle.prototype.render = function() {


      this.accX = (this.dest.x - this.x)/1000;
      this.accY = (this.dest.y - this.y)/1000;
      this.vx += this.accX;
      this.vy += this.accY;
      this.vx *= this.friction;
      this.vy *= this.friction;

      this.x += this.vx;
      this.y +=  this.vy;

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
      ctx.fill();

      var a = this.x - mouse.x;
      var b = this.y - mouse.y;

      var distance = Math.sqrt( a*a + b*b );
      if(distance<(radius*70)){
        this.accX = (this.x - mouse.x)/100;
        this.accY = (this.y - mouse.y)/100;
        this.vx += this.accX;
        this.vy += this.accY;
      }

    }

    function onMouseMove(e){
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onTouchMove(e){
      if(e.touches.length > 0 ){
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }

    function onTouchEnd(e){
    mouse.x = -9999;
    mouse.y = -9999;
    }

    function initScene(){
      ww = canvas.width = window.innerWidth;
      wh = canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "bold "+(ww/10)+"px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(copy.value, ww/2, wh/2);

      var data  = ctx.getImageData(0, 0, ww, wh).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";

      particles = [];
      for(var i=0;i<ww;i+=Math.round(ww/150)){
        for(var j=0;j<wh;j+=Math.round(ww/150)){
          if(data[ ((i + j*ww)*4) + 3] > 150){
            particles.push(new Particle(i,j));
          }
        }
      }
      amount = particles.length;

    }

    function onMouseClick(){
      radius++;
      if(radius ===5){
        radius = 0;
      }
    }

    function render(a) {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < amount; i++) {
        particles[i].render();
      }
    };

    copy.addEventListener("keyup", initScene);
    window.addEventListener("resize", initScene);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("click", onMouseClick);
    window.addEventListener("touchend", onTouchEnd);
    initScene();
    requestAnimationFrame(render);


//schedule
  function scheduleBar() {
    var thur = document.querySelector('#thurtogglecontainer');
    var fri = document.querySelector('#fritogglecontainer');
    var sat = document.querySelector('#sattogglecontainer');
    var sun = document.querySelector('#suntogglecontainer');
    document.querySelector('#thurtoggle').onclick = function(){
      thur.classList.add('active-day');
      fri.classList.remove('active-day');
      sat.classList.remove('active-day');
      sun.classList.remove('active-day');
    };
    document.querySelector('#fritoggle').onclick = function(){
      thur.classList.remove('active-day');
      fri.classList.add('active-day');
      sat.classList.remove('active-day');
      sun.classList.remove('active-day');
    };
    document.querySelector('#sattoggle').onclick = function(){
      thur.classList.remove('active-day');
      fri.classList.remove('active-day');
      sat.classList.add('active-day');
      sun.classList.remove('active-day');
    };
    document.querySelector('#suntoggle').onclick = function(){
      thur.classList.remove('active-day');
      fri.classList.remove('active-day');
      sat.classList.remove('active-day');
      sun.classList.add('active-day');
    };
  };
  window.addEventListener("click", scheduleBar);

});





