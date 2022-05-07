var nb1=document.getElementById('nbr1')
var rsult=document.getElementById('result')
var n=nbr1.value
var tm=new Date()
var y=tm.getFullYear
var value=y.value
var calc1=value-nb1
function clicar(){
    rsult.innerHTML=`${calc1()}`

}
