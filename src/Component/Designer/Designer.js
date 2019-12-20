import React  from  'react'
import  Style  from  '../Designer/Designer.scss'
import $ from "jquery";


export  default()=>{


    $(document).ready(function() {
  
        var navigating = false,
            curPage = 1,
            pages = $(".section").length,
            $sections = $(".sections"),
            $paginationPage = $(".pagination .page"),
            $paginationTotal = $(".total-pages"),
            $textStuff = $(".section-heading, .additional-text");
        
        if (pages >= 10) {
          $paginationTotal.text(pages);
        } else {
          $paginationTotal.text("0" + pages);
        }
        
        /*
        Sets random transition-delay for blocks between 0.4 and 1.2 seconds on every call
        */
        function randomDelay() {
          $(".left-part").css("transition-delay", (Math.floor(Math.random() * 9) + 4)/10 + "s");
          for (var i = 1; i <= pages; i++) {
            $(".bg-part:nth-child("+i+")").css("transition-delay", (Math.floor(Math.random() * 9) + 4)/10 + "s");
          }
        }
        
        /* Async hell, with hardcoded numbers.
        On production, 410 number must be .section-heading transform transition time in miliseconds + 10, but i'm sort of tired of this demo :D
        */
        function timeoutNav(t) {
          var time = t || 2000;
          $textStuff.addClass("not-visible");
          setTimeout(function() {
            navigating = false;
            randomDelay();
          }, time);
          setTimeout(function() {
            // cached selector not working because of newely created clone when moving up more then 2 positions
            $(".section-heading, .additional-text").css({"margin-top": 0 - (parseInt($(".nav-elem.active").attr("data-page")) - 1) * 100 + "vh"}).hide();
          }, 410);
          setTimeout(function() {
            $textStuff.show();
            $textStuff.css("top");
            $textStuff.removeClass("not-visible");
          }, time + 10);
        }
        
        function magicStuff(paramPage) {
          if (paramPage) curPage = paramPage;
          navigating = true;
          var calculatedMargin = 0 - (curPage - 1) * 100;
          $(".bg-part, .left-part").css("margin-top", calculatedMargin +"vh");
          $(".scroll-down").addClass("removed");
          if (parseInt($(".nav-elem.active").attr("data-page")) === 1) {
            $(".scroll-down").removeClass("removed");
          }
        }
        
        function trickyStuff(page) {
          $(".left-part, .bg-part").css({"transition-duration": "0s", "transition-delay": "0s"});
          $(".main").css("top");
          magicStuff(page);
          $(".main").css("top");
          $(".left-part, .bg-part").css("transition-duration", "0.8s");
          randomDelay();
        }
        
        function pagination(pg) {
          $(".nav-elem").removeClass("active");
          $(".nav-" + pg).addClass("active");
          curPage = pg;
          
          if (pages >= 10) {
            $paginationPage.text(pg);
          } else {
            $paginationPage.text("0" + pg);
          }
        }
        
        function navigateUp() {
          if (curPage > 1) {
            curPage--;
            pagination(curPage);
            magicStuff();
            timeoutNav();
          }
        }
        
        function navigateDown() {
          if (curPage < pages) {
            curPage++;
            pagination(curPage);
            magicStuff();
            timeoutNav();
          }
        }
        
        $(document).on("mousewheel DOMMouseScroll", function(e) {
          if (!navigating) {
            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
              navigateUp();
            } else { 
              navigateDown();
            }
          }
        });
        
        $(document).on("mousewheel DOMMouseScroll",
                       ".sidebar-hover, .sidebar-real",
                       function(e) {
          e.stopPropagation();
        });
        
        var sidebarScroll = 0,
            $navEl =  $(".nav-elem"),
            $sidebar = $(".sidebar-real"),
            maxScroll = $navEl.length * $navEl.height() - $(window).height();
        
        $(document).on("mousewheel DOMMouseScroll", ".sidebar-real", function(e) {
          if (navigating) return;
          if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            if (!sidebarScroll) return;
            sidebarScroll += 100;
            if (sidebarScroll > 0) sidebarScroll = 0;
          } else { 
            if (Math.abs(sidebarScroll) === maxScroll) return;
            sidebarScroll -= 100;
            if (Math.abs(sidebarScroll) > maxScroll) sidebarScroll = 0 - maxScroll;
          }
          $sidebar.css("transform", "translateY("+ sidebarScroll +"px)");
        });
        
        $(document).on("click", ".nav-elem:not(.active)", function() {
          if (navigating) return;
          var activePage = parseInt($(".nav-elem.active").attr("data-page"), 10),
              futurePage = $(this).attr("data-page");
          
          pagination(futurePage);
          
          if (Math.abs(activePage - futurePage) > 2) {
            var $fakePage = $(".section-" + futurePage).clone(),
                $currentPage = $(".section-" + activePage),
                fakeNumber = 0;
            // ugly code, do not enter here
            if (activePage < futurePage) {
              // moving down
              $currentPage.after($fakePage);
              fakeNumber = activePage + 1;
              $(".main").css("top");
              randomDelay();
              magicStuff(fakeNumber);
            } else {
              // moving up (real hell)
              $currentPage.before($fakePage);
              fakeNumber = activePage - 1;
              trickyStuff(activePage + 1);
              $(".main").css("top");
              randomDelay();
              $(".main").css("top");
              magicStuff(activePage);
            }
            timeoutNav(2050);
            setTimeout(function() {
              $fakePage.remove();
              trickyStuff(futurePage);
            }, 2000);
          } else {
            magicStuff(futurePage);
            timeoutNav();
          }
        });
        
        $(window).resize(function() {
          maxScroll = $navEl.length * $navEl.height() - $(window).height();
          $sidebar.css("transform", "translateY(0)");
        });
        
      });
    return(


<div class="main">
  <div class="sidebar-hover">
    <p class="pagination">
      <span class="page">01</span> / <span class="total-pages">08</span>
    </p>
  </div>
  <div class="sidebar-real">
    <div data-page="1" class="nav-elem nav-1 active"></div>
    <div data-page="2" class="nav-elem nav-2"></div>
    <div data-page="3" class="nav-elem nav-3"></div>
    <div data-page="4" class="nav-elem nav-4"></div>
    <div data-page="5" class="nav-elem nav-5"></div>
    <div data-page="6" class="nav-elem nav-6"></div>
    <div data-page="7" class="nav-elem nav-7"></div>
    <div data-page="8" class="nav-elem nav-8"></div>
  </div>
  <div class="sections">
    <div class="section section-1">
      <div class="left-part"></div>
      <div class="content">
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <h2 class="section-heading">Fancy heading #1</h2>
        <p class="additional-text">Some cool info or hashtags #1</p>
      </div>
    </div>
    <div class="section section-2">
      <div class="left-part"></div>
      <div class="content">
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <h2 class="section-heading">Fancy heading #2</h2>
        <p class="additional-text">Some cool info or hashtags #2</p>
      </div>
    </div>
    <div class="section section-3">
      <div class="left-part"></div>
      <div class="content">
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <h2 class="section-heading">Fancy heading #3</h2>
        <p class="additional-text">Some cool info or hashtags #3</p>
      </div>
    </div>
    <div class="section section-4">
      <div class="left-part"></div>
      <div class="content">
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <h2 class="section-heading">Fancy heading #4</h2>
        <p class="additional-text">Some cool info or hashtags #4</p>
      </div>
    </div>
    <div class="section section-5">
      <div class="left-part"></div>
      <div class="content">
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <h2 class="section-heading">Fancy heading #5</h2>
        <p class="additional-text">Some cool info or hashtags #5</p>
      </div>
    </div>
    <div class="section section-6">
      <div class="left-part"></div>
      <div class="content">
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <h2 class="section-heading">Fancy heading #6</h2>
        <p class="additional-text">Some cool info or hashtags #6</p>
      </div>
    </div>
    <div class="section section-7">
      <div class="left-part"></div>
      <div class="content">
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <h2 class="section-heading">Fancy heading #7</h2>
        <p class="additional-text">Some cool info or hashtags #7</p>
      </div>
    </div>
    <div class="section section-8">
      <div class="left-part"></div>
      <div class="content">
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <div class="bg-part"></div>
        <h2 class="section-heading"><a class="codepen-link" href="https://codepen.io/suez/public/" target="_blank">Fancy heading #8</a></h2>
        <p class="check-out additional-text">Check out my other <a href="https://codepen.io/suez/public/" target="_blank">pens</a></p>
      </div>
    </div>
  </div>
  <h2 class="scroll-down">Scroll down</h2>
</div>





    );
}