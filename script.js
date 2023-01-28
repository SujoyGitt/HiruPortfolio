
window.addEventListener("load",()=>{

  document.querySelector(".loading").remove();
})

$(document).ready(function () {
  //loading start

//loading end
  //===========theme===========
  const colorPicker = document.getElementById("color-picker");

  colorPicker.addEventListener("input", function () {
    $(":root").css("--primari-color", this.value);
  });
  //===========theme===========

  $(".sidebar .theme .a:eq(0)").click(function () {
    $(":root").css("--primari-color", "#9902e1");
  });

  $(".sidebar .theme .a:eq(1)").click(function () {
    $(":root").css("--primari-color", "#8d03e9");
  });

  $(".sidebar .theme .a:eq(2)").click(function () {
    $(":root").css("--primari-color", "#9e01ce");
  });

  $(".sidebar .theme .a:eq(3)").click(function () {
    $(":root").css("--primari-color", "#de01a7");
  });

  $(".sidebar .theme .a:eq(4)").click(function () {
    $(":root").css("--primari-color", "#02a2e1");
  });

  $(".sidebar .theme .a:eq(5)").click(function () {
    $(":root").css("--primari-color", "#01cbcf");
  });

  $(".sidebar .theme .a:eq(6)").click(function () {
    $(":root").css("--primari-color", "#02cd97");
  });

  $(".sidebar .theme .a:eq(7)").click(function () {
    $(":root").css("--primari-color", "#02cd5d");
  });

  $(".sidebar .theme .a:eq(8)").click(function () {
    $(":root").css("--primari-color", "#dac401");
  });

  $(".sidebar .theme .a:eq(9)").click(function () {
    $(":root").css("--primari-color", "#da8a01");
  });

  $(".sidebar .theme .a:eq(10)").click(function () {
    $(":root").css("--primari-color", "#da3b01");
  });
  $(".sidebar .theme .a:eq(11)").click(function () {
    $(":root").css("--primari-color", "#747474e0");
  });

  // =======popup===========

  $(".left svg").click(function () {
    $(".sidebar").toggleClass("pop");
    $(".fix").removeClass("fix-down");
  });

  // $(document).keydown(function (e) {
  //   if (e.key=="aa"){
  //     $("body").css("background", "red");
  //   }

  $(document).click(function (event) {
    if (!$(event.target).is($(".left svg"))) {
      $(".sidebar").removeClass("pop");
    }
  });

  $(document).click(function (e) {
    if (!$(e.target).is($("header nav .down-arrow"))) {
      $(".fix").removeClass("fix-down");
    }
  });

  // ====================

  $(".ser .coding:eq(0) a").click(function () {
    $(".coding .aaa").toggleClass("xxx");
    $(".coding .bbb").removeClass("xxx");
    $(".coding .ccc").removeClass("xxx");
  });
  $(".ser .coding:eq(1) a").click(function () {
    $(".coding .bbb").toggleClass("xxx");
    $(".coding .aaa").removeClass("xxx");
    $(".coding .ccc").removeClass("xxx");
  });
  $(".ser .coding:eq(2) a").click(function () {
    $(".coding .ccc").toggleClass("xxx");
    $(".coding .aaa").removeClass("xxx");
    $(".coding .bbb").removeClass("xxx");
  });
  $(".learn-more .hed .ll svg").click(function () {
    $(".coding .learn-more").removeClass("xxx");
  });

  // ! ========light & dark==========///

  $(".ddd").click(function () {
    $("footer,footer .wayv").toggleClass("footer-dark");

    $(".about .ab h1").toggleClass("h1-reflect");

    $(".ddd").toggleClass("rot");
    $("#body").toggleClass("darken");
    $(".box-title,.box-title svg:eq(1)").toggleClass("dark-half light1");
    $("nav").toggleClass("light");
    $("header nav ul").toggleClass("ul-color");
    $(".ser .coding,.coding .learn-more").toggleClass("darrrk");
    $(
      "nav a,.blog h1 span,.ab h1,.se h3,.coding h2,.slice-item2 h2,.sent .item .detail h2,.name label,.name input,.name textarea,footer .fot .content h1,.clint .topper .bios h4"
    ).toggleClass("light1");
    $("nav a").toggleClass("light2");

    $("footer .fot .content .lst a svg").toggleClass("socal");
    $(
      ".blog h4,p,.ab span,.circle-chart__percent,.circle-chart__info,.se span,nav .dark .home,footer .fot .content .cen a"
    ).toggleClass("light-half");
  });
  // ==================
  $("header nav .down-arrow").click(function () {
    $(".fix").toggleClass("fix-down");
    $(".sidebar").removeClass("pop");
  });

  // ==================

  $(".home").click(function () {
    $(".home").toggleClass("colo");
    $(".nav").toggleClass("toggle");
  });
  $(document).click(function (e) {
    if (!$(e.target).is($(".home"))) {
        $(".nav").removeClass("toggle");

    }
  });
 
  // ==================

  $("#work h2:first").addClass("active");
  // ==================

  $("#work h2:last").click(function () {
    $(".tab .two").addClass("twoo");
    $(".tab .one").addClass("onee");

    $("#work h2:last").addClass("active");
    $("#work h2:first").removeClass("active");
  });
  // ==================

  $("#work h2:first").click(function () {
    $(".tab .two").removeClass("twoo");
    $(".tab .one").removeClass("onee");

    $("#work h2:last").removeClass("active");
    $("#work h2:first").addClass("active");
    $("#work h2:last").removeClass("remove");
  });

  // ==================

  $(window).scroll(function () {
    var sc = $(window);
    if (sc.scrollTop() > 500) {
      $("nav").addClass("fix ");
      $(".down-arrow").addClass("hover");
      $("header").addClass(" padding");
      $(".up").addClass("show");
      $(".about .bio .a svg").addClass("effect");
    } else {
      $("nav").removeClass("fix");
      $("header").removeClass(" padding");
      $(".up").removeClass(" show");
      $(".about .bio .a svg").removeClass("effect");
      $(".down-arrow").removeClass("hover");
    }
  });
  // =========================

  // ===========
  $(function () {
    $(".circlechart").circlechart();
  });
  function makesvg(percentage, inner_text = "") {
    var abs_percentage = Math.abs(percentage).toString();
    var percentage_str = percentage.toString();
    var classes = "";

    if (percentage < 0) {
      classes = "danger-stroke circle-chart__circle--negative";
    } else if (percentage > 0 && percentage <= 10) {
      classes = "danger-gray";
    } else if (percentage > 10 && percentage <= 40) {
      classes = "danger-stroke";
    } else if (percentage > 40 && percentage <= 60) {
      classes = "warning-stroke";
    } else if (percentage > 60 && percentage <= 100) {
      classes = "success-stroke";
    } else {
      classes = "success-stroke";
    }

    var svg =
      '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">' +
      '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />' +
      '<circle class="circle-chart__circle ' +
      classes +
      '"' +
      'stroke-dasharray="' +
      abs_percentage +
      ',100"    cx="16.9" cy="16.9" r="15.9" />' +
      '<g class="circle-chart__info">' +
      '   <text class="circle-chart__percent" x="17.9" y="15.5">' +
      percentage_str +
      "%</text>";

    if (inner_text) {
      svg +=
        '<text class="circle-chart__subline" x="16.91549431" y="22">' +
        inner_text +
        "</text>";
    }

    svg += " </g></svg>";

    return svg;
  }

  (function ($) {
    $.fn.circlechart = function () {
      this.each(function () {
        var percentage = $(this).data("percentage");
        var inner_text = $(this).text();
        $(this).html(makesvg(percentage, inner_text));
      });
      return this;
    };
  })(jQuery);
  // ===========
  // ==========

  var i = 0;

  setInterval(() => {
    i = i + 25;

    $("#slide").css("transform", "translateY(" + i + "%" + ")");
    $("#slide").css("transition", "0s");
    if (i >= 100) {
      i = 0;
      $("#slide").css("transform", "translateY(" + i + "%" + ")");
      $("#slide").css(
        "transition",
        "0s"
      );
    }
  }, 3000);

  // ============================
  var v = 0;

  setInterval(() => {
    v = v + 33.33;

    $(".port .slice").css("transform", "translateX(" + -v + "%" + ")");
    $(".port .slice").css(
      "transition",
      ".3s cubic-bezier(0.895, 0.03, 0.685, 0.22)"
    );

    if (v >= 99) {
      v = 0;
      $(".port .slice").css("transition", "0s");

      $(".port .slice").css("transform", "translateX(" + -v + "%" + ")");
      $(".target svg:eq(0) circle,.target svg:eq(0)").addClass("active border");
      $(".target svg:eq(2) circle,.target svg:eq(2)").removeClass(
        "active border"
      );
    }
    if (v > 1 && v <= 33.33) {
      $(".target svg:eq(1) circle,.target svg:eq(1)").removeClass(
        "active border"
      );
      $(".target svg:eq(2) circle,.target svg:eq(2)").removeClass(
        "active border"
      );
    }
    if (v > 33 && v <= 66.66) {
      $(".target svg:eq(1) circle,.target svg:eq(1)").addClass("active border");
      $(".target svg:eq(0) circle,.target svg:eq(0)").removeClass(
        "active border"
      );
      $(".target svg:eq(2) circle,.target svg:eq(2)").removeClass(
        "active border"
      );
    }
    if (v > 66 && v <= 99.66) {
      $(".target svg:eq(2) circle,.target svg:eq(2)").addClass("active border");
      $(".target svg:eq(0) circle,.target svg:eq(0)").removeClass(
        "active border"
      );
      $(".target svg:eq(1) circle,.target svg:eq(1)").removeClass(
        "active border"
      );
    }
  }, 5000);

  // ============galary=slice==============

  var img = 0;

  setInterval(() => {
    img = img + 25;

    $("#contact .postman .slices").css(
      "transform",
      "translateX(" + -img + "%" + ")"
    );
    $("#contact .postman .slices").css(
      "transition",
      ".4s cubic-bezier(0.445, 0.05, 0.55, 4)"
    );

    if (img >= 100) {
      img = 0;
      $("#contact .postman .slices").css(
        "transform",
        "translateX(" + -img + "%" + ")"
      );
      $("#contact .postman .slices").css("transition", "0s");
    }
  }, 4000);
  // ==========target radio============
  $(".target svg:eq(0) circle,.target svg:eq(0)").addClass("active border");

  $(".target svg:eq(0)").click(function () {
    $(".port .slice").css("transform", "translateX(0%)");
    $(".target svg:eq(0) circle,.target svg:eq(0)").addClass("active border");
    $(".target svg:eq(1) circle,.target svg:eq(1)").removeClass(
      "active border"
    );
    $(".target svg:eq(2) circle,.target svg:eq(2)").removeClass(
      "active border"
    );
  });
  // ===
  $(".target svg:eq(1)").click(function () {
    $(".port .slice").css("transform", "translateX(-33%)");

    $(".target svg:eq(1) circle,.target svg:eq(1)").addClass("active border");
    $(".target svg:eq(0) circle,.target svg:eq(0)").removeClass(
      "active border"
    );
    $(".target svg:eq(2) circle,.target svg:eq(2)").removeClass(
      "active border"
    );
  });
  // ====
  $(".target svg:eq(2)").click(function () {
    $(".port .slice").css("transform", "translateX(-66%)");
    $(".target svg:eq(2) circle,.target svg:eq(2)").addClass("active border");
    $(".target svg:eq(0) circle,.target svg:eq(0)").removeClass(
      "active border"
    );
    $(".target svg:eq(1) circle,.target svg:eq(1)").removeClass(
      "active border"
    );
  });
  //========================

  // ======wheel=========
  var wheell = document.querySelector(".content");
  wheell.addEventListener("wheel", (hol) => {
    hol.preventDefault();
   wheell.scrollLeft += hol.deltaY;
 
   let j = wheell.scrollLeft;
   if (j > 1) {
     $("#wheel .prev,.next").addClass("svg-none");
    }
    else if (j < 1) {
      $("#wheel .prev,.next").removeClass("svg-none");
    }
  });
  //----------
  let progress = document.getElementById("pregressbar");
  let winnerwidth =wheell.innerWidth;
  console.log(winnerwidth);
  let totalHeight = wheell.scrollWidth-80;
  wheel.addEventListener('wheel',function(){
  let progressHeight = (wheell.scrollLeft/totalHeight)*90 ;
  progressHeight = Math.trunc(progressHeight);
  progress.style.width =( progressHeight)+'%';
});
// 55555555555555
  let left = document.querySelector(".left-progress");
  let winnerwidt =wheell.innerWidth;
  
  let totalHeigh = wheell.scrollWidth-80;
  wheel.addEventListener('wheel',function(){
  let progressHeight = (wheell.scrollLeft/totalHeigh)*90 ;
  progressHeight = Math.trunc(progressHeight);
  left.style.width =( progressHeight)+'%';
});


// ========left right arrow==========

  var d = 0;
  $(".next").click(function (e) {
    e.preventDefault();
    d += 25;
    $(".slidee").css("transform", "translateX(" + -d + "%" + ")");
    if (d >= 75) {
      d = 75;
      $(".slidee").css("transform", "translateX(" + -d + "%" + ")");
    }
  });

  $(".prev").click(function (e) {
    e.preventDefault();
    d -= 25;
    $(".slidee").css("transform", "translateX(" + -d + "%" + ")");
    if (d < 0) {
      d = 0;
      $(".slidee").css("transform", "translateX(" + -d + "%" + ")");
    }
  });

  // ========clock==========
  setInterval(() => {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = "AM";

    if (hours >= 12) {
      ampm = "PM";
      hours = hours - 12;
    }

    if (hours == 0) {
      hours = 12;
    }

    hours = hours.toString();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString =
      hours.substr(-2) + ":" + minutes + ":" + seconds + " " + ampm;

    $("#clock").text(timeString);
  
  }, 1000);

// ---------date-----------
setInterval(() => {
   var currentDate = new Date();
   var date = currentDate.getDate();
   var month = currentDate.getMonth() + 1;
   var year = currentDate.getFullYear();
   $("#date").text(date + "/" + month + "/" + year);
}, 1000);
  // 000000000000000000000000000000000
  //random box generator start/////
 
setInterval(() => {
    let body = document.querySelector("body");
    let squire = document.createElement("span");
    squire.classList.add('random');
    body.appendChild(squire);

    let size = Math.random()*70;
    squire.style.width =size + 'px'; 
    squire.style.height =size + 'px'; 

    squire.style.top= Math.random() * innerHeight+'px';
    squire.style.left= Math.random() * innerWidth+"px";
    // squire.style.background = 'orangered';
    
    setTimeout(() => {
        squire.remove();
    }, 50000);

}, 950);
  //random box generator end

  // [[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]

});

