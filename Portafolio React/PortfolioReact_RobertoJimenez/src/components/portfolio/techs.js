var imageSources = ["https://img.icons8.com/color/480/null/html-5--v1.png", "https://img.icons8.com/color/480/null/css3.png"]

    imageSources.forEach(element => {
        var img = document.createElement("img");
        img.width = '300';
        img.height = '300';
        img.src = element;
        document.getElementById("tech-img").appendChild(img)
    });