import lutheranChurch from "../assets/served-organisations/evangelical-lutheran-church.jpg";
import redCrossTaiPoHub from "../assets/served-organisations/red-cross-tai-po-hub.jpg";
import purpleEmblem from "../assets/served-organisations/purple-emblem.jpg";
import loveInclusion from "../assets/served-organisations/love-inclusion.webp";

export const servedOrganisations = [
  {
    id: "evangelical-lutheran-church",
    nameZh: "基督教香港信義會",
    nameEn: "The Evangelical Lutheran Church of Hong Kong",
    logo: { src: lutheranChurch, width: 332, height: 332 },
    category: "faith-based-organisation",
    serviceType: null,
  },
  {
    id: "red-cross-tai-po-hub",
    nameZh: "香港紅十字會「大埔．共建坊」",
    nameEn: "Hong Kong Red Cross Together@Tai Po Hub",
    logo: { src: redCrossTaiPoHub, width: 1153, height: 225 },
    category: "community-service-centre",
    serviceType: null,
  },
  {
    id: "purple-emblem",
    nameZh: null,
    nameEn: null,
    logo: {
      src: purpleEmblem,
      width: 225,
      height: 225,
      altZh: "帶有 S 字及十字圖案的紫色標誌",
      altEn: "Purple logo with an S and a cross",
    },
    category: null,
    serviceType: null,
  },
  {
    id: "love-inclusion",
    nameZh: "愛共融慈善協會",
    nameEn: "Love Inclusion Charity Association",
    logo: { src: loveInclusion, width: 410, height: 432 },
    category: "charity",
    serviceType: null,
  },
];
