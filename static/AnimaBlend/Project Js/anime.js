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
     ../assets/anime-img/male0001
     ../assets/anime-img/male0003.png
     ../assets/anime-img/male0002.png
     ../assets/anime-img/male0004.png
     ../assets/anime-img/male0005.png
     ../assets/anime-img/male0006.png
     ../assets/anime-img/male0007.png
     ../assets/anime-img/male0008.png
     ../assets/anime-img/male0009.png
     ../assets/anime-img/male0010.png
     ../assets/anime-img/male0011.png
     ../assets/anime-img/male0012.png
     ../assets/anime-img/male0013.png
     ../assets/anime-img/male0014.png
     ../assets/anime-img/male0015.png
     ../assets/anime-img/male0016.png
     ../assets/anime-img/male0017.png
     ../assets/anime-img/male0018.png
     ../assets/anime-img/male0019.png
     ../assets/anime-img/male0020.png
     ../assets/anime-img/male0021.png
     ../assets/anime-img/male0022.png
     ../assets/anime-img/male0023.png
     ../assets/anime-img/male0024.png
     ../assets/anime-img/male0025.png
     ../assets/anime-img/male0026.png
     ../assets/anime-img/male0027.png
     ../assets/anime-img/male0028.png
     ../assets/anime-img/male0029.png
     ../assets/anime-img/male0030.png
     ../assets/anime-img/male0031.png
     ../assets/anime-img/male0032.png
     ../assets/anime-img/male0033.png
     ../assets/anime-img/male0034.png
     ../assets/anime-img/male0035.png
     ../assets/anime-img/male0036.png
     ../assets/anime-img/male0037.png
     ../assets/anime-img/male0038.png
     ../assets/anime-img/male0039.png
     ../assets/anime-img/male0040.png
     ../assets/anime-img/male0041.png
     ../assets/anime-img/male0042.png
     ../assets/anime-img/male0043.png
     ../assets/anime-img/male0044.png
     ../assets/anime-img/male0045.png
     ../assets/anime-img/male0046.png
     ../assets/anime-img/male0047.png
     ../assets/anime-img/male0048.png
     ../assets/anime-img/male0049.png
     ../assets/anime-img/male0050.png
     ../assets/anime-img/male0051.png
     ../assets/anime-img/male0052.png
     ../assets/anime-img/male0053.png
     ../assets/anime-img/male0054.png
     ../assets/anime-img/male0055.png
     ../assets/anime-img/male0056.png
     ../assets/anime-img/male0057.png
     ../assets/anime-img/male0058.png
     ../assets/anime-img/male0059.png
     ../assets/anime-img/male0060.png
     ../assets/anime-img/male0061.png
     ../assets/anime-img/male0062.png
     ../assets/anime-img/male0063.png
     ../assets/anime-img/male0064.png
     ../assets/anime-img/male0065.png
     ../assets/anime-img/male0066.png
     ../assets/anime-img/male0067.png
     ../assets/anime-img/male0068.png
     ../assets/anime-img/male0069.png
     ../assets/anime-img/male0070.png
     ../assets/anime-img/male0071.png
     ../assets/anime-img/male0072.png
     ../assets/anime-img/male0073.png
     ../assets/anime-img/male0074.png
     ../assets/anime-img/male0075.png
     ../assets/anime-img/male0076.png
     ../assets/anime-img/male0077.png
     ../assets/anime-img/male0078.png
     ../assets/anime-img/male0079.png
     ../assets/anime-img/male0080.png
     ../assets/anime-img/male0081.png
     ../assets/anime-img/male0082.png
     ../assets/anime-img/male0083.png
     ../assets/anime-img/male0084.png
     ../assets/anime-img/male0085.png
     ../assets/anime-img/male0086.png
     ../assets/anime-img/male0087.png
     ../assets/anime-img/male0088.png
     ../assets/anime-img/male0089.png
     ../assets/anime-img/male0090.png
     ../assets/anime-img/male0091.png
     ../assets/anime-img/male0092.png
     ../assets/anime-img/male0093.png
     ../assets/anime-img/male0094.png
     ../assets/anime-img/male0095.png
     ../assets/anime-img/male0096.png
     ../assets/anime-img/male0097.png
     ../assets/anime-img/male0098.png
     ../assets/anime-img/male0099.png
     ../assets/anime-img/male0100.png
     ../assets/anime-img/male0101.png
     ../assets/anime-img/male0102.png
     ../assets/anime-img/male0103.png
     ../assets/anime-img/male0104.png
     ../assets/anime-img/male0105.png
     ../assets/anime-img/male0106.png
     ../assets/anime-img/male0107.png
     ../assets/anime-img/male0108.png
     ../assets/anime-img/male0109.png
     ../assets/anime-img/male0110.png
     ../assets/anime-img/male0111.png
     ../assets/anime-img/male0112.png
     ../assets/anime-img/male0113.png
     ../assets/anime-img/male0114.png
     ../assets/anime-img/male0115.png
     ../assets/anime-img/male0116.png
     ../assets/anime-img/male0117.png
     ../assets/anime-img/male0118.png
     ../assets/anime-img/male0119.png
     ../assets/anime-img/male0120.png
     ../assets/anime-img/male0121.png
     ../assets/anime-img/male0122.png
     ../assets/anime-img/male0123.png
     ../assets/anime-img/male0124.png
     ../assets/anime-img/male0125.png
     ../assets/anime-img/male0126.png
     ../assets/anime-img/male0127.png
     ../assets/anime-img/male0128.png
     ../assets/anime-img/male0129.png
     ../assets/anime-img/male0130.png
     ../assets/anime-img/male0131.png
     ../assets/anime-img/male0132.png
     ../assets/anime-img/male0133.png
     ../assets/anime-img/male0134.png
     ../assets/anime-img/male0135.png
     ../assets/anime-img/male0136.png
     ../assets/anime-img/male0137.png
     ../assets/anime-img/male0138.png
     ../assets/anime-img/male0139.png
     ../assets/anime-img/male0140.png
     ./male0141.png
     ./male0142.png
     ./male0143.png
     ./male0144.png
     ./male0145.png
     ./male0146.png
     ./male0147.png
     ./male0148.png
     ./male0149.png
     ./male0150.png
     ./male0151.png
     ./male0152.png
     ./male0153.png
     ./male0154.png
     ./male0155.png
     ./male0156.png
     ./male0157.png
     ./male0158.png
     ./male0159.png
     ./male0160.png
     ./male0161.png
     ./male0162.png
     ./male0163.png
     ./male0164.png
     ./male0165.png
     ./male0166.png
     ./male0167.png
     ./male0168.png
     ./male0169.png
     ./male0170.png
     ./male0171.png
     ./male0172.png
     ./male0173.png
     ./male0174.png
     ./male0175.png
     ./male0176.png
     ./male0177.png
     ./male0178.png
     ./male0179.png
     ./male0180.png
     ./male0181.png
     ./male0182.png
     ./male0183.png
     ./male0184.png
     ./male0185.png
     ./male0186.png
     ./male0187.png
     ./male0188.png
     ./male0189.png
     ./male0190.png
     ./male0191.png
     ./male0192.png
     ./male0193.png
     ./male0194.png
     ./male0195.png
     ./male0196.png
     ./male0197.png
     ./male0198.png
     ./male0199.png
     ./male0200.png
     ./male0201.png
     ./male0202.png
     ./male0203.png
     ./male0204.png
     ./male0205.png
     ./male0206.png
     ./male0207.png
     ./male0208.png
     ./male0209.png
     ./male0210.png
     ./male0211.png
     ./male0212.png
     ./male0213.png
     ./male0214.png
     ./male0215.png
     ./male0216.png
     ./male0217.png
     ./male0218.png
     ./male0219.png
     ./male0220.png
     ./male0221.png
     ./male0222.png
     ./male0223.png
     ./male0224.png
     ./male0225.png
     ./male0226.png
     ./male0227.png
     ./male0228.png
     ./male0229.png
     ./male0230.png
     ./male0231.png
     ./male0232.png
     ./male0233.png
     ./male0234.png
     ./male0235.png
     ./male0236.png
     ./male0237.png
     ./male0238.png
     ./male0239.png
     ./male0240.png
     ./male0241.png
     ./male0242.png
     ./male0243.png
     ./male0244.png
     ./male0245.png
     ./male0246.png
     ./male0247.png
     ./male0248.png
     ./male0249.png
     ./male0250.png
     ./male0251.png
     ./male0252.png
     ./male0253.png
     ./male0254.png
     ./male0255.png
     ./male0256.png
     ./male0257.png
     ./male0258.png
     ./male0259.png
     ./male0260.png
     ./male0261.png
     ./male0262.png
     ./male0263.png
     ./male0264.png
     ./male0265.png
     ./male0266.png
     ./male0267.png
     ./male0268.png
     ./male0269.png
     ./male0270.png
     ./male0271.png
     ./male0272.png
     ./male0273.png
     ./male0274.png
     ./male0275.png
     ./male0276.png
     ./male0277.png
     ./male0278.png
     ./male0279.png
     ./male0280.png
     ./male0281.png
     ./male0282.png
     ./male0283.png
     ./male0284.png
     ./male0285.png
     ./male0286.png
     ./male0287.png
     ./male0288.png
     ./male0289.png
     ./male0290.png
     ./male0291.png
     ./male0292.png
     ./male0293.png
     ./male0294.png
     ./male0295.png
     ./male0296.png
     ./male0297.png
     ./male0298.png
     ./male0299.png
     ./male0300.png
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