 $(document).ready(function() {

  // globally available productData from the data.js file
  // // console.log(productData);
  // for (var i in productData) {
  //   var path = productData[productId];
  //   console.log(path);
    // console.log(productData[457032]);
    // console.log(productData[productId]);
    // // console.log(productId)
    // var id = $('.productID')
    // console.log(id);


    for(var i in productData) {
      var product = productData[i];
      // console.log(i,product);
      // console.log(product[]);
      // var items = productData[i[i]];
      // console.log(items);
      var $mainTile = $('.main-tile');
      var $img = $('<img>');
      $img.attr('src', product.images.mainImage);
      $mainTile.append($img);
    }
    for(var i in productData) {
      var mainImages = product.images.mainImage;
      console.log(mainImages);
    }

    // $(mainImages).click(function(){
    //   $img.fadeIn();
    // });
// var a = productData('.productId');
// productData.forEach(function(id){
// var product = productData[i];
// console.log(i);
// var $mainTile = $('.main-tile');
// var $img = $('<img>');
// $img.attr('src',i.mainImage);
// });


// var productColors = productData.filter(function(id){
//   return id.colors === 'black';
// });
// console.log(description);

});
