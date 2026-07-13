import bocciaChildrenImage from "../assets/boccia-children.png";
import { assetMeta, assets } from "./siteData.js";

const sharedSections = {
  zh: [
    {
      heading: "硬地滾球如何進行？",
      paragraphs: [
        "每一局開始時，球員會先擲出白色目標球 Jack，作為雙方投球的目標。",
        "之後，雙方分別使用紅球及藍球進行比賽。距離白色目標球較遠的一方需要繼續投球，直至成功把自己的球擲得更接近目標球，或已經完成所有投球。",
        "除了直接把球擲近 Jack，球員亦可以運用不同策略。",
      ],
      bullets: [
        "撞開對手的球",
        "保護己方的得分球",
        "改變白色目標球的位置",
        "封阻對手的投球路線",
        "為下一次投球創造更有利的位置",
      ],
      afterBullets: "當雙方完成所有投球後，裁判會按照各球與 Jack 的距離計算該局分數。",
    },
    {
      heading: "硬地滾球使用什麼球具？",
      paragraphs: ["一套正式硬地滾球球具包括："],
      bullets: ["六個紅球", "六個藍球", "一個白色目標球 Jack"],
      afterBullets: "紅方及藍方分別使用自己顏色的球，而白色 Jack 是雙方需要靠近的目標。",
      afterParagraphs: [
        "球員可以用手投擲、用腳踢球，或在合適情況下使用軌道等輔具把球送入場內。無論採用哪種方式，真正決定比賽結果的仍然是球員本人的判斷、控制及策略。",
      ],
    },
    {
      heading: "硬地滾球有哪些比賽形式？",
      paragraphs: ["正式硬地滾球比賽主要包括三種形式："],
      subsections: [
        { heading: "個人賽", paragraphs: ["由兩位球員對賽。雙方各自作出投球決定，考驗個人的準繩度、判斷及策略。"] },
        { heading: "雙人賽", paragraphs: ["由兩位球員組成一隊。隊員需要互相溝通及配合，共同決定每一球的部署。"] },
        { heading: "團體賽", paragraphs: ["由三位球員組成一隊。比賽更重視整體策略、分工、溝通及臨場調整。"] },
      ],
    },
    {
      heading: "為什麼硬地滾球如此吸引？",
      paragraphs: [
        "硬地滾球的特別之處，是每一次投球都有機會改變場上形勢。",
        "一個看似簡單的位置，可能需要球員在不同方案之間作出選擇；即使一方暫時落後，一次準確的撞擊或部署，也可能令整局比賽完全改變。",
        "因此，硬地滾球除了考驗投球技巧，亦需要：",
      ],
      bullets: ["觀察能力", "專注力", "力度控制", "空間判斷", "解難能力", "戰術思維", "情緒管理"],
      afterBullets: "正因如此，硬地滾球經常被形容為一項在球場上進行的策略運動。",
    },
    {
      heading: "硬地滾球適合哪些人士？",
      paragraphs: ["硬地滾球具有高度包容性，適合不同年齡及不同能力人士參與。", "它可以應用於："],
      bullets: [
        "學校體育及體驗活動",
        "兒童及青少年活動",
        "長者活動",
        "復健人士及殘疾人士活動",
        "家庭及跨代活動",
        "社區推廣",
        "企業團隊建立",
        "傷健共融活動",
      ],
      afterBullets: "初學者可以先從基本投球及簡化比賽開始；有意進一步發展的人士，亦可以參與較有系統的訓練及正式比賽。",
    },
    {
      heading: "認識中國香港硬地滾球總會",
      paragraphs: [
        "中國香港硬地滾球總會致力推廣硬地滾球普及化，希望讓更多市民接觸並參與這項兼具策略、技巧及趣味的運動。",
        "本會透過學校推廣、企業活動、社區合作、比賽及專業培訓，持續推動本地硬地滾球發展。",
        "中國香港硬地滾球總會是香港唯一專注培育硬地滾球教練及裁判的機構，致力建立完善的教練及裁判培訓制度，提升活動及比賽質素，培育更多推動硬地滾球發展的專業人才。",
      ],
    },
  ],
  en: [
    {
      heading: "How Is Boccia Played?",
      paragraphs: [
        "Each end begins with the white target ball, or Jack, being propelled onto the court.",
        "The two sides then compete using red and blue balls. The side whose ball is farther away from the Jack continues to play until it places a ball closer to the target or has used all of its remaining balls.",
        "Players can use a range of tactical approaches, including:",
      ],
      bullets: [
        "Placing a ball close to the Jack",
        "Knocking an opponent's ball away",
        "Protecting a scoring ball",
        "Moving the Jack into a more favourable position",
        "Blocking an opponent's playing line",
        "Creating a better opportunity for a later shot",
      ],
      afterBullets: "After all balls have been played, the referee calculates the score according to the positions of the balls in relation to the Jack.",
    },
    {
      heading: "What Equipment Is Used in Boccia?",
      paragraphs: ["A complete Boccia set includes:"],
      bullets: ["Six red balls", "Six blue balls", "One white target ball, known as the Jack"],
      afterBullets: "One side plays with red balls and the other with blue balls. Both sides aim to place their balls closest to the white Jack.",
      afterParagraphs: [
        "Depending on the athlete's needs, a ball may be thrown by hand, kicked, or propelled using an approved ramp or other appropriate equipment. Regardless of the method used, the player's own judgement, control and strategy determine the shot.",
      ],
    },
    {
      heading: "What Are the Main Boccia Competition Formats?",
      paragraphs: ["Formal Boccia competitions are mainly organised into three formats:"],
      subsections: [
        { heading: "Individual", paragraphs: ["Two players compete against each other. Each athlete makes independent tactical decisions, placing emphasis on accuracy, judgement and match strategy."] },
        { heading: "Pairs", paragraphs: ["Two players form a side and work together. Communication and coordinated tactical planning are essential."] },
        { heading: "Teams", paragraphs: ["Three players form a side. Team events require broader match planning, role allocation, communication and tactical adjustment."] },
      ],
    },
    {
      heading: "What Makes Boccia So Engaging?",
      paragraphs: [
        "Every shot in Boccia has the potential to change the position and direction of the match.",
        "A situation that looks simple may require a player to choose between several tactical options. Even when one side appears to be behind, a carefully controlled shot can completely change the score.",
        "Boccia therefore develops more than ball control. It also requires:",
      ],
      bullets: ["Observation", "Concentration", "Control of force", "Spatial judgement", "Problem-solving", "Tactical thinking", "Emotional control"],
      afterBullets: "This combination of accuracy and decision-making makes Boccia a highly engaging strategic sport.",
    },
    {
      heading: "Who Can Participate in Boccia?",
      paragraphs: ["Boccia is an inclusive sport that can be enjoyed by people of different ages and abilities.", "It can be used in:"],
      bullets: [
        "School sports and introductory programmes",
        "Activities for children and young people",
        "Senior programmes",
        "Programmes for rehabilitation participants and people with disabilities",
        "Family and intergenerational activities",
        "Community outreach",
        "Corporate team building",
        "Inclusive sports workshops",
      ],
      afterBullets: "Beginners can start with basic throwing activities and simplified games, while those who wish to progress can take part in structured training and formal competition.",
    },
    {
      heading: "About the Boccia Association of Hong Kong, China",
      paragraphs: [
        "The Boccia Association of Hong Kong, China is committed to making Boccia more widely accessible and helping more people discover this strategic, skilful and enjoyable sport.",
        "The Association promotes Boccia through school outreach, corporate activities, community partnerships, competitions and professional development.",
        "The Boccia Association of Hong Kong, China is the only organisation in Hong Kong dedicated specifically to developing Boccia coaches and referees. It is committed to establishing a structured training system, strengthening the quality of activities and competitions, and developing professionals who can support the long-term growth of Boccia.",
      ],
    },
  ],
};

