class PersonalData{
    constructor(name,eng,tel,hindi,sci,soc,maths){
        console.log("Tenth Marks ");
        // console.log(name,eng,tel,hindi,sci,soc,maths);
        this.name = name;
        this.eng = eng;
        this.tel = tel;
        this.hindi = hindi;
        this.sci = sci;
        this.soc = soc;
        this.maths = maths;
    }

    calculateResult = () => {
        // console.log("Inside Calculate Result");
        console.log(this.name);
        console.log(this.eng);
        console.log(this.tel);
        console.log(this.hindi);
        console.log(this.sci);
        console.log(this.soc);
        console.log(this.maths);
        if( this.eng>=35 &&
            this.tel>=35 &&
            this.hindi>=35 &&
            this.sci>=35 &&
            this.soc>=35 &&
            this.maths>=35
        ){ console.log("Pass");
        }else{
            console.log("Fail")
        }
    }
}
export default PersonalData;

