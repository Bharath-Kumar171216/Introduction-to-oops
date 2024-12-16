import logo from "./logo.svg";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import PersonalData from "./classes/PersonalData";

function App() {

  let BharathKumar = new PersonalData("Bharath",35,77,88,98,76,56);
  BharathKumar.calculateResult();
  let DurgaPrasad = new PersonalData();
  console.log(DurgaPrasad.name = "Durga Prasad");
  console.log(DurgaPrasad.eng = 77);
  console.log(DurgaPrasad.tel = 25);
  console.log(DurgaPrasad.hindi = 96);
  console.log(DurgaPrasad.sci = 36);
  console.log(DurgaPrasad.soc = 54);
  console.log(DurgaPrasad.maths = 85);
  if(DurgaPrasad.eng >=35 &&
    DurgaPrasad.tel >=35 &&
    DurgaPrasad.hindi >=35 &&
    DurgaPrasad.sci >=35 &&
    DurgaPrasad.soc >=35 &&
    DurgaPrasad.maths >=35 
  ){
    console.log("Pass");
  }else{
    console.log("Fail");
  }
  return (
    <div>
      <PersonalDetails
        firstname=" Bharath Kumar"
        lastname=" Veeravalli"
        gender=" male"
        age=" 22"
        fathername=" Veeravalli Sri Krishna"
        qualification=" B.tech"
        stream="Mechanical Engineering"
        designation=" Software Engineer"
      ></PersonalDetails>
      <PersonalDetails
        firstname=" Durga Prasad"
        lastname=" Pachiala"
        gender=" male"
        age=" 22"
        fathername=" Pachipala Srinivasa Rao"
        qualification=" B.tech"
        designation=" Software Engineer"
        stream="Mechanical Engineering"
      ></PersonalDetails>
    </div>
  );
}

export default App;
