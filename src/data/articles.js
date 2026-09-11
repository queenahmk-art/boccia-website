import bocciaChildrenImage from "../assets/boccia-children.png";
import bocciaAdultParticipantsImage from "../assets/boccia-adult-participants.png";
import hkBocciaAssociationSetImage from "../assets/hk-boccia-association-set.png";
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
      link: {
        label: "深入了解不同人士如何參與硬地滾球",
        path: "/rules/who-can-play-boccia",
      },
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
      link: {
        label: "Learn who can take part in boccia",
        path: "/en/rules/who-can-play-boccia",
      },
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

const whoCanPlaySections = {
  zh: [
    {
      heading: "為什麼硬地滾球適合不同人士？",
      paragraphs: [
        "硬地滾球的玩法清晰，而且可以在不同活動環境中進行。學校、社福機構、長者中心及社區團體均可按參加者的年齡、經驗和能力，安排合適的體驗或訓練內容。",
      ],
      link: {
        label: "了解硬地滾球基本玩法",
        path: "/rules/what-is-boccia",
      },
    },
    {
      heading: "小朋友適合玩硬地滾球嗎？",
      paragraphs: [
        "小朋友可以透過硬地滾球接觸基本運動技巧、規則和策略。由於每次投球都有清晰目標，小朋友需要觀察白色目標球的位置，再判斷應該使用多少力度及選擇哪一個方向。",
        "在活動過程中，小朋友亦可以練習：",
      ],
      bullets: ["手眼協調", "專注及觀察", "輪流和等待", "遵守遊戲規則", "簡單策略思考", "與同學溝通和合作"],
      afterBullets: "硬地滾球不只是把球投出去。當場上已經有其他紅球或藍球時，小朋友需要考慮應該把球投近目標、阻擋對手，還是移動場上的球。這些選擇可以讓活動更有趣，亦鼓勵小朋友主動思考。",
      subsections: [
        {
          heading: "SEN學生可以參與嗎？",
          paragraphs: [
            "可以。硬地滾球具有清楚的目標、輪候次序和活動流程，導師可以按照學生的理解和參與能力，調整講解方式、活動節奏和提示。",
            "在小組活動中，學生可以練習等待、聆聽指示、表達選擇，以及與其他同學共同完成活動。活動重點應放在參與、互動和成功經驗，而不是單純比較勝負。",
            "中國香港硬地滾球總會可安排幼稚園、小學及中學到校體驗活動。",
          ],
        },
      ],
      link: {
        label: "了解到校推廣及硬地滾球活動",
        path: "/services",
      },
    },
    {
      heading: "長者為什麼適合參與硬地滾球？",
      paragraphs: [
        "硬地滾球的動作相對容易理解，活動節奏亦可以按參加者情況安排。參加者需要控制投球方向和力度，但不一定需要進行快速跑動，因此較容易讓不同活動能力的長者參與。",
        "在長者中心或社區活動中，硬地滾球可以包括個人練習、二人合作、小組對賽及簡單策略任務。",
        "長者參與時可以：",
      ],
      bullets: ["進行適量身體活動", "練習手眼協調", "觀察及判斷場上位置", "思考投球次序和策略", "與其他參加者交流", "增加小組互動及社交機會"],
      afterBullets: "硬地滾球同時具有運動和遊戲元素。即使參加者沒有相關經驗，也可以先從短距離投球和簡單目標開始，再逐步加入計分及策略內容。",
      link: {
        label: "聯絡本會安排長者中心或社區體驗活動",
        path: "/contact",
      },
    },
    {
      heading: "復康人士及傷健共融活動",
      paragraphs: [
        "硬地滾球可以成為傷健共融活動的一部分，讓不同年齡、背景及能力人士在同一場地參與。",
        "共融活動的重點並不是比較參加者的身體能力，而是讓每位參加者都有清晰角色及參與機會。透過投球、觀察、討論和合作，參加者可以共同完成比賽或挑戰。",
        "硬地滾球共融活動可以帶出以下元素：",
      ],
      subsections: [
        {
          heading: "平等參與",
          paragraphs: ["每位參加者都可以根據自己的能力參與。活動可透過適當的講解、流程及協助，讓參加者了解自己的投球次序和目標。"],
        },
        {
          heading: "合作與溝通",
          paragraphs: ["在隊際活動中，參加者需要討論投球方向、次序及策略。即使未輪到投球，隊員亦可以觀察場上情況並提供意見。"],
        },
        {
          heading: "尊重不同能力",
          paragraphs: ["不同參加者可能使用不同方式完成投球。活動可以讓參加者認識彼此的需要，學習尊重不同能力和參與方式。"],
        },
        {
          heading: "建立共融體驗",
          paragraphs: ["學校、企業、社福機構及社區團體可以透過硬地滾球，安排一項讓不同人士共同參與的活動，增加交流和合作機會。"],
        },
      ],
      link: {
        label: "查詢傷健共融及機構硬地滾球活動",
        path: "/services",
      },
    },
  ],
  en: [
    {
      heading: "Why Is Boccia Suitable for Different People?",
      paragraphs: [
        "Boccia has a clear format and can be introduced in a range of activity settings. Schools, social service organisations, older adult centres and community groups can adapt introductory sessions or training to suit participants' ages, experience and abilities.",
      ],
      link: {
        label: "Learn the basic rules of boccia",
        path: "/en/rules/what-is-boccia",
      },
    },
    {
      heading: "Can Children Play Boccia?",
      paragraphs: [
        "Children can use boccia to explore basic movement skills, rules and strategy. Because every shot has a clear target, they need to observe the position of the white target ball, or Jack, then judge the direction and amount of force to use.",
        "During an activity, children can also practise:",
      ],
      bullets: ["Hand-eye coordination", "Concentration and observation", "Taking turns and waiting", "Following game rules", "Basic strategic thinking", "Communicating and working with classmates"],
      afterBullets: "Boccia involves more than simply propelling a ball. Once other red and blue balls are on court, children can decide whether to move closer to the Jack, block an opponent or move another ball. These choices make the activity engaging and encourage active decision-making.",
      subsections: [
        {
          heading: "Can Students with Special Educational Needs Take Part?",
          paragraphs: [
            "Yes. Boccia has a clear objective, turn-taking order and activity structure. Instructors can adjust explanations, pacing and prompts to suit each student's understanding and participation needs.",
            "In group activities, students can practise waiting, listening to instructions, expressing choices and completing an activity with classmates. The emphasis should be on participation, interaction and positive experiences rather than simply comparing results.",
            "The Boccia Association of Hong Kong, China can arrange school outreach programmes for kindergartens, primary schools and secondary schools.",
          ],
        },
      ],
      link: {
        label: "Explore school outreach and boccia activities",
        path: "/en/services",
      },
    },
    {
      heading: "Why Is Boccia Suitable for Older Adults?",
      paragraphs: [
        "Boccia movements are relatively easy to understand, and the pace can be adjusted to suit participants. Players control the direction and force of each shot without necessarily needing to move quickly, making the activity accessible to older adults with different activity levels.",
        "At older adult centres or community sessions, boccia can include individual practice, partner tasks, small-group games and simple strategy challenges.",
        "Older adults can use these sessions to:",
      ],
      bullets: ["Take part in an appropriate level of physical activity", "Practise hand-eye coordination", "Observe and judge positions on court", "Consider shot order and strategy", "Communicate with other participants", "Build group interaction and social opportunities"],
      afterBullets: "Boccia combines sporting and game elements. Participants do not need previous experience: they can start with short-distance shots and simple targets, then gradually introduce scoring and strategy.",
      link: {
        label: "Contact us about an older adult centre or community session",
        path: "/en/contact",
      },
    },
    {
      heading: "Rehabilitation Participants and Inclusive Activities",
      paragraphs: [
        "Boccia can form part of an inclusive activity in which people of different ages, backgrounds and abilities take part in the same space.",
        "The purpose is not to compare participants' physical abilities, but to give each person a clear role and opportunity to contribute. Through playing, observing, discussing and cooperating, participants can complete a game or challenge together.",
        "Inclusive boccia activities can support the following elements:",
      ],
      subsections: [
        {
          heading: "Equal Participation",
          paragraphs: ["Each person can participate according to their abilities. Appropriate explanations, activity structures and assistance can help participants understand their turn and objective."],
        },
        {
          heading: "Cooperation and Communication",
          paragraphs: ["In team activities, participants discuss shot direction, order and strategy. Team members can also observe the court and offer ideas while waiting for their turn."],
        },
        {
          heading: "Respect for Different Abilities",
          paragraphs: ["Participants may use different methods to propel the ball. Activities can help people understand one another's needs and respect different abilities and ways of taking part."],
        },
        {
          heading: "Building an Inclusive Experience",
          paragraphs: ["Schools, companies, social service organisations and community groups can use boccia to create a shared activity that encourages exchange and cooperation."],
        },
      ],
      link: {
        label: "Enquire about inclusive and organisational boccia activities",
        path: "/en/services",
      },
    },
  ],
};

