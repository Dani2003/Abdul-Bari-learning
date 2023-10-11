let num = 0;
function count() {
    num ++;
document.querySelector('h1').innerHTML= num;
  if ( num % 10 === 0 ) {
    alert(`count is now ${num}`);
    }
}
    document.querySelector('DOMContentLoaded', function() {
        document.querySelector('button').onclick=count;
});