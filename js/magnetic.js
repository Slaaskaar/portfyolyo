const magneticItems = document.querySelectorAll(".magnetic");

magneticItems.forEach(item => {

    item.addEventListener("mousemove", (e) => {

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        item.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translate(0,0)";

    });

});