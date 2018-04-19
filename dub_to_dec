var str="1101",n;

function convDec(n){
let mn=0.5,dec=0;
for (let i=0; i<n.length; i++){
    mn*=2;
    if (n[(n.length-i-1)]=='1') {
      dec+=mn;
    } else if (n[(n.length-i-1)]!='0') {
      return undefined;
    }    
}
return dec;
}
console.log(convDec(str));
