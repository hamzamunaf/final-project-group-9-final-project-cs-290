var submit_button = document.getElementById('myButton');

submit_button.addEventListener('click', function (event) {
  var title = document.getElementById("sub-box").value;
  var description = document.getElementById("des-box").value;

  if (title == "" || description == "") {window.alert('You Have Not Filled In All The Fields');}
  //add to drop down menu
  else{
    var option = document.getElementById("all-problems");
    var oth_option = document.createElement("option");
    oth_option.text = title;
    option.add(oth_option);
  }
  var aprob = document.getElementById("all-posts");

  var firstdiv = document.createElement('div');
  firstdiv.classList.add('post');
  // firstdiv.classList.add(title);
  // firstdiv.classList.add(description);
  firstdiv.title = title;
  firstdiv.description = description;

  var title1 = document.createElement('div');
  title1.classList.add('post-title-a');
  firstdiv.appendChild(title1);

  var title_a = document.createElement('span');
  title_a.classList.add('post-title');
  title_a.textContent = title;
  title1.appendChild(title_a);

  var description1 = document.createElement('div');
  description1.classList.add('post-description-a');
  firstdiv.appendChild(description1);

  var description_a = document.createElement('a');
  description_a.classList.add('post-description');
  description_a.textContent = description;
  description1.appendChild(description_a);

  aprob.appendChild(firstdiv);

  //clear everything
  document.getElementById("sub-box").value = "";
  document.getElementById("des-box").value = "";

});


var option_button = document.getElementById('b-button');

option_button.addEventListener('click', function (event) {

  var repo = document.getElementById('all-problems').value;
  const optiona = document.getElementsByClassName("post");
  const varpo = document.getElementById("all-posts");

  const arr_var = varpo.children;
  console.log(arr_var);
for (var i = 0; i < optiona.length; i++) {
  console.log(optiona[i]);
  if (repo === "") {}

  else if (repo === optiona[i].title) {
    arr_var[i].style.display = "none";
    document.getElementById("all-problems").value = ""
    console.log(document.getElementById("option-bar"));

  }
  else if (repo !== optiona[i].title) {}
}
});
