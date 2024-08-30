function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     /static/AnimaBlend/Project%20Js/anime-img/male0001.png
     /static/AnimaBlend/Project%20Js/anime-img/male0002.png
     /static/AnimaBlend/Project%20Js/anime-img/male0003.png
     /static/AnimaBlend/Project%20Js/anime-img/male0004.png
     /static/AnimaBlend/Project%20Js/anime-img/male0005.png
     /static/AnimaBlend/Project%20Js/anime-img/male0006.png
     /static/AnimaBlend/Project%20Js/anime-img/male0007.png
     /static/AnimaBlend/Project%20Js/anime-img/male0008.png
     /static/AnimaBlend/Project%20Js/anime-img/male0009.png
     /static/AnimaBlend/Project%20Js/anime-img/male0010.png
     /static/AnimaBlend/Project%20Js/anime-img/male0011.png
     /static/AnimaBlend/Project%20Js/anime-img/male0012.png
     /static/AnimaBlend/Project%20Js/anime-img/male0013.png
     /static/AnimaBlend/Project%20Js/anime-img/male0014.png
     /static/AnimaBlend/Project%20Js/anime-img/male0015.png
     /static/AnimaBlend/Project%20Js/anime-img/male0016.png
     /static/AnimaBlend/Project%20Js/anime-img/male0017.png
     /static/AnimaBlend/Project%20Js/anime-img/male0018.png
     /static/AnimaBlend/Project%20Js/anime-img/male0019.png
     /static/AnimaBlend/Project%20Js/anime-img/male0020.png
     /static/AnimaBlend/Project%20Js/anime-img/male0021.png
     /static/AnimaBlend/Project%20Js/anime-img/male0022.png
     /static/AnimaBlend/Project%20Js/anime-img/male0023.png
     /static/AnimaBlend/Project%20Js/anime-img/male0024.png
     /static/AnimaBlend/Project%20Js/anime-img/male0025.png
     /static/AnimaBlend/Project%20Js/anime-img/male0026.png
     /static/AnimaBlend/Project%20Js/anime-img/male0027.png
     /static/AnimaBlend/Project%20Js/anime-img/male0028.png
     /static/AnimaBlend/Project%20Js/anime-img/male0029.png
     /static/AnimaBlend/Project%20Js/anime-img/male0030.png
     /static/AnimaBlend/Project%20Js/anime-img/male0031.png
     /static/AnimaBlend/Project%20Js/anime-img/male0032.png
     /static/AnimaBlend/Project%20Js/anime-img/male0033.png
     /static/AnimaBlend/Project%20Js/anime-img/male0034.png
     /static/AnimaBlend/Project%20Js/anime-img/male0035.png
     /static/AnimaBlend/Project%20Js/anime-img/male0036.png
     /static/AnimaBlend/Project%20Js/anime-img/male0037.png
     /static/AnimaBlend/Project%20Js/anime-img/male0038.png
     /static/AnimaBlend/Project%20Js/anime-img/male0039.png
     /static/AnimaBlend/Project%20Js/anime-img/male0040.png
     /static/AnimaBlend/Project%20Js/anime-img/male0041.png
     /static/AnimaBlend/Project%20Js/anime-img/male0042.png
     /static/AnimaBlend/Project%20Js/anime-img/male0043.png
     /static/AnimaBlend/Project%20Js/anime-img/male0044.png
     /static/AnimaBlend/Project%20Js/anime-img/male0045.png
     /static/AnimaBlend/Project%20Js/anime-img/male0046.png
     /static/AnimaBlend/Project%20Js/anime-img/male0047.png
     /static/AnimaBlend/Project%20Js/anime-img/male0048.png
     /static/AnimaBlend/Project%20Js/anime-img/male0049.png
     /static/AnimaBlend/Project%20Js/anime-img/male0050.png
     /static/AnimaBlend/Project%20Js/anime-img/male0051.png
     /static/AnimaBlend/Project%20Js/anime-img/male0052.png
     /static/AnimaBlend/Project%20Js/anime-img/male0053.png
     /static/AnimaBlend/Project%20Js/anime-img/male0054.png
     /static/AnimaBlend/Project%20Js/anime-img/male0055.png
     /static/AnimaBlend/Project%20Js/anime-img/male0056.png
     /static/AnimaBlend/Project%20Js/anime-img/male0057.png
     /static/AnimaBlend/Project%20Js/anime-img/male0058.png
     /static/AnimaBlend/Project%20Js/anime-img/male0059.png
     /static/AnimaBlend/Project%20Js/anime-img/male0060.png
     /static/AnimaBlend/Project%20Js/anime-img/male0061.png
     /static/AnimaBlend/Project%20Js/anime-img/male0062.png
     /static/AnimaBlend/Project%20Js/anime-img/male0063.png
     /static/AnimaBlend/Project%20Js/anime-img/male0064.png
     /static/AnimaBlend/Project%20Js/anime-img/male0065.png
     /static/AnimaBlend/Project%20Js/anime-img/male0066.png
     /static/AnimaBlend/Project%20Js/anime-img/male0067.png
     /static/AnimaBlend/Project%20Js/anime-img/male0068.png
     /static/AnimaBlend/Project%20Js/anime-img/male0069.png
     /static/AnimaBlend/Project%20Js/anime-img/male0070.png
     /static/AnimaBlend/Project%20Js/anime-img/male0071.png
     /static/AnimaBlend/Project%20Js/anime-img/male0072.png
     /static/AnimaBlend/Project%20Js/anime-img/male0073.png
     /static/AnimaBlend/Project%20Js/anime-img/male0074.png
     /static/AnimaBlend/Project%20Js/anime-img/male0075.png
     /static/AnimaBlend/Project%20Js/anime-img/male0076.png
     /static/AnimaBlend/Project%20Js/anime-img/male0077.png
     /static/AnimaBlend/Project%20Js/anime-img/male0078.png
     /static/AnimaBlend/Project%20Js/anime-img/male0079.png
     /static/AnimaBlend/Project%20Js/anime-img/male0080.png
     /static/AnimaBlend/Project%20Js/anime-img/male0081.png
     /static/AnimaBlend/Project%20Js/anime-img/male0082.png
     /static/AnimaBlend/Project%20Js/anime-img/male0083.png
     /static/AnimaBlend/Project%20Js/anime-img/male0084.png
     /static/AnimaBlend/Project%20Js/anime-img/male0085.png
     /static/AnimaBlend/Project%20Js/anime-img/male0086.png
     /static/AnimaBlend/Project%20Js/anime-img/male0087.png
     /static/AnimaBlend/Project%20Js/anime-img/male0088.png
     /static/AnimaBlend/Project%20Js/anime-img/male0089.png
     /static/AnimaBlend/Project%20Js/anime-img/male0090.png
     /static/AnimaBlend/Project%20Js/anime-img/male0091.png
     /static/AnimaBlend/Project%20Js/anime-img/male0092.png
     /static/AnimaBlend/Project%20Js/anime-img/male0093.png
     /static/AnimaBlend/Project%20Js/anime-img/male0094.png
     /static/AnimaBlend/Project%20Js/anime-img/male0095.png
     /static/AnimaBlend/Project%20Js/anime-img/male0096.png
     /static/AnimaBlend/Project%20Js/anime-img/male0097.png
     /static/AnimaBlend/Project%20Js/anime-img/male0098.png
     /static/AnimaBlend/Project%20Js/anime-img/male0099.png
     /static/AnimaBlend/Project%20Js/anime-img/male0100.png
     /static/AnimaBlend/Project%20Js/anime-img/male0101.png
     /static/AnimaBlend/Project%20Js/anime-img/male0102.png
     /static/AnimaBlend/Project%20Js/anime-img/male0103.png
     /static/AnimaBlend/Project%20Js/anime-img/male0104.png
     /static/AnimaBlend/Project%20Js/anime-img/male0105.png
     /static/AnimaBlend/Project%20Js/anime-img/male0106.png
     /static/AnimaBlend/Project%20Js/anime-img/male0107.png
     /static/AnimaBlend/Project%20Js/anime-img/male0108.png
     /static/AnimaBlend/Project%20Js/anime-img/male0109.png
     /static/AnimaBlend/Project%20Js/anime-img/male0110.png
     /static/AnimaBlend/Project%20Js/anime-img/male0111.png
     /static/AnimaBlend/Project%20Js/anime-img/male0112.png
     /static/AnimaBlend/Project%20Js/anime-img/male0113.png
     /static/AnimaBlend/Project%20Js/anime-img/male0114.png
     /static/AnimaBlend/Project%20Js/anime-img/male0115.png
     /static/AnimaBlend/Project%20Js/anime-img/male0116.png
     /static/AnimaBlend/Project%20Js/anime-img/male0117.png
     /static/AnimaBlend/Project%20Js/anime-img/male0118.png
     /static/AnimaBlend/Project%20Js/anime-img/male0119.png
     /static/AnimaBlend/Project%20Js/anime-img/male0120.png
     /static/AnimaBlend/Project%20Js/anime-img/male0121.png
     /static/AnimaBlend/Project%20Js/anime-img/male0122.png
     /static/AnimaBlend/Project%20Js/anime-img/male0123.png
     /static/AnimaBlend/Project%20Js/anime-img/male0124.png
     /static/AnimaBlend/Project%20Js/anime-img/male0125.png
     /static/AnimaBlend/Project%20Js/anime-img/male0126.png
     /static/AnimaBlend/Project%20Js/anime-img/male0127.png
     /static/AnimaBlend/Project%20Js/anime-img/male0128.png
     /static/AnimaBlend/Project%20Js/anime-img/male0129.png
     /static/AnimaBlend/Project%20Js/anime-img/male0130.png
     /static/AnimaBlend/Project%20Js/anime-img/male0131.png
     /static/AnimaBlend/Project%20Js/anime-img/male0132.png
     /static/AnimaBlend/Project%20Js/anime-img/male0133.png
     /static/AnimaBlend/Project%20Js/anime-img/male0134.png
     /static/AnimaBlend/Project%20Js/anime-img/male0135.png
     /static/AnimaBlend/Project%20Js/anime-img/male0136.png
     /static/AnimaBlend/Project%20Js/anime-img/male0137.png
     /static/AnimaBlend/Project%20Js/anime-img/male0138.png
     /static/AnimaBlend/Project%20Js/anime-img/male0139.png
     /static/AnimaBlend/Project%20Js/anime-img/male0140.png
     /static/AnimaBlend/Project%20Js/anime-img/male0141.png
     /static/AnimaBlend/Project%20Js/anime-img/male0142.png
     /static/AnimaBlend/Project%20Js/anime-img/male0143.png
     /static/AnimaBlend/Project%20Js/anime-img/male0144.png
     /static/AnimaBlend/Project%20Js/anime-img/male0145.png
     /static/AnimaBlend/Project%20Js/anime-img/male0146.png
     /static/AnimaBlend/Project%20Js/anime-img/male0147.png
     /static/AnimaBlend/Project%20Js/anime-img/male0148.png
     /static/AnimaBlend/Project%20Js/anime-img/male0149.png
     /static/AnimaBlend/Project%20Js/anime-img/male0150.png
     /static/AnimaBlend/Project%20Js/anime-img/male0151.png
     /static/AnimaBlend/Project%20Js/anime-img/male0152.png
     /static/AnimaBlend/Project%20Js/anime-img/male0153.png
     /static/AnimaBlend/Project%20Js/anime-img/male0154.png
     /static/AnimaBlend/Project%20Js/anime-img/male0155.png
     /static/AnimaBlend/Project%20Js/anime-img/male0156.png
     /static/AnimaBlend/Project%20Js/anime-img/male0157.png
     /static/AnimaBlend/Project%20Js/anime-img/male0158.png
     /static/AnimaBlend/Project%20Js/anime-img/male0159.png
     /static/AnimaBlend/Project%20Js/anime-img/male0160.png
     /static/AnimaBlend/Project%20Js/anime-img/male0161.png
     /static/AnimaBlend/Project%20Js/anime-img/male0162.png
     /static/AnimaBlend/Project%20Js/anime-img/male0163.png
     /static/AnimaBlend/Project%20Js/anime-img/male0164.png
     /static/AnimaBlend/Project%20Js/anime-img/male0165.png
     /static/AnimaBlend/Project%20Js/anime-img/male0166.png
     /static/AnimaBlend/Project%20Js/anime-img/male0167.png
     /static/AnimaBlend/Project%20Js/anime-img/male0168.png
     /static/AnimaBlend/Project%20Js/anime-img/male0169.png
     /static/AnimaBlend/Project%20Js/anime-img/male0170.png
     /static/AnimaBlend/Project%20Js/anime-img/male0171.png
     /static/AnimaBlend/Project%20Js/anime-img/male0172.png
     /static/AnimaBlend/Project%20Js/anime-img/male0173.png
     /static/AnimaBlend/Project%20Js/anime-img/male0174.png
     /static/AnimaBlend/Project%20Js/anime-img/male0175.png
     /static/AnimaBlend/Project%20Js/anime-img/male0176.png
     /static/AnimaBlend/Project%20Js/anime-img/male0177.png
     /static/AnimaBlend/Project%20Js/anime-img/male0178.png
     /static/AnimaBlend/Project%20Js/anime-img/male0179.png
     /static/AnimaBlend/Project%20Js/anime-img/male0180.png
     /static/AnimaBlend/Project%20Js/anime-img/male0181.png
     /static/AnimaBlend/Project%20Js/anime-img/male0182.png
     /static/AnimaBlend/Project%20Js/anime-img/male0183.png
     /static/AnimaBlend/Project%20Js/anime-img/male0184.png
     /static/AnimaBlend/Project%20Js/anime-img/male0185.png
     /static/AnimaBlend/Project%20Js/anime-img/male0186.png
     /static/AnimaBlend/Project%20Js/anime-img/male0187.png
     /static/AnimaBlend/Project%20Js/anime-img/male0188.png
     /static/AnimaBlend/Project%20Js/anime-img/male0189.png
     /static/AnimaBlend/Project%20Js/anime-img/male0190.png
     /static/AnimaBlend/Project%20Js/anime-img/male0191.png
     /static/AnimaBlend/Project%20Js/anime-img/male0192.png
     /static/AnimaBlend/Project%20Js/anime-img/male0193.png
     /static/AnimaBlend/Project%20Js/anime-img/male0194.png
     /static/AnimaBlend/Project%20Js/anime-img/male0195.png
     /static/AnimaBlend/Project%20Js/anime-img/male0196.png
     /static/AnimaBlend/Project%20Js/anime-img/male0197.png
     /static/AnimaBlend/Project%20Js/anime-img/male0198.png
     /static/AnimaBlend/Project%20Js/anime-img/male0199.png
     /static/AnimaBlend/Project%20Js/anime-img/male0200.png
     /static/AnimaBlend/Project%20Js/anime-img/male0201.png
     /static/AnimaBlend/Project%20Js/anime-img/male0202.png
     /static/AnimaBlend/Project%20Js/anime-img/male0203.png
     /static/AnimaBlend/Project%20Js/anime-img/male0204.png
     /static/AnimaBlend/Project%20Js/anime-img/male0205.png
     /static/AnimaBlend/Project%20Js/anime-img/male0206.png
     /static/AnimaBlend/Project%20Js/anime-img/male0207.png
     /static/AnimaBlend/Project%20Js/anime-img/male0208.png
     /static/AnimaBlend/Project%20Js/anime-img/male0209.png
     /static/AnimaBlend/Project%20Js/anime-img/male0210.png
     /static/AnimaBlend/Project%20Js/anime-img/male0211.png
     /static/AnimaBlend/Project%20Js/anime-img/male0212.png
     /static/AnimaBlend/Project%20Js/anime-img/male0213.png
     /static/AnimaBlend/Project%20Js/anime-img/male0214.png
     /static/AnimaBlend/Project%20Js/anime-img/male0215.png
     /static/AnimaBlend/Project%20Js/anime-img/male0216.png
     /static/AnimaBlend/Project%20Js/anime-img/male0217.png
     /static/AnimaBlend/Project%20Js/anime-img/male0218.png
     /static/AnimaBlend/Project%20Js/anime-img/male0219.png
     /static/AnimaBlend/Project%20Js/anime-img/male0220.png
     /static/AnimaBlend/Project%20Js/anime-img/male0221.png
     /static/AnimaBlend/Project%20Js/anime-img/male0222.png
     /static/AnimaBlend/Project%20Js/anime-img/male0223.png
     /static/AnimaBlend/Project%20Js/anime-img/male0224.png
     /static/AnimaBlend/Project%20Js/anime-img/male0225.png
     /static/AnimaBlend/Project%20Js/anime-img/male0226.png
     /static/AnimaBlend/Project%20Js/anime-img/male0227.png
     /static/AnimaBlend/Project%20Js/anime-img/male0228.png
     /static/AnimaBlend/Project%20Js/anime-img/male0229.png
     /static/AnimaBlend/Project%20Js/anime-img/male0230.png
     /static/AnimaBlend/Project%20Js/anime-img/male0231.png
     /static/AnimaBlend/Project%20Js/anime-img/male0232.png
     /static/AnimaBlend/Project%20Js/anime-img/male0233.png
     /static/AnimaBlend/Project%20Js/anime-img/male0234.png
     /static/AnimaBlend/Project%20Js/anime-img/male0235.png
     /static/AnimaBlend/Project%20Js/anime-img/male0236.png
     /static/AnimaBlend/Project%20Js/anime-img/male0237.png
     /static/AnimaBlend/Project%20Js/anime-img/male0238.png
     /static/AnimaBlend/Project%20Js/anime-img/male0239.png
     /static/AnimaBlend/Project%20Js/anime-img/male0240.png
     /static/AnimaBlend/Project%20Js/anime-img/male0241.png
     /static/AnimaBlend/Project%20Js/anime-img/male0242.png
     /static/AnimaBlend/Project%20Js/anime-img/male0243.png
     /static/AnimaBlend/Project%20Js/anime-img/male0244.png
     /static/AnimaBlend/Project%20Js/anime-img/male0245.png
     /static/AnimaBlend/Project%20Js/anime-img/male0246.png
     /static/AnimaBlend/Project%20Js/anime-img/male0247.png
     /static/AnimaBlend/Project%20Js/anime-img/male0248.png
     /static/AnimaBlend/Project%20Js/anime-img/male0249.png
     /static/AnimaBlend/Project%20Js/anime-img/male0250.png
     /static/AnimaBlend/Project%20Js/anime-img/male0251.png
     /static/AnimaBlend/Project%20Js/anime-img/male0252.png
     /static/AnimaBlend/Project%20Js/anime-img/male0253.png
     /static/AnimaBlend/Project%20Js/anime-img/male0254.png
     /static/AnimaBlend/Project%20Js/anime-img/male0255.png
     /static/AnimaBlend/Project%20Js/anime-img/male0256.png
     /static/AnimaBlend/Project%20Js/anime-img/male0257.png
     /static/AnimaBlend/Project%20Js/anime-img/male0258.png
     /static/AnimaBlend/Project%20Js/anime-img/male0259.png
     /static/AnimaBlend/Project%20Js/anime-img/male0260.png
     /static/AnimaBlend/Project%20Js/anime-img/male0261.png
     /static/AnimaBlend/Project%20Js/anime-img/male0262.png
     /static/AnimaBlend/Project%20Js/anime-img/male0263.png
     /static/AnimaBlend/Project%20Js/anime-img/male0264.png
     /static/AnimaBlend/Project%20Js/anime-img/male0265.png
     /static/AnimaBlend/Project%20Js/anime-img/male0266.png
     /static/AnimaBlend/Project%20Js/anime-img/male0267.png
     /static/AnimaBlend/Project%20Js/anime-img/male0268.png
     /static/AnimaBlend/Project%20Js/anime-img/male0269.png
     /static/AnimaBlend/Project%20Js/anime-img/male0270.png
     /static/AnimaBlend/Project%20Js/anime-img/male0271.png
     /static/AnimaBlend/Project%20Js/anime-img/male0272.png
     /static/AnimaBlend/Project%20Js/anime-img/male0273.png
     /static/AnimaBlend/Project%20Js/anime-img/male0274.png
     /static/AnimaBlend/Project%20Js/anime-img/male0275.png
     /static/AnimaBlend/Project%20Js/anime-img/male0276.png
     /static/AnimaBlend/Project%20Js/anime-img/male0277.png
     /static/AnimaBlend/Project%20Js/anime-img/male0278.png
     /static/AnimaBlend/Project%20Js/anime-img/male0279.png
     /static/AnimaBlend/Project%20Js/anime-img/male0280.png
     /static/AnimaBlend/Project%20Js/anime-img/male0281.png
     /static/AnimaBlend/Project%20Js/anime-img/male0282.png
     /static/AnimaBlend/Project%20Js/anime-img/male0283.png
     /static/AnimaBlend/Project%20Js/anime-img/male0284.png
     /static/AnimaBlend/Project%20Js/anime-img/male0285.png
     /static/AnimaBlend/Project%20Js/anime-img/male0286.png
     /static/AnimaBlend/Project%20Js/anime-img/male0287.png
     /static/AnimaBlend/Project%20Js/anime-img/male0288.png
     /static/AnimaBlend/Project%20Js/anime-img/male0289.png
     /static/AnimaBlend/Project%20Js/anime-img/male0290.png
     /static/AnimaBlend/Project%20Js/anime-img/male0291.png
     /static/AnimaBlend/Project%20Js/anime-img/male0292.png
     /static/AnimaBlend/Project%20Js/anime-img/male0293.png
     /static/AnimaBlend/Project%20Js/anime-img/male0294.png
     /static/AnimaBlend/Project%20Js/anime-img/male0295.png
     /static/AnimaBlend/Project%20Js/anime-img/male0296.png
     /static/AnimaBlend/Project%20Js/anime-img/male0297.png
     /static/AnimaBlend/Project%20Js/anime-img/male0298.png
     /static/AnimaBlend/Project%20Js/anime-img/male0299.png
     /static/AnimaBlend/Project%20Js/anime-img/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})