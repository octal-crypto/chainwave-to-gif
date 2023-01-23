// https://github.com/McCoady/chainwavescontracts

PALETTES = [
    ["d00000", "370617", "faa307", "e85d04", "03071e"],
    ["3a0ca3", "f72585", "4cc9f0", "7209b7", "4cc9f0"],
    ["250902", "38040e", "640d14", "800e13", "ad2831"],
    ["013026", "a1ce3f", "107e57", "014760", "cbe58e"],
    ["009638", "F6D800", "002672", "fff", "f8961e"],
    ["23B024", "F02423", "294AF6", "fff", "000"],
    ["aabf98", "1f1f1f", "f2f2f2", "b5caa3", "20251e"],
    ["7067cf", "b7c0ee", "cbf3d2", "f87575", "ef626c"],
    ["414Cb3", "06061a", "e80663", "fff", "ff0066"]
];
NOISE = [20, 35, 55, 85];
SPEED = [95, 75, 50, 25];
CHARS = ["#83!:", "@94?;", "W72a+", "N$50c", "0101/", "gm;)'"];
TIGHTNESS = [2, 3, 5];

function buildTraits(hash) {
    traitArray = hash.split("").map(h => parseInt(h));
    return {
        "palette": PALETTES[traitArray[0]],
        "noise": NOISE[traitArray[1]],
        "speed": SPEED[traitArray[2]],
        "charSet": CHARS[traitArray[3]],
        "tightness": TIGHTNESS[traitArray[4]],
        "numCols": traitArray[5] + 1
    }
}

function buildSVG(tokenId, hash, width, height) {
    let scaleW = Math.max(width/height, 1);
    let scaleH = Math.max(height/width, 1);
    
    let tokenTraits = buildTraits(hash);
    let modStart = tokenTraits.noise + tokenTraits.tightness;

    return`
        <svg viewBox='0 0 ${20*scaleW} ${20*scaleH}' width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMin'>
            <rect width='${20*scaleW}' height='${20*scaleH}' fill='#${tokenTraits.palette[0]}'/>
            <defs>
                <g id='chars' font-family='monospace'>
                    ${buildXLines(tokenTraits.charSet, modStart, 10 - tokenTraits.numCols, scaleW, scaleH)}
                    <animate attributeName='font-size' attributeType='XML' values='13px;${13*(tokenTraits.speed/100)}px;13px' begin='0s' dur='15s' repeatCount='indefinite'/>
                </g>
                <filter id='turbulence'>
                    <feTurbulence type='turbulence' baseFrequency='0.${tokenTraits.noise}' numOctaves='${tokenTraits.tightness}' result='noise' seed='${tokenId}'/>
                    <feDisplacementMap in='SourceGraphic' in2='noise' scale='3' />
                </filter>
            </defs>
            ${buildUseLines(tokenTraits.palette, tokenTraits.numCols, scaleW, scaleH)}
        </svg>
    `;
}

function buildXLines(chars, modStart, numLines, scaleW, scaleH) {
    let lineOut = "";
    for (let i=0, x=1, y=0; i < numLines*scaleH; ++i, y+=4, x=x==1?3:1, modStart+=7) {
        lineOut += buildLine(chars, modStart, x, y, scaleW);
    }
    return lineOut;
}

function buildLine(chars, modJump, x, y, scaleW) {
    let lineOut = `<text x='-${x}' y='${y}'>`;
    for (let i=0, randomModulo=1; i < Math.ceil(12*scaleW); ++i, randomModulo+=modJump) {
        lineOut += chars[randomModulo % 4];
    }
    return lineOut + "</text>";
}

function buildUseLines(pal, numCols, scaleW, scaleH) {
    let output = "";
    for (let i=0, y=0; i < numCols; ++i, y+=3) {
        output += `<use href='#chars' y='${y}' x='0' filter='url(#turbulence)' width='${20*scaleW}' height='${20*scaleH}' fill='#${pal[i + 1]}'/>`;
    }
    return output;
}
