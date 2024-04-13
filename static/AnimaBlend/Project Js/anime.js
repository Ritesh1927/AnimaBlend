function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#anime-main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#anime-main", {
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
  
      pinType: document.querySelector("#anime-main").style.transform
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
       ../assets/anime-img/male0001.png
       ../assets/anime-img/male0002.png
       ../assets/anime-img/male0003.png
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
       ../assets/anime-img/male0141.png
       ../assets/anime-img/male0142.png
       ../assets/anime-img/male0143.png
       ../assets/anime-img/male0144.png
       ../assets/anime-img/male0145.png
       ../assets/anime-img/male0146.png
       ../assets/anime-img/male0147.png
       ../assets/anime-img/male0148.png
       ../assets/anime-img/male0149.png
       ../assets/anime-img/male0150.png
       ../assets/anime-img/male0151.png
       ../assets/anime-img/male0152.png
       ../assets/anime-img/male0153.png
       ../assets/anime-img/male0154.png
       ../assets/anime-img/male0155.png
       ../assets/anime-img/male0156.png
       ../assets/anime-img/male0157.png
       ../assets/anime-img/male0158.png
       ../assets/anime-img/male0159.png
       ../assets/anime-img/male0160.png
       ../assets/anime-img/male0161.png
       ../assets/anime-img/male0162.png
       ../assets/anime-img/male0163.png
       ../assets/anime-img/male0164.png
       ../assets/anime-img/male0165.png
       ../assets/anime-img/male0166.png
       ../assets/anime-img/male0167.png
       ../assets/anime-img/male0168.png
       ../assets/anime-img/male0169.png
       ../assets/anime-img/male0170.png
       ../assets/anime-img/male0171.png
       ../assets/anime-img/male0172.png
       ../assets/anime-img/male0173.png
       ../assets/anime-img/male0174.png
       ../assets/anime-img/male0175.png
       ../assets/anime-img/male0176.png
       ../assets/anime-img/male0177.png
       ../assets/anime-img/male0178.png
       ../assets/anime-img/male0179.png
       ../assets/anime-img/male0180.png
       ../assets/anime-img/male0181.png
       ../assets/anime-img/male0182.png
       ../assets/anime-img/male0183.png
       ../assets/anime-img/male0184.png
       ../assets/anime-img/male0185.png
       ../assets/anime-img/male0186.png
       ../assets/anime-img/male0187.png
       ../assets/anime-img/male0188.png
       ../assets/anime-img/male0189.png
       ../assets/anime-img/male0190.png
       ../assets/anime-img/male0191.png
       ../assets/anime-img/male0192.png
       ../assets/anime-img/male0193.png
       ../assets/anime-img/male0194.png
       ../assets/anime-img/male0195.png
       ../assets/anime-img/male0196.png
       ../assets/anime-img/male0197.png
       ../assets/anime-img/male0198.png
       ../assets/anime-img/male0199.png
       ../assets/anime-img/male0200.png
       ../assets/anime-img/male0201.png
       ../assets/anime-img/male0202.png
       ../assets/anime-img/male0203.png
       ../assets/anime-img/male0204.png
       ../assets/anime-img/male0205.png
       ../assets/anime-img/male0206.png
       ../assets/anime-img/male0207.png
       ../assets/anime-img/male0208.png
       ../assets/anime-img/male0209.png
       ../assets/anime-img/male0210.png
       ../assets/anime-img/male0211.png
       ../assets/anime-img/male0212.png
       ../assets/anime-img/male0213.png
       ../assets/anime-img/male0214.png
       ../assets/anime-img/male0215.png
       ../assets/anime-img/male0216.png
       ../assets/anime-img/male0217.png
       ../assets/anime-img/male0218.png
       ../assets/anime-img/male0219.png
       ../assets/anime-img/male0220.png
       ../assets/anime-img/male0221.png
       ../assets/anime-img/male0222.png
       ../assets/anime-img/male0223.png
       ../assets/anime-img/male0224.png
       ../assets/anime-img/male0225.png
       ../assets/anime-img/male0226.png
       ../assets/anime-img/male0227.png
       ../assets/anime-img/male0228.png
       ../assets/anime-img/male0229.png
       ../assets/anime-img/male0230.png
       ../assets/anime-img/male0231.png
       ../assets/anime-img/male0232.png
       ../assets/anime-img/male0233.png
       ../assets/anime-img/male0234.png
       ../assets/anime-img/male0235.png
       ../assets/anime-img/male0236.png
       ../assets/anime-img/male0237.png
       ../assets/anime-img/male0238.png
       ../assets/anime-img/male0239.png
       ../assets/anime-img/male0240.png
       ../assets/anime-img/male0241.png
       ../assets/anime-img/male0242.png
       ../assets/anime-img/male0243.png
       ../assets/anime-img/male0244.png
       ../assets/anime-img/male0245.png
       ../assets/anime-img/male0246.png
       ../assets/anime-img/male0247.png
       ../assets/anime-img/male0248.png
       ../assets/anime-img/male0249.png
       ../assets/anime-img/male0250.png
       ../assets/anime-img/male0251.png
       ../assets/anime-img/male0252.png
       ../assets/anime-img/male0253.png
       ../assets/anime-img/male0254.png
       ../assets/anime-img/male0255.png
       ../assets/anime-img/male0256.png
       ../assets/anime-img/male0257.png
       ../assets/anime-img/male0258.png
       ../assets/anime-img/male0259.png
       ../assets/anime-img/male0260.png
       ../assets/anime-img/male0261.png
       ../assets/anime-img/male0262.png
       ../assets/anime-img/male0263.png
       ../assets/anime-img/male0264.png
       ../assets/anime-img/male0265.png
       ../assets/anime-img/male0266.png
       ../assets/anime-img/male0267.png
       ../assets/anime-img/male0268.png
       ../assets/anime-img/male0269.png
       ../assets/anime-img/male0270.png
       ../assets/anime-img/male0271.png
       ../assets/anime-img/male0272.png
       ../assets/anime-img/male0273.png
       ../assets/anime-img/male0274.png
       ../assets/anime-img/male0275.png
       ../assets/anime-img/male0276.png
       ../assets/anime-img/male0277.png
       ../assets/anime-img/male0278.png
       ../assets/anime-img/male0279.png
       ../assets/anime-img/male0280.png
       ../assets/anime-img/male0281.png
       ../assets/anime-img/male0282.png
       ../assets/anime-img/male0283.png
       ../assets/anime-img/male0284.png
       ../assets/anime-img/male0285.png
       ../assets/anime-img/male0286.png
       ../assets/anime-img/male0287.png
       ../assets/anime-img/male0288.png
       ../assets/anime-img/male0289.png
       ../assets/anime-img/male0290.png
       ../assets/anime-img/male0291.png
       ../assets/anime-img/male0292.png
       ../assets/anime-img/male0293.png
       ../assets/anime-img/male0294.png
       ../assets/anime-img/male0295.png
       ../assets/anime-img/male0296.png
       ../assets/anime-img/male0297.png
       ../assets/anime-img/male0298.png
       ../assets/anime-img/male0299.png
       ../assets/anime-img/male0300.png
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
      scroller: `#anime-main`,
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
    scroller: `#anime-main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#anime-main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#anime-main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#anime-main`
    }
  })