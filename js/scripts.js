$(document).ready(function(){
  $("form#romanNumeral").submit(function(event) {
    event.preventDefault();

  var num = $("#numeral").val();

  if(num>3999){
    alert("Roman Numeral limit = 3999");
  }

  var oldSplit = JSON.stringify(num).split("")
  var split = oldSplit.slice(1,oldSplit.length-1)

  console.log(split)
  var answer = [];


  if(split.length===4){
//1000's
      if(split[0]==="1"){
        answer.push("M");
      }else if(split[0]==="2"){
        answer.push("MM");
      }else if(split[0]==="3"){
        answer.push("MMM");
      }
 //100's
      if(split[1]==="1"){
        answer.push("C");
    }else if(split[1]==="2"){
        answer.push("CC");
    }else if(split[1]==="3"){
        answer.push("CCC");
    }else if(split[1]==="4"){
        answer.push("CD");
    }else if(split[1]==="5"){
        answer.push("D");
    }else if(split[1]==="6"){
        answer.push("DC");
    }else if(split[1]==="7"){
        answer.push("DCC");
    }else if(split[1]==="8"){
        answer.push("DCCC");
    }else if(split[1]==="9"){
        answer.push("CM");
  }

  //10'split
     if(split[2]==="1"){
        answer.push("X");
    }else if(split[2]==="2"){
        answer.push("XX");
    }else if(split[2]==="3"){
        answer.push("XXX");
    }else if(split[2]==="4"){
        answer.push("XL");
    }else if(split[2]==="5"){
        answer.push("L");
    }else if(split[2]==="6"){
        answer.push("LX");
    }else if(split[2]==="7"){
        answer.push("LXX");
    }else if(split[2]==="8"){
        answer.push("LXXX");
    }else if(split[2]==="9"){
        answer.push("XC");
  }
  //1's
   if(split[3]==="1"){
        answer.push("I");
    }else if(split[3]==="2"){
        answer.push("II");
    }else if(split[3]==="3"){
        answer.push("III");
    }else if(split[3]==="4"){
        answer.push("IV");
    }else if(split[3]==="5"){
        answer.push("V");
    }else if(split[3]==="6"){
        answer.push("VI");
    }else if(split[3]==="7"){
        answer.push("VII");
    }else if(split[3]==="8"){
        answer.push("VIII");
    }else if(split[3]==="9"){
        answer.push("IX");
  }
}

//NEW IF FOR 100's

if(split.length===3){

 //100's
      if(split[0]==="1"){
        answer.push("C");
    }else if(split[0]==="2"){
        answer.push("CC");
    }else if(split[0]==="3"){
        answer.push("CCC");
    }else if(split[0]==="4"){
        answer.push("CD");
    }else if(split[0]==="5"){
        answer.push("D");
    }else if(split[0]==="6"){
        answer.push("DC");
    }else if(split[0]==="7"){
        answer.push("DCC");
    }else if(split[0]==="8"){
        answer.push("DCCC");
    }else if(split[0]==="9"){
        answer.push("CM");
  }

  //10'split
     if(split[1]==="1"){
        answer.push("X");
    }else if(split[1]==="2"){
        answer.push("XX");
    }else if(split[1]==="3"){
        answer.push("XXX");
    }else if(split[1]==="4"){
        answer.push("XL");
    }else if(split[1]==="5"){
        answer.push("L");
    }else if(split[1]==="6"){
        answer.push("LX");
    }else if(split[1]==="7"){
        answer.push("LXX");
    }else if(split[1]==="8"){
        answer.push("LXXX");
    }else if(split[1]==="9"){
        answer.push("XC");
  }
  //1's
   if(split[2]==="1"){
        answer.push("I");
    }else if(split[2]==="2"){
        answer.push("II");
    }else if(split[2]==="3"){
        answer.push("III");
    }else if(split[2]==="4"){
        answer.push("IV");
    }else if(split[2]==="5"){
        answer.push("V");
    }else if(split[2]==="6"){
        answer.push("VI");
    }else if(split[2]==="7"){
        answer.push("VII");
    }else if(split[2]==="8"){
        answer.push("VIII");
    }else if(split[2]==="9"){
        answer.push("IX");
  }
}

//NEW IF FOR 10's

if(split.length===2){

  //10'split
     if(split[0]==="1"){
        answer.push("X");
    }else if(split[0]==="2"){
        answer.push("XX");
    }else if(split[0]==="3"){
        answer.push("XXX");
    }else if(split[0]==="4"){
        answer.push("XL");
    }else if(split[0]==="5"){
        answer.push("L");
    }else if(split[0]==="6"){
        answer.push("LX");
    }else if(split[0]==="7"){
        answer.push("LXX");
    }else if(split[0]==="8"){
        answer.push("LXXX");
    }else if(split[0]==="9"){
        answer.push("XC");
  }
  //1's
   if(split[1]==="1"){
        answer.push("I");
    }else if(split[1]==="2"){
        answer.push("II");
    }else if(split[1]==="3"){
        answer.push("III");
    }else if(split[1]==="4"){
        answer.push("IV");
    }else if(split[1]==="5"){
        answer.push("V");
    }else if(split[1]==="6"){
        answer.push("VI");
    }else if(split[1]==="7"){
        answer.push("VII");
    }else if(split[1]==="8"){
        answer.push("VIII");
    }else if(split[1]==="9"){
        answer.push("IX");
  }
}

//NEW IF FOR 1's

if(split.length===1){

  //1's
   if(split[0]==="1"){
        answer.push("I");
    }else if(split[0]==="2"){
        answer.push("II");
    }else if(split[0]==="3"){
        answer.push("III");
    }else if(split[0]==="4"){
        answer.push("IV");
    }else if(split[0]==="5"){
        answer.push("V");
    }else if(split[0]==="6"){
        answer.push("VI");
    }else if(split[0]==="7"){
        answer.push("VII");
    }else if(split[0]==="8"){
        answer.push("VIII");
    }else if(split[0]==="9"){
        answer.push("IX");
  }
}

var joined = answer.join('')
console.log(joined)
$('#result').text(joined)
});
});
