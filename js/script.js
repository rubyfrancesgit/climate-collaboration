$( document ).ready(function() {

  console.log('linked');

  let url ="https://api.unsplash.com/search/photos?query=climate&client_id=" + key;

  $.ajax({
    method: 'GET',
    url: url,
    success: function(data){
      var i = 0;
      console.log(data);

      $('#solutionImgDivOne').append(
        `
          <img class="solution-section__img" src="${data.results[i].urls.regular}" alt="description of image">
        `
      );
      $('#solutionImgDivTwo').append(
        `
          <img class="solution-section__img" src="${data.results[i].urls.regular}" alt="description of image">
        `
      );
    }
  });

  // const acaccordionBtn = document.querySelectorAll(".accordion__header-text")
  // const arrowIcon = document.querySelectorAll(".fa-angle-up")

  // function flipIcon(){
  //   arrowIcon.classList.add("fa-flip-vertical");
  //   console.log("test");
  // }

  // acaccordionBtn.addEventListener("click", flipIcon);

});

