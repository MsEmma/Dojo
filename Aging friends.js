var string = "Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27";

var ls = string.replace(/ is/g, "").split(", ");

var map = ls.map(function(str){
  
   return {
        name : str.match(/\w+/).join(),
        age : Number(str.match(/\d+/))
   };
  
});

// console.log(map);

map.sort(function(a,b){
  return b.age - a.age;
});

console.log(map);

var oldest = map[0];

console.log(oldest);

var younger = map.filter(function(a){
                return a.age < 20;
              });

console.log(younger);


