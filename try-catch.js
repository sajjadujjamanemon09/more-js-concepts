function checkAge(){
    const ageField = document.getElementById('age')
    const ageText = ageField.value ;
    const errorTag = document.getElementById('error')
    
   
    
    try{
       const age = parseInt(ageText)
       if(isNaN(age)){
        throw "Please Enter A Number"
       }
       else if(age < 18){
        throw "Bacch Kaccha not allowed"
       }
       else if(age > 30){
        throw "Murubbi not allowed"
       }

       errorTag.innerHTML = ''
    }
    catch(err){
        console.log('error', err);
        errorTag.innerHTML = 'ERROR:' + err
    }
    finally{
        console.log('All Done inside try catch');
    }
    console.log(111111);
}