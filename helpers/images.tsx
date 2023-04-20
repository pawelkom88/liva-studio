interface Image {
  src: string;
  category: string;
}

export function shuffleArray(array: Image[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export const localImages: Image[] = shuffleArray([
  {
    src: "/assets/images/portfolio/BABY/K-6_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/LIVASTUDIO-3_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/LIVASTUDIO-19_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/LIVASTUDIO-28_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/LIVASTUDIO-33_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/o-4_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/o-10_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/pp-9_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/untitled1_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/untitled2_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/untitled3_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/untitled4_H.webp",
    category: "Baby",
  },
  {
    src: "/assets/images/portfolio/BABY/val-4_H.webp",
    category: "Baby",
  },

  {
    src: "/assets/images/portfolio/BOUDOIR/1.2H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/3.1H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/A-3H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/A-35H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/P-2H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/P-4H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/P-6H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/P-9H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/p-15H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/p-18H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/p-30H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/p-31H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/p-59H.webp",
    category: "Boudoir",
  },
  {
    src: "/assets/images/portfolio/BOUDOIR/p-66H.webp",
    category: "Boudoir",
  },

  {
    src: "/assets/images/portfolio/LIFESTYLE/1_H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/AM-20H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/BP-4H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/D (16 of 45)H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/D (20 of 45)H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/D (25 of 45)H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/EK1n-5H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/EK1n-39H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/I (3 of 99)H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/I (36 of 99)H.webp",
    category: "Lifestyle",
  },

  {
    src: "/assets/images/portfolio/LIFESTYLE/I (75 of 99)H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/IMG_1170H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/IMG_3561H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/IMG_5488H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/IMG_5525H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/IMG_7342H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/IMG_7726H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/IMG_7880H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/K&M-12H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/K&M-82H.webp",
    category: "Lifestyle",
  },

  {
    src: "/assets/images/portfolio/LIFESTYLE/O&M-31H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/O&M-34H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/O&M-40H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/O&M-48H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/O&M-81H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/O&M-84H.webp",
    category: "Lifestyle",
  },

  {
    src: "/assets/images/portfolio/LIFESTYLE/p (7 of 66)H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/p (26 of 66)H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/p (36 of 66)H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/PP-19H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/SK-7H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/untitled-38H.webp",
    category: "Lifestyle",
  },
  {
    src: "/assets/images/portfolio/LIFESTYLE/untitled-56H.webp",
    category: "Lifestyle",
  },

  {
    src: "/assets/images/portfolio/MATERNITY/1H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/01H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/2-1H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/4H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/7.1H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/12H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/13H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/18.1H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/23H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/30H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/33H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/35H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/50H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/70H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/90H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/104H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/888H.webp",
    category: "Maternity",
  },

  {
    src: "/assets/images/portfolio/MATERNITY/1111H.webp",
    category: "Maternity",
  },

  {
    src: "/assets/images/portfolio/MATERNITY/a-2H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/a-7H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/a-8H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/a-12H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/D-4H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/D-5H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/D-10H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/D-30H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/E (10 of 30).webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/E (13 of 30).webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/E (15 of 30).webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/E (25 of 30).webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/E (27 of 30).webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/J-1H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/J-8H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/J7H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/J9H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/J17H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/J19H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/J22H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/J24H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/J25H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/J28H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/ost H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/PEARLSH.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/pinkyH.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/sonia zieloneH.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/untitled-13H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/untitled-14H.webp",
    category: "Maternity",
  },
  {
    src: "/assets/images/portfolio/MATERNITY/złoteH.webp",
    category: "Maternity",
  },

  {
    src: "/assets/images/portfolio/NEWBORN/1H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/2H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/7H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/9H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/10H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/13H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/15H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/16H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/19.3H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/20H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/22H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/26H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/28H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/31H.webp",
    category: "Newborn",
  },
  {
    src: "/assets/images/portfolio/NEWBORN/32H.webp",
    category: "Newborn",
  },

  {
    src: "/assets/images/portfolio/PORTRAIT/5.1H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/5H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/a (4 of 58).webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/a (9 of 58).webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/a (29 of 58).webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/a (45 of 58).webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/a (51 of 58).webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/A-4H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/A-16H.webp",
    category: "Portrait",
  },


  {
    src: "/assets/images/portfolio/PORTRAIT/A-19H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/A-34H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/B-18H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/B-19H.webp",
    category: "Portrait",
  },

  {
    src: "/assets/images/portfolio/PORTRAIT/J-6H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/N-3H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/P (10 of 21)H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/P-3H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/P-5H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/P-12H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/P-23H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/P-26H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/P-29H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/V-11H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/V-14H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/V-15H.webp",
    category: "Portrait",
  },
  {
    src: "/assets/images/portfolio/PORTRAIT/z (41 of 56)-1.webp",
    category: "Portrait",
  },

  {
    src: "/assets/images/portfolio/WEDDING/11H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/14H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/15H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/20H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/21H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/23H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/26H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/30H.webp",
    category: "Wedding",
  },

  {
    src: "/assets/images/portfolio/WEDDING/32H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/933H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/AKs-26H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/AKs-29H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/AP-30H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/AP-100H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/BP-196H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/E&K-8H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/E&K-18H.webp",
    category: "Wedding",
  },

  {
    src: "/assets/images/portfolio/WEDDING/IMG_1744H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/IMG_3870H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/IMG_4058H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/IMG_4091H.webp",
    category: "Wedding",
  },

  {
    src: "/assets/images/portfolio/WEDDING/IMG_4101H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/IMG_4336H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/IMG_7155H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/IMG_7206H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/IMG_7326H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/IMG_7390H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/IMG_7431H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/J&P-45H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/J&P-107H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/J&P-110H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/K&D-4H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/K&D-41H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/K&D-64H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/KR-8H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/KR-11H.webp",
    category: "Wedding",
  },

  {
    src: "/assets/images/portfolio/WEDDING/M&D-47H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/mb-35H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/mb-40H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/mb-89H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/mb-91H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/SKr-252H.webp",
    category: "Wedding",
  },
  {
    src: "/assets/images/portfolio/WEDDING/SKs-18H.webp",
    category: "Wedding",
  },
]);
