document.addEventListener("DOMContentLoaded", function() {

  var url = 'https://bb-election-api.herokuapp.com/'
  var candidatesList = document.querySelector('#candidates');
  $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json'
    }).done(function(data){
      for (var i = 0; i < data.candidates.length; i++) {
        var newLi = document.createElement('li');
        newLi.innerHTML = "Name: " + data.candidates[i].name
        + " | Votes: " + data.candidates[i].votes;
        candidatesList.append(newLi)
        console.log(data.candidates[i].name);
      }

      // console.log(data);
    })
});
