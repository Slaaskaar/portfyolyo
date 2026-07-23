const cursor = document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("a,button").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("hover");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("hover");

    });

});