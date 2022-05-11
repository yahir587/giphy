let url =
  "https:api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1";
let dummyResponse = {
  data: [
    {
      id: "id1",
      url: "www.google.com/",
    },
    {
      id: "id2",
      url: "www.google.com/",
    },
  ],
  meta: {},
  pagination: {},
};
fetch(url)
  // step 1
  .then(function (response) {
    return response.json();
  })
  // step 2
  .then(function (json) {
    console.log(json)
    let urlForJson = json.data[0].images.original.url;
  $(".display").append("<img src=" + urlForJson + ">");
    // console.log(urlForJson);
  // $(".main").html(`<img src=${json.data[0].images.original.url} height=300>`);
    return urlForJson;
  
  });