const baseArticle = {
  slug: "what-is-boccia",
  publishedDate: "2026-07-12",
  modifiedDate: "2026-07-12",
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
      introParagraphs: [
        "硬地滾球（Boccia）是一項充滿策略、技巧及專注力的球類運動，現時已發展成世界性的競技運動，並是殘疾人奧運會的正式比賽項目。",
        "與不少講求速度或力量的運動不同，硬地滾球更重視準確投球、戰術部署及臨場判斷。球員需要把自己的球盡量擲近白色目標球 Jack，並因應場上形勢選擇最合適的投球角度、力度及策略。",
      ],
      notice: null,
      summaryTable: null,
      sections: sharedSections.zh,
      faqs: [],
      relatedLinks: [],
      ctaTitle: "歡迎提供活動對象、日期、參加人數及場地資料，本會可協助規劃合適形式。",
      ctaText: "",
      ctaAction: "查詢合作",
      ctaPath: "/contact",
    },
    {
      slug: "who-can-play-boccia",
      path: "/rules/who-can-play-boccia",
      category: "認識硬地滾球",
      title: "硬地滾球適合哪些人士？",
      description: "硬地滾球適合不同年齡及能力人士參與，包括小朋友、SEN學生、長者、復康人士及傷健共融團體。了解硬地滾球如何讓參加者練習專注、策略思維、社交互動及團隊合作。",
      publishedBy: "中國香港硬地滾球總會",
      publishedDate: "2026-07-30",
      modifiedDate: "2026-07-31",
      image: bocciaAdultParticipantsImage,
      imageWidth: 1254,
      imageHeight: 1254,
      imageAlt: "兩名成年參加者在室內場地交流硬地滾球技巧",
      cardDescription: "了解小朋友、SEN學生、長者、復康人士及不同能力人士如何參與硬地滾球，以及學校、長者中心和機構可安排的活動形式。",
      introParagraphs: [
        "不少人以為硬地滾球只適合殘疾人士參與，其實這項運動並不限於特定年齡或能力。小朋友、SEN學生、長者、復康人士，以及參與傷健共融活動的人士，都可以按照自己的能力及活動安排參與。",
        "硬地滾球的基本目標，是把自己的球投向白色目標球，並嘗試比對手更接近目標。參加者除了需要控制方向和力度，亦要觀察場上位置、思考投球策略，以及與隊友溝通。",
        "因此，硬地滾球不單是一項運動，也是一項結合專注、判斷、社交互動和團隊合作的活動。",
      ],
      notice: {
        title: "社區參與與正式比賽",
        text: "學校、社區及體驗活動可以按參加者的年齡、能力和需要調整活動形式，讓不同人士參與。正式殘疾人奧運會及國際分級賽事則設有運動員資格和分級要求，兩者的參與安排並不完全相同。",
      },
      summaryTable: {
        caption: "不同人士參與硬地滾球的特點",
        headers: ["適合對象", "參與硬地滾球的特點"],
        rows: [
          ["小朋友", "練習手眼協調、專注力、輪候及遵守規則"],
          ["SEN學生", "在清晰流程下練習社交互動、等待及表達"],
          ["長者", "以較容易參與的方式保持活動及增加社交機會"],
          ["復康人士", "可按個人能力參與投球、策略及團隊活動"],
          ["傷健共融活動", "讓不同能力人士在同一活動中合作及交流"],
          ["企業及團體", "透過策略和分工加強溝通及團隊合作"],
        ],
        afterText: "以上活動帶來的實際體驗會因參加者、活動設計及指導方式而有所不同。",
      },
      sections: whoCanPlaySections.zh,
      faqs: [
        {
          question: "硬地滾球是否只適合殘疾人士？",
          answer: "不是。正式殘疾人奧運會及國際分級比賽設有特定參賽資格，但學校、社區、長者中心、機構及體驗活動可以按參加者需要調整，讓不同年齡及能力人士參與。",
        },
        {
          question: "長者可以玩硬地滾球嗎？",
          answer: "可以。活動可按照參加者的能力、場地及經驗安排合適的距離、節奏和形式。沒有硬地滾球經驗的長者，也可以先由基本投球開始。",
        },
        {
          question: "小朋友幾歲可以開始接觸硬地滾球？",
          answer: "沒有單一固定年齡。幼兒及兒童可按照活動內容、理解能力和指導安排參與。年紀較小的參加者可先進行簡單投球、顏色辨認及輪候活動。",
        },
        {
          question: "SEN學生可以參與嗎？",
          answer: "可以。導師可按學生需要調整講解、提示和活動流程，讓學生在清晰及有支援的環境下參與。",
        },
        {
          question: "學校可以安排到校活動嗎？",
          answer: "可以。中國香港硬地滾球總會可為幼稚園、小學、中學及教育機構安排硬地滾球體驗和推廣活動。實際內容可按學生人數、年齡、場地和活動時間商討。",
          linkLabel: "了解本會服務",
          linkPath: "/services",
        },
        {
          question: "參與前需要有運動經驗嗎？",
          answer: "不需要。初次參加者可以先學習基本投球、目標球和紅藍雙方的概念，再逐步接觸計分及策略。",
        },
        {
          question: "參加活動前需要購買球具嗎？",
          answer: "不一定。學校、機構或個人可先參與體驗活動，再按實際用途考慮是否購買球具。如有需要，本會亦提供不同品牌硬地滾球及裁判用品查詢。",
          linkLabel: "查看硬地滾球及裁判用品",
          linkPath: "/equipment",
        },
      ],
      relatedLinks: [],
      ctaTitle: "想親身體驗硬地滾球？",
      ctaText: "中國香港硬地滾球總會為不同學校、機構及團體提供到校推廣、社區體驗、長者中心活動、傷健共融活動、教練及裁判培訓，以及球具和裁判用品查詢。\n\n無論參加者是小朋友、長者、初學者或不同能力人士，都可以聯絡本會商討合適的活動形式。",
      ctaAction: "立即聯絡我們",
      ctaPath: "/contact",
    },
    {
      slug: "boccia-equipment-guide",
      path: "/rules/boccia-equipment-guide",
      category: "認識硬地滾球",
      title: "硬地滾球需要什麼器材？初學者球具指南",
      description: "硬地滾球需要什麼器材？了解紅色、藍色及白色硬地滾球的用途、一套球具有多少個球、初學者需要準備什麼，以及香港購買硬地滾球的方法。",
      publishedBy: "中國香港硬地滾球總會",
      publishedDate: "2026-09-10",
      modifiedDate: "2026-09-10",
      image: hkBocciaAssociationSetImage,
      imageWidth: 1024,
      imageHeight: 1024,
      imageAlt: "硬地滾球球具套裝，包括紅色球、藍色球、白色目標球及收納袋",
      cardDescription: "了解紅、藍、白色硬地滾球的用途、完整球具套裝內容，以及初學者、學校及機構的球具準備方法。",
      introParagraphs: [
        "初次接觸硬地滾球，最基本需要一套完整球具，包括紅色球、藍色球及白色目標球（Jack）。如果進行正式活動或比賽，亦可能需要量度及裁判工具。",
        "以下簡單介紹硬地滾球基本器材、不同顏色球的用途，以及初學者如何選擇球具。",
      ],
      notice: null,
      summaryTable: null,
      sections: [
        {
          heading: "硬地滾球的紅、藍、白球有什麼用途？",
          paragraphs: [
            "紅色球及藍色球代表比賽雙方。參加者需要運用投球技巧及策略，令自己的球盡量接近白色目標球。",
            "白色球（Jack）是每局的目標球，紅、藍雙方都會圍繞它的位置進行攻防及計分。",
          ],
        },
        {
          heading: "硬地滾球基本器材有哪些？",
          paragraphs: ["一套完整硬地滾球包括："],
          bullets: ["6個紅色球", "6個藍色球", "1個白色目標球（Jack）", "收納袋"],
          afterBullets: "即合共 13個球。",
          afterParagraphs: ["進行正式活動或比賽時，亦可能需要裁判板、量度工具及其他裁判用品。"],
        },
        {
          heading: "初學者需要準備什麼？",
          paragraphs: [
            "初學者不需要準備大量專業器材，一套完整硬地滾球及合適的活動空間已經可以開始。",
            "初學階段可以先認識投球方法、力度控制、基本計分及簡單策略，再按需要增加其他器材。",
            "學校或機構舉辦活動時，則可以按照參加人數及分組方式決定所需球具數量。",
          ],
        },
        {
          heading: "香港可以在哪裡購買硬地滾球球具？",
          paragraphs: [
            "中國香港硬地滾球總會提供硬地滾球球具及相關裁判用品。",
            "球具套裝包括 6個紅色球、6個藍色球、1個白色目標球及收納袋，適合初學者、學校及機構作體驗、教學及訓練用途。",
            "如需了解球具詳情，可透過本會網站的 WhatsApp 或電郵查詢。",
          ],
        },
      ],
      faqs: [
        {
          question: "一套硬地滾球有多少個球？",
          answer: "一套共有13個球，包括6個紅色球、6個藍色球及1個白色目標球。",
        },
        {
          question: "初學者需要裁判工具嗎？",
          answer: "一般體驗及初學訓練可以先使用基本球具；正式活動或比賽則可按需要加入裁判及量度工具。",
        },
        {
          question: "學校及機構可以購買嗎？",
          answer: "可以，可按照參加人數及活動形式選擇合適的球具數量。",
        },
      ],
      relatedLinks: [
        { label: "認識硬地滾球", path: "/rules" },
        { label: "查看硬地滾球球具", path: "/equipment" },
      ],
      ctaTitle: "需要安排硬地滾球外展服務？",
      ctaText: "中國香港硬地滾球總會可為學校、機構及團體安排合適的硬地滾球活動。",
      ctaAction: "查詢外展服務",
      ctaPath: "/services",
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
      introParagraphs: [
        "Boccia is a precision ball sport that combines strategy, skill and concentration. It has developed into an international competitive sport and is an official event at the Paralympic Games.",
        "Unlike many sports that rely mainly on speed or physical strength, Boccia places greater emphasis on accurate ball placement, tactical planning and decision-making. Players aim to place their coloured balls as close as possible to the white target ball, known as the Jack.",
      ],
      notice: null,
      summaryTable: null,
      sections: sharedSections.en,
      faqs: [],
      relatedLinks: [],
      ctaTitle: "Please share the activity audience, date, number of participants, and venue details. We can help plan a suitable format.",
      ctaText: "",
      ctaAction: "Enquire about partnership",
      ctaPath: "/contact",
    },
    {
      slug: "who-can-play-boccia",
      path: "/en/rules/who-can-play-boccia",
      category: "About Boccia",
      title: "Who Can Play Boccia?",
      description: "Learn how children, students with special educational needs, older adults, rehabilitation participants and people of different abilities can take part in community and introductory boccia activities.",
      publishedBy: "The Boccia Association of Hong Kong, China",
      publishedDate: "2026-07-30",
      modifiedDate: "2026-07-31",
      image: bocciaAdultParticipantsImage,
      imageWidth: 1254,
      imageHeight: 1254,
      imageAlt: "Two adult participants discussing Boccia in an indoor sports venue",
      cardDescription: "Learn how children, students with special educational needs, older adults, rehabilitation participants and people of different abilities can take part in boccia activities.",
      introParagraphs: [
        "Boccia is sometimes assumed to be only for people with disabilities, but community and introductory participation is not limited to a particular age or ability. Children, students with special educational needs, older adults, rehabilitation participants and people joining inclusive activities can all take part in ways that suit their abilities and the activity format.",
        "The basic objective is to propel a ball towards the white target ball, or Jack, and finish closer than the opposing side. Participants control direction and force while observing positions on court, considering shot strategy and communicating with teammates.",
        "Boccia is therefore more than a sport. It can also be an activity that combines concentration, judgement, social interaction and teamwork.",
      ],
      notice: {
        title: "Community Participation and Formal Competition",
        text: "Schools, community groups and introductory sessions can adapt the activity format to participants' ages, abilities and needs. Formal Paralympic and classified international competitions have athlete eligibility and classification requirements, so their participation arrangements are not the same.",
      },
      summaryTable: {
        caption: "How different groups can participate in boccia",
        headers: ["Suitable participants", "Features of boccia participation"],
        rows: [
          ["Children", "Practise hand-eye coordination, concentration, turn-taking and following rules"],
          ["Students with special educational needs", "Practise social interaction, waiting and expression within a clear structure"],
          ["Older adults", "Stay active in an accessible format and gain opportunities for social interaction"],
          ["Rehabilitation participants", "Take part in playing, strategy and team activities according to individual abilities"],
          ["Inclusive activities", "Enable people of different abilities to cooperate and communicate in one activity"],
          ["Companies and groups", "Strengthen communication and teamwork through strategy and shared roles"],
        ],
        afterText: "The experience and outcomes of each activity will vary according to the participants, activity design and instruction.",
      },
      sections: whoCanPlaySections.en,
      faqs: [
        {
          question: "Is Boccia Only for People with Disabilities?",
          answer: "No. Formal Paralympic and classified international competitions have specific eligibility requirements, but schools, communities, older adult centres, organisations and introductory sessions can adapt activities so that people of different ages and abilities can participate.",
        },
        {
          question: "Can Older Adults Play Boccia?",
          answer: "Yes. The distance, pace and format can be adapted to participants' abilities, venue and experience. Older adults with no previous boccia experience can begin with basic shots.",
        },
        {
          question: "At What Age Can Children Start Boccia?",
          answer: "There is no single fixed age. Young children can participate according to the activity content, their understanding and the available instruction. Younger participants can begin with simple shots, colour recognition and turn-taking activities.",
        },
        {
          question: "Can Students with Special Educational Needs Take Part?",
          answer: "Yes. Instructors can adapt explanations, prompts and the activity structure so that students participate in a clear and supportive environment.",
        },
        {
          question: "Can Schools Arrange an Outreach Programme?",
          answer: "Yes. The Boccia Association of Hong Kong, China can arrange introductory and outreach activities for kindergartens, primary schools, secondary schools and educational organisations. Content can be discussed according to student numbers, age, venue and session length.",
          linkLabel: "Explore our services",
          linkPath: "/en/services",
        },
        {
          question: "Do Participants Need Sporting Experience?",
          answer: "No. First-time participants can begin with basic shots and the concepts of the Jack and the red and blue sides before gradually learning scoring and strategy.",
        },
        {
          question: "Do Participants Need to Buy Equipment Before an Activity?",
          answer: "Not necessarily. Schools, organisations and individuals can join an introductory session before deciding whether equipment is needed for their intended use. The Association can also provide enquiries about different brands of boccia and referee equipment.",
          linkLabel: "View boccia and referee equipment",
          linkPath: "/en/equipment",
        },
      ],
      relatedLinks: [],
      ctaTitle: "Would You Like to Experience Boccia?",
      ctaText: "The Boccia Association of Hong Kong, China provides school outreach programmes, community experience sessions, older adult centre activities, inclusive activities, coach and referee training, and enquiries about boccia and referee equipment for schools, organisations and groups.\n\nWhether participants are children, older adults, beginners or people of different abilities, contact us to discuss a suitable activity format.",
      ctaAction: "Contact Us",
      ctaPath: "/en/contact",
    },
  ],
};

export function getBocciaArticle(pathname, language) {
  const path = pathname.replace(/\/$/, "") || "/";
  return bocciaArticles[language].find((article) => article.path === path) || null;
}
