// khai báo kiểu dữ liệu trong typescript với keyword "type"

const message: string = "DMM đi chơi không";
const myAge: number = 20;
const isMarried: boolean = false;
const mySkill: string[] = ["HTML-CSS", "JavaScript", "PHP", "MySQL"];
const mySkills2: Array<string> = ["HTML-CSS", "JS", "PHP"];

type educationType = {
  university: string;
  major: string;
  GPA: number;
};
type porfolioType = {
  fullName: string;
  address: string;
  age: number;
  job: string;
  birthDay: string;
  bio: string;
  skill: string[];
  education: educationType;
};

const myPortfolio: porfolioType = {
  fullName: "Hoàng Huy Long",
  address: "Bắc Giang",
  age: 20,
  job: "IT",
  birthDay: "2004-07-07",
  bio: "OK",
  skill: ["HTML-CSS", "Javascript", "PHP", "MySQL"],
  education: {
    university: "FPT Polytechnic Hà Nội",
    major: "Information Technology",
    GPA: 7.5,
  },
};
console.log(myPortfolio);
