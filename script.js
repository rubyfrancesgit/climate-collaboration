console.log('linked');

let key = "WDEd9eLPBsi3yQ-iOL49h7qiEPV2gLkcCYODRJ3eprY"

let url1 ="https://api.unsplash.com/search/photos?query=climate&client_id=" + key;

let url2 ="https://api.unsplash.com/search/photos?query=climate&client_id=" + key;

$.ajax({
    method: 'GET',
    url: url1,
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
  },
  {
    method: 'GET',
    url: url2,
    success: function(data){
      const climateBanner = document.getElementById("climateBanner");
      var i = 0;
      console.log(data);

      $('#solutionImgDivTwo').append(
        `
          <img class="solution-section__img" src="${data.results[i].urls.regular}" alt="description of image">
        `
      );
  
    //   climateBanner.style.backgroungImage = `url(${data.results[i].urls.regular})`;
    }
  }
  
  
  );