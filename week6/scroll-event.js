window.addEventListener('scroll', function(evt) {

  if (window.pageYOffset > 200) {
    var tallHeader =document.querySelector('.tall-header')
    tallHeader.classList.add('fix-it');
    console.log('nope!');
  };

  if (window.pageYOffset < 201) {
   var fixIt =document.querySelector('.fix-it')
   fixIt.classList.remove('fix-it');
   console.log('yes!');
 };
});
