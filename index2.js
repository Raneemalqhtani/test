const obj = [{ label: "a", value: 20 },

{ label: "b", value: 30 },

{ label: "c", value: 25 }];

const updateObj = obj.map (item => {
if( item.label === "b"){
 return{ ...item, value: 31} ;  
}
return item;
});
console.log(updateObj);



let text = "hello world!";
let result1 = text.charAt(0).toUpperCase()+ text.slice(1);
let result2 = text.toUpperCase();
console.log(result1);
console.log(result2);


