/**
 * Created by sqh on 2017/2/14.
 */
//块级作用域
for(var i=0;i<3;i++){
 setTimeout(function(){
 console.log(i);
 })
 }

 for(let i=0;i<3;i++){
 setTimeout(function(){
 console.log(i);
 })
 }

var result =(function(){

 let f = this ? function a(){ } : function b(){};

 return [
 typeof f,
 typeof a,
 typeof b
 ]
 })();
 console.log( result )

 var a=function b(){ console.log(b) };
 a();
 console.log( b );


