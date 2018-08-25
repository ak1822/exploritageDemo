function myCount()
{
const str = document.querySelector(".searchForm-input1").value;
const sub = document.querySelector(".searchForm-input").value;
var result = str.split(" ");
var length = result.length; 
var count = 0;
for (i=0;i<length;i++)
{
document.getElementById("demo").innerHTML = "Entered string :"+result[i];
if( result[i] == sub )
 count++;
}
document.getElementById("demo").innerHTML = "Entered string :<br>"+str;
document.getElementById("demo1").innerHTML = "Entered keyword :"+sub;
document.getElementById("demo2").innerHTML = "Keyword occurences :"+count;
}
 