function Cgpa(){
    this.gpa = function(number){

        let gpaRes;
        if( number >= 0 && number < 33){
            gpaRes = 0.00;
        }
        else if ( number >= 33 && number < 40){
            gpaRes = 2.00;
        }
        else if ( number >= 40 && number < 50){
            gpaRes = 3.00;
        }
        else if ( number >= 50 && number < 60){
            gpaRes = 3.50;
        }
        else if ( number >= 60 && number < 70){
            gpaRes = 4.00;
        }
        else if ( number >= 70 && number < 80){
            gpaRes = 4.50;
        }
        else if ( number >= 80 && number <= 100){
            gpaRes = 5.00;
        }else{
            gpaRes = `You imput a wrong value`;
        }
        return gpaRes;

    }
    this.gread = function(number){

        let greRes;
        if( number >= 0 && number < 33){
            greRes = `F`;
        }
        else if ( number >= 33 && number < 40){
            greRes = `D`;
        }
        else if ( number >= 40 && number < 50){
            greRes = `C`;
        }
        else if ( number >= 50 && number < 60){
            greRes = `B`;
        }
        else if ( number >= 60 && number < 70){
            greRes = `A-`;
        }
        else if ( number >= 70 && number < 80){
            greRes = `A`;
        }
        else if ( number >= 80 && number <= 100){
            greRes = `A+`;
        }else{
            greRes = `You imput a wrong value`;
        }
        return greRes;

    }
    this.finalCgpa = function (bn, en, math, ss, s, rel){

        let totalgpa = bn + en + math + ss + s + rel;
        let cgpa = totalgpa / 6;

        if( bn == 0 || en == 0 || math == 0 || ss == 0 || s == 0 || rel == 0){
            return `You are fail`;
        }
        else{
            return cgpa.toFixed(2);
        }
    }
}