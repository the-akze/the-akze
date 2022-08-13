// DOM Element selections
const allBlocks = document.getElementsByClassName("block");

// highest values for angle
const mostX = -20; // 10 or -10
const mostY = -20; // 10 or -10

for (var b = 0; b < allBlocks.length; b++) {
    var block = allBlocks[b];
    console.log(block);
    console.log(b);
    console.log(allBlocks);
    block.addEventListener("mousemove", (e) => {
        var elem = e.currentTarget;
        elem.style.transition = '0s';
        const x = e.pageX - e.currentTarget.offsetLeft; 
        const y = e.pageY - e.currentTarget.offsetTop;
        const { width, height } = elem.getBoundingClientRect();
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        const rotationY = ((x - halfWidth) / halfWidth) * mostX;
        const rotationX = ((y - halfHeight) / halfHeight) * mostY;

        elem.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
        elem.style.webkitTransform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
    });

    block.addEventListener("mouseleave", (e) => {
        var elem = e.currentTarget;
        elem.style.transition = '0.5s';
        elem.style.transform = 'none';
        elem.style.webkitTransform = 'none';
    });
}
