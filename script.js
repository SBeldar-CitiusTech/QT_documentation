const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
// const sidebarClose = document.querySelector(".collapse_sidebar");
// const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

// sidebarClose.addEventListener("click", () => {
//   sidebar.classList.add("close", "hoverable");
// });
// sidebarExpand.addEventListener("click", () => {
//   sidebar.classList.remove("close", "hoverable");
// });

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI;
    darkLight.classList.replace("fa-sun", "fa-moon");
  } else {
    darkLight.classList.replace("fa-moon", "fa-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

$(function () {
  $("#maincontent > div:gt(0)").hide();

  // $(".qts").on("click", function(e){
  //   $("#maincontent > div").hide();
  //   $("#qts").show();  
  // })

  // $(".intro").on("click", function(e){
  //   $("#maincontent > div").hide();
  //   $("#intro").show();  
  // })

  // $(".busRel").on("click", function(e){
  //   $("#maincontent > div").hide();
  //   $("#busRel").show();  
  // })

  $(".prereq").on("click", function(e){
    $("#maincontent > div").hide();
    $("#prerequisite").show();  
  })

  $(".nav_res").on("click", function(e){
    $("#maincontent > div").hide();
    $("#response").show();
  })
  
});

function clickCalled(divname){
  $("#maincontent > div").hide();
  $("#"+divname).show();  
}
