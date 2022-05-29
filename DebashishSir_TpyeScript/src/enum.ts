//Numeric Enum
//enums without initializers either need to be first, 
//or have to come after numeric enums initialized with numeric constants or other constant enum members.
enum Number2{
  Up="Anjani",
  //down;  , Enum member must have initializer.ts(1061)
}
enum Number3{
  Up,
  down="Anjani",
}
function respond(name:String, value:Number3):void{
  console.log("Name: "+name+", Value: "+value);
}
respond("Sahu", Number3.down);



//String Enum
enum BTECH {
    CIVIL = 'CIVIL ENGG',
    MACH = 'MACHNACAL ENGG',
    EC = 'ELECTRAL ENGG',
    ECE = 'ELECTRONIC ENGG',
    CS = 'COMPUTER SCIENCE',
  }
  
  enum Student {
    'SAHNIK',
    'SOUMYDEEP',
    'SOURAV',
  }
  
  enum SALARY {
    SAHNIK = 14000,
    SOUMYDEEP = 24000,
    SOURAV = 34000,
  }
  
  enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec,
  }
  
  function IsItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
      case Month.Jan:
      case Month.Jul:
      case Month.Aug:
        isSummer = true;
        break;
      default:
        isSummer = false;
        break;
    }
    return isSummer;
  }
  
  console.log(IsItSummer(Month.Jan));
  console.log(IsItSummer(Month.Mar));


  //Heterogeneous Enum
  enum Number4{
    Up=8,
    down="Anjani",
  }


  