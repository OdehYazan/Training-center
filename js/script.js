var image = '<img src="https://cdn.pixabay.com/photo/2012/04/23/15/17/number-38465_960_720.png" alt="15" width ="10px">';
var image2 = '<img src="https://www.volusion.com/blog/content/images/2019/01/The-7-Most-Popular-Products-You-re-NOT-Allowed-To-Sell-Online.png" alt="not 15" width ="50px">'

var age = prompt ('Hallo are you under 15 ? Y or N');
 while (age !='Y' && age !='N') {
   var age = prompt ('Hallo are you under 15 ? Y or N');
 }


if (age == 'Y')
{
  
  //alert ('Continue');
  document.write (image);
  var uname = prompt ('Enter your name please')
   alert('welcome to GT-center: ' + uname);
  document.write ('     @We hope you will enjoy learning with us@' );
  document.write ('<img src="https://media4.giphy.com/media/fU4elxKlRsulB4Jy7w/200.gif" alt="not 15" "width:="10px">')
  var nCourse =  prompt ('How many courses you want ?' );
while (nCourse <= 0 ){
  var nCourse =  prompt ('How many courses you want ?' );
}
 for (var i=1;i<=nCourse;i++){
   document.write ('<img src="https://milemir.com/wp-content/uploads/2020/11/courseintroimage.jpg" alt="course" "width:="10px">');
 }
} else if (age == 'N')
{
  alert ('You are not allowed !!');
  document.write (image2);
  var uname = prompt ('Enter your name please');
   alert(uname + ' You muste leave !!' );
   document.write ('   @ we are not responsible for your actions @' );
   document.write ('<img src="https://media.tenor.com/images/67f1ef894af69f5d2a99501b0ef3f686/tenor.gif" alt="not 15" "width:="10px">');
}





















