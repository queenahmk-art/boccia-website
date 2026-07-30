export const articleSeoRecords = {
  "/rules/what-is-boccia": {
    language: "zh",
    title: "什麼是硬地滾球（Boccia）？",
    publishedBy: "中國香港硬地滾球總會",
    publishedDate: "2026-07-12",
    modifiedDate: "2026-07-12",
    faqs: [],
  },
  "/en/rules/what-is-boccia": {
    language: "en",
    title: "What Is Boccia?",
    publishedBy: "The Boccia Association of Hong Kong, China",
    publishedDate: "2026-07-12",
    modifiedDate: "2026-07-12",
    faqs: [],
  },
  "/rules/who-can-play-boccia": {
    language: "zh",
    title: "硬地滾球適合哪些人士？",
    publishedBy: "中國香港硬地滾球總會",
    publishedDate: "2026-07-30",
    modifiedDate: "2026-07-31",
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
      },
      {
        question: "參與前需要有運動經驗嗎？",
        answer: "不需要。初次參加者可以先學習基本投球、目標球和紅藍雙方的概念，再逐步接觸計分及策略。",
      },
      {
        question: "參加活動前需要購買球具嗎？",
        answer: "不一定。學校、機構或個人可先參與體驗活動，再按實際用途考慮是否購買球具。如有需要，本會亦提供不同品牌硬地滾球及裁判用品查詢。",
      },
    ],
  },
  "/en/rules/who-can-play-boccia": {
    language: "en",
    title: "Who Can Play Boccia?",
    publishedBy: "The Boccia Association of Hong Kong, China",
    publishedDate: "2026-07-30",
    modifiedDate: "2026-07-31",
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
      },
      {
        question: "Do Participants Need Sporting Experience?",
        answer: "No. First-time participants can begin with basic shots and the concepts of the Jack and the red and blue sides before gradually learning scoring and strategy.",
      },
      {
        question: "Do Participants Need to Buy Equipment Before an Activity?",
        answer: "Not necessarily. Schools, organisations and individuals can join an introductory session before deciding whether equipment is needed for their intended use. The Association can also provide enquiries about different brands of boccia and referee equipment.",
      },
    ],
  },
};

export function getArticleSeoRecord(pathname) {
  const path = pathname.replace(/\/$/, "") || "/";
  return articleSeoRecords[path] || null;
}
