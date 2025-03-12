let myPromise=new Promise((resolve , reject) => {
    let num = Math.random();
    if(num>0.5){
     
      resolve("Greater")
    }else{
      reject("smaller")
    }
  
    // setTimeout(()=> {
      //resolve("Resolving in 2's")},2000);
  });
  
  myPromise
  .then((value)=>{console.log(value+"full")
  return "Akash"
  })
  .then((mess)=>{console.log(mess)
    return 10+20
  })
  .then((m)=>{console.log(m)})
  .catch((error)=>{console.log(error+"null")})