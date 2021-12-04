let name = prompt(`Give your name`);
let roll = Number(prompt(`Give your Roll`));

let bn = Number(prompt(`Give your bn marks`));
let en = Number(prompt(`Give your en marks`));
let math = Number(prompt(`Give your math marks`));
let ss = Number(prompt(`Give your ss marks`));
let s = Number(prompt(`Give your s marks`));
let rel = Number(prompt(`Give your rel marks`));

let result = new Cgpa();

console.log(`
    Name: Your name is ${name}
    Roll: your roll is ${roll}

    Subject         Number         Gpa          Gread                    
    Bangla          ${bn}           ${result.gpa(bn)}         ${result.gread(
  bn
)}
    English         ${en}           ${result.gpa(en)}         ${result.gread(
  en
)}
    Math            ${math}         ${result.gpa(math)}       ${result.gread(
  math
)}
    Social Science  ${ss}           ${result.gpa(ss)}         ${result.gread(
  ss
)}
    Science         ${s}            ${result.gpa(s)}          ${result.gread(s)}
    religion        ${rel}          ${result.gpa(rel)}        ${result.gread(
  rel
)}
------------------------------------------------------------------------------------
    Cgpa ${result.finalCgpa(
      result.gpa(bn),
      result.gpa(en),
      result.gpa(math),
      result.gpa(ss),
      result.gpa(s),
      result.gpa(rel)
    )}




`);
