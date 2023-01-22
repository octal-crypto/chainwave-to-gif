const serializer = new XMLSerializer();

function svgToGif(svg, gif, progress) {
    // Copy the SVG 
    const copy = new Document();
    copy.appendChild(svg.cloneNode(true));

    // Find animated elements, and remove them from the copy
    const animated = svg.querySelectorAll("animate");
    const copyAnimated = [...copy.querySelectorAll("animate")].map(node => {
        const target = node.targetElement;
        node.remove();
        return target;
    });

    // For each frame
    function capture() {
        if (!gif.capturing) return;

        // Compute the animation, and style it on the copy
        animated.forEach((n,i) => {
            const attr = n.getAttribute("attributeName");
            copyAnimated[i].style[attr] = getComputedStyle(n.targetElement)[attr]
        });

        // Add the frame to GIF.js
        const img = new Image()
        img.addEventListener('load', ()=> {
            gif.addFrame(img, { delay: 20 });
            progress(gif.frames.length)
        });
        img.src = 'data:image/svg+xml;base64,'+btoa(serializer.serializeToString(copy));
        requestAnimationFrame(capture);
    }
    requestAnimationFrame(capture)
}
