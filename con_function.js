function Tohid(){
    this.agecal = function(age){
        let result;

        if( age > 0 && age <= 10 ){
            result = `You are children`;
        }
        else if( age > 10 && age <= 18 ){
            result = `You are teenagers`;
        }
        else if( age > 18 && age <= 40 ){
            result = `You are younger people`;
        }
        else if( age > 40 ){
            result = `You are old people`;
        }
        else{
            result `You imput a wrong value`;
        }
        return result;
    }

    this.area = function(type, width,leanth){
        let allArea;
        if( type == 'rectangle' ){
            allArea = `Rectangle area size is = ${width * leanth}`;
        }else if( type == 'square' ){
            allArea = `Square Area size is = ${width ** 2}`;
        }else if( type == 'triangle' ){
            allArea = `Triangle area size is = ${.5 * width * leanth}`;
        }else{
            result `You imput a wrong value`;
        }
        return allArea;
    }
    this.ageCalculator = function(age){
        return`Your age is ${2021 - age} years old`;
    }


    this.curancy = function(type, amount){

        let convatAcc

        if( type == 'USD' ){
            convatAcc = `You get ${amount * 85} tk`;
        }
        else if( type == 'CAD' ){
            convatAcc = `You get ${amount * 99} tk`;
        }
        else if( type == 'POUND' ){
            convatAcc = `You get ${amount * 118} tk`;
        }
        else if( type == 'EURO' ){
            convatAcc = `You get ${amount * 107} tk`;
        }
        else{
            convatAcc = `You imput a wrong valu`;
        }

        return convatAcc;

    }
}