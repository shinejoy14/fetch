// var menu = document.getElementsByClassName("menubar")[0];
// var ul = document.getElementsByTagName("ul")[0];
// var a = document.getElementsByTagName("a");
// var active = document.getElementsByClassName("active");

// menu.addEventListener("click", function(){
//     ul.classList.toggle("toggle");
// })

// for(let i=0; i<=a.length; i++){
//     a[i].addEventListener("click", function(){
//         active[0].classList.remove("active");
//         a[i].classList.add("active");
//     })
// }

(async () => {
        const response = await fetch('https://google.com');
        const text = await response.text();
        console.log(text);
    }
)()