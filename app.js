

var btns = document.querySelectorAll('#movie-list .delete');
var list = document.querySelector('#movie-list ul');

	list.addEventListener('click', function (e) {
		if(e.target.className=='delete'){
		var li=e.target.parentElement;
    list.removeChild(li);
	}
});


var form = document.querySelector('#add-movie');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	var val = form.querySelector('input[type="text"]').value;

	var li = document.createElement('li');
	var mn = document.createElement('span');
	var del = document.createElement('span');

	mn.textContent = val;
	del.textContent = 'Delete';

  mn.classList.add('name');
  del.classList.add('delete');
	li.appendChild(mn);
	li.appendChild(del);
	list.appendChild(li);
});


var searchbar=document.forms['search-movies'].querySelector('input');
searchbar.addEventListener('keyup',function(e){
  var term=e.target.value.toLowerCase();
  var movies=list.getElementsByTagName('li');
  Array.from(movies).forEach(function(movie){
    var title=movie.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term)!=-1){
      movie.style.display='block';
    }else{
      movie.style.display='none';
    }
  })
});


var hide=document.querySelector("#hide");
hide.addEventListener('change',function(e){
  if(hide.checked){
    list.style.display="none";
  }
  else {
    list.style.display="initial";
  }
});
