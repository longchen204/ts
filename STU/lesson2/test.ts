{
    const myPortfolio = {
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
    }
    console.log(myPortfolio);
    myPortfolio.age++;
    console.log(`Tôi: ${myPortfolio.age} tuổi`)
}
