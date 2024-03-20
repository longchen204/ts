type user={
    name:string,
    age:number,
    address:string,
    job:string,
    isMarried:boolean,
    gender:string
};
const myInfor  :user = {
    name: 'Nguyen Van A',
    age: 20,
    address: 'Bắc giang',
    job: 'Dev',
    isMarried: true,
    gender : "male"
}
const myStudentInfor :user= {
    name: 'Nguyen Van B',
    age: 20,
    address: 'Bắc giang',
    job: 'Dev',
    isMarried: true,
    gender :"male"
    

}
console.log(`hello quan an db que ${myStudentInfor.address}`);