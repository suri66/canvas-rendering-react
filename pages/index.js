import { useRef, useEffect } from 'react';

export default function Home() {
  const canvas = useRef();
  let ctx = null;

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const imageInfo = await getImageInfo(
      'https://www.midwestexteriorsmn.com/Portals/0//SunBlogNuke/30/76296755_s.jpg'
    );

    const canvasEle = canvas.current;
    canvasEle.width = imageInfo.width;
    canvasEle.height = imageInfo.height;

    // get context of the canvas
    ctx = canvasEle.getContext('2d');
    ctx.drawImage(imageInfo.img, 0, 0, imageInfo.width, imageInfo.height);

    const r1Info = { x: 20, y: 30, w: 50, h: 50 };
    const r1Style = { borderColor: 'red', borderWidth: 2 };
    drawRect(r1Info, r1Style);

    const r2Info = { x: 15, y: 130, w: 50, h: 50 };
    const r2Style = { borderColor: 'yellow', borderWidth: 2 };
    drawRect(r2Info, r2Style);

    const r3Info = { x: 390, y: 60, w: 50, h: 50 };
    const r3Style = { borderColor: 'red', borderWidth: 2 };
    drawRect(r3Info, r3Style);

    const r4Info = { x: 700, y: 230, w: 50, h: 50 };
    const r4Style = { borderColor: 'red', borderWidth: 2 };
    drawRect(r4Info, r4Style);

    const r5Info = { x: 540, y: 30, w: 50, h: 50 };
    const r5Style = { borderColor: 'red', borderWidth: 2 };
    drawRect(r5Info, r5Style);

    const r6Info = { x: 140, y: 30, w: 50, h: 50 };
    const r6Style = { borderColor: 'red', borderWidth: 2 };
    drawRect(r6Info, r6Style);

    const r7Info = { x: 240, y: 330, w: 50, h: 50 };
    const r7Style = { borderColor: 'red', borderWidth: 2 };
    drawRect(r7Info, r7Style);

    const r8Info = { x: 180, y: 250, w: 50, h: 50 };
    const r8Style = { borderColor: 'red', borderWidth: 2 };
    drawRect(r8Info, r8Style);

    const r9Info = { x: 440, y: 430, w: 50, h: 50 };
    const r9Style = { borderColor: 'red', borderWidth: 2 };
    drawRect(r9Info, r9Style);

    const r10Info = { x: 390, y: 200, w: 50, h: 50 };
    const r10Style = { borderColor: 'red', borderWidth: 2 };
    drawRect(r10Info, r10Style);

    const r11Info = { x: 590, y: 200, w: 50, h: 50 };
    const r11Style = { borderColor: 'green', borderWidth: 2 };
    drawRect(r11Info, r11Style);
  };

  // helper to get dimensions of an image
  const getImageInfo = (fileUrl) =>
    new Promise((resolve, reject) => {
      const img = new Image();

      // the following handler will fire after a successful loading of the image
      img.onload = (e) => {        
        const { naturalWidth: width, naturalHeight: height } = img;
        resolve({ img, width, height });
      };

      // and this handler will fire if there was an error with the image (like if it's not really an image or a corrupted one)
      img.onerror = () => {
        reject('There was some problem with the image.');
      };

      img.src = fileUrl;
      // img.setAttribute('width', 400);
      // img.setAttribute('height', 400);
      // img.style.objectFit = "contain";
    });

  const drawRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { borderColor = 'black', borderWidth = 1 } = style;
    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(x, y, w, h);
    ctx.stroke();
  };

  return <canvas ref={canvas}></canvas>;
}
