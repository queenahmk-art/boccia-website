export const SITE_URL = "https://hkboccia.com.hk";
export const OG_IMAGE_URL = `${SITE_URL}/og-boccia.jpg`;

const zh = {
  "/": {
    title: "中國香港硬地滾球總會｜香港硬地滾球推廣及培訓",
    description: "中國香港硬地滾球總會致力推廣硬地滾球普及化，提供學校、企業及社福機構推廣活動、教練及裁判培訓、體驗比賽及球具服務。",
  },
  "/about": {
    title: "關於中國香港硬地滾球總會｜推動硬地滾球普及化",
    description: "了解中國香港硬地滾球總會的成立宗旨、使命及發展方向，推動不同年齡及能力人士參與硬地滾球運動。",
  },
  "/rules": {
    title: "硬地滾球基本玩法及得分方法｜中國香港硬地滾球總會",
    description: "簡單了解硬地滾球基本玩法、紅藍雙方投球方式、白色目標球 Jack、得分方法及勝出條件。",
  },
  "/services": {
    title: "硬地滾球活動及服務｜學校、企業及社福機構",
    description: "提供學校硬地滾球活動、企業 Team Building、社區推廣、傷健共融工作坊、教練裁判培訓及球具租借購買服務。",
  },
  "/partnership": {
    title: "硬地滾球合作計劃｜學校、企業及社福機構",
    description: "中國香港硬地滾球總會積極與學校、教育機構、企業、社福機構及社區團體合作，策劃體驗活動、工作坊及比賽。",
  },
  "/coaches-referees": {
    title: "硬地滾球教練及裁判培訓｜認可專業人才",
    description: "了解中國香港硬地滾球總會的教練及裁判培訓計劃、專業發展方向及認可教練裁判名單更新安排。",
  },
  "/contact": {
    title: "聯絡中國香港硬地滾球總會｜活動及課程查詢",
    description: "查詢硬地滾球推廣活動、學校服務、企業活動、教練及裁判培訓、比賽合作及球具服務。",
  },
};

const en = {
  "/en": {
    title: "The Boccia Association of Hong Kong, China｜Boccia Promotion and Training",
    description: "The Boccia Association of Hong Kong, China promotes boccia through school programmes, corporate activities, community workshops, coach and referee training, competitions and equipment services.",
  },
  "/en/about": {
    title: "About the Boccia Association of Hong Kong, China｜Our Mission",
    description: "Learn about the Association's mission, purpose, and work to make boccia accessible to people of different ages and abilities in Hong Kong.",
  },
  "/en/rules": {
    title: "How to Play Boccia｜Rules and Scoring in Hong Kong",
    description: "Learn boccia basics, including red and blue balls, the white jack, scoring, tactical play, and how a match is won.",
  },
  "/en/services": {
    title: "Boccia Activities and Services｜Schools, Corporate and Community",
    description: "Boccia programmes for schools, corporate team building, community outreach, inclusive workshops, coach and referee training, and equipment support.",
  },
  "/en/partnership": {
    title: "Boccia Partnership Programmes｜Schools, Corporate and Community",
    description: "Partner with the Boccia Association of Hong Kong, China on school programmes, corporate workshops, community activities, and boccia competitions.",
  },
  "/en/coaches-referees": {
    title: "Boccia Coach and Referee Training｜Professional Development",
    description: "Explore future boccia coach and referee training, professional development, and recognised practitioner pathways in Hong Kong.",
  },
  "/en/contact": {
    title: "Contact the Boccia Association of Hong Kong, China｜Enquiries",
    description: "Contact the Association about boccia activities, school and corporate programmes, training, competitions, partnerships, and equipment services.",
  },
};

const notFound = {
  title: "Page Not Found｜The Boccia Association of Hong Kong, China",
  description: "The requested page could not be found.",
  noindex: true,
};

export const staticRoutes = [...Object.keys(zh), ...Object.keys(en)];

export function normalisePath(pathname = "/") {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

export function isEnglishPath(pathname) {
  const path = normalisePath(pathname);
  return path === "/en" || path.startsWith("/en/");
}

export function getAlternatePaths(pathname) {
  const path = normalisePath(pathname);
  const zhPath = isEnglishPath(path) ? path.replace(/^\/en/, "") || "/" : path;
  const enPath = zhPath === "/" ? "/en" : `/en${zhPath}`;

  return { zhPath, enPath };
}

function toCanonicalUrl(pathname) {
  return `${SITE_URL}${pathname === "/" ? "/" : `${pathname}/`}`;
}

export function getSeo(pathname) {
  const path = normalisePath(pathname);
  const language = isEnglishPath(path) ? "en" : "zh";
  const page = (language === "en" ? en : zh)[path];
  const { zhPath, enPath } = getAlternatePaths(path);

  if (!page) {
    return {
      ...notFound,
      path,
      language,
      locale: language === "en" ? "en_HK" : "zh_HK",
      lang: language === "en" ? "en-HK" : "zh-Hant-HK",
      canonical: toCanonicalUrl(path),
      zhUrl: toCanonicalUrl(zhPath),
      enUrl: toCanonicalUrl(enPath),
    };
  }

  return {
    ...page,
    path,
    language,
    locale: language === "en" ? "en_HK" : "zh_HK",
    lang: language === "en" ? "en-HK" : "zh-Hant-HK",
    canonical: toCanonicalUrl(path),
    zhUrl: toCanonicalUrl(zhPath),
    enUrl: toCanonicalUrl(enPath),
    noindex: false,
  };
}

export function getHomepageStructuredData(pathname) {
  const seo = getSeo(pathname);
  if (seo.path !== "/" && seo.path !== "/en") {
    return null;
  }

  const isEnglish = seo.language === "en";
  const organisationName = isEnglish ? "The Boccia Association of Hong Kong, China Limited" : "中國香港硬地滾球總會";
  const description = isEnglish
    ? "The official website of the Boccia Association of Hong Kong, China, promoting accessible boccia participation, training, and partnerships in Hong Kong."
    : "中國香港硬地滾球總會官方網站，推廣硬地滾球普及化、培訓及香港社區合作。";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "中國香港硬地滾球總會",
        alternateName: "The Boccia Association of Hong Kong, China Limited",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/logo.png`,
        description,
      },
      {
        "@type": "SportsOrganization",
        "@id": `${SITE_URL}/#sports-organization`,
        name: "中國香港硬地滾球總會",
        alternateName: "The Boccia Association of Hong Kong, China Limited",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/logo.png`,
        description,
        sport: "Boccia",
        areaServed: "Hong Kong",
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "中國香港硬地滾球總會",
        alternateName: "The Boccia Association of Hong Kong, China Limited",
        url: `${SITE_URL}/`,
        inLanguage: ["zh-Hant-HK", "en-HK"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${seo.canonical}#webpage`,
        url: seo.canonical,
        name: organisationName,
        description: seo.description,
        inLanguage: seo.lang,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#sports-organization` },
      },
    ],
  };
}