const baseArticle = {
  slug: "what-is-boccia",
  publishedDate: "2026-07-12",
  image: bocciaChildrenImage,
  imageWidth: 1254,
  imageHeight: 1254,
};

export const bocciaArticles = {
  zh: [
    {
      ...baseArticle,
      path: "/rules/what-is-boccia",
      category: "認識硬地滾球",
      title: "什麼是硬地滾球（Boccia）？",
      description: "什麼是硬地滾球？本文介紹 Boccia 的基本玩法、紅藍球及白色目標球 Jack、個人賽、雙人賽和團體賽，以及適合參與的人士。",
      publishedBy: "中國香港硬地滾球總會",
      imageAlt: "兩名小朋友手持紅色及藍色硬地滾球",
      sections: sharedSections.zh,
      ctaTitle: "歡迎提供活動對象、日期、參加人數及場地資料，本會可協助規劃合適形式。",
      ctaAction: "查詢合作",
      ctaPath: "/contact",
    },
  ],
  en: [
    {
      ...baseArticle,
      path: "/en/rules/what-is-boccia",
      category: "About Boccia",
      title: "What Is Boccia?",
      description: "Discover what Boccia is, how the sport is played, the red and blue balls and white Jack, its competition formats, and who can take part.",
      publishedBy: "The Boccia Association of Hong Kong, China",
      imageAlt: "Two children holding red and blue Boccia balls",
      sections: sharedSections.en,
      ctaTitle: "Please share the activity audience, date, number of participants, and venue details. We can help plan a suitable format.",
      ctaAction: "Enquire about partnership",
      ctaPath: "/contact",
    },
  ],
};

export function getBocciaArticle(pathname, language) {
  const path = pathname.replace(/\/$/, "") || "/";
  return bocciaArticles[language].find((article) => article.path === path) || null;
}
