const serializer = new XMLSerializer();

// GIFs frame delays are in 1/100 second increments.
// See: https://superuser.com/a/1449370, https://www.w3.org/Graphics/GIF/spec-gif89a.txt
const delayMs = 20; // 50 FPS

function svgToGif(svg, gif, duration, progress) {
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
            // SVG attributes
            try { copyAnimated[i].setAttribute(attr, n.targetElement[attr].animVal.value); }
            // CSS attributes
            catch { copyAnimated[i].style[attr] = getComputedStyle(n.targetElement)[attr]; }
        });

        // Add the frame to GIF.js
        const img = new Image()
        img.addEventListener('load', ()=> {
            gif.addFrame(img, { delay: delayMs });
            const p = {
                frames: gif.frames.length,
                done: gif.frames.length == duration * (1000/delayMs)
            };
            progress(p);
            if (!p.done) setTimeout(capture, delayMs);
        });
        img.src = 'data:image/svg+xml;base64,'+btoa(serializer.serializeToString(copy));
    }
    capture();
}
