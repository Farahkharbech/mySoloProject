function generator() {
    var counter = 0;
    return function () {
      return counter++;
    };
  }

  var id = generator();

  function makeProd(title,category,images,price){
    return{
      title:title,
      category:category,
      images:images,
      price:price,
      id:id()
    }
  }
  function switchIm (item){
    var counter=0
    function getnext(){
      counter++
      counter=counter%item.length
      return item[counter]
    }
    return getnext;
  }
  

var prd1 = makeProd("Isoprpylic Alcohol","Chemicals",["https://images.hoefer-shop.de/media/image/40/bc/0b/1x10L_IPA_99_A.jpg","https://www.sofogra.fr/wp-content/uploads/2018/01/Photo_IPA_01-600x450.jpg"],8)

$('#shop1').append(`<img src=${prd1.images} id="img0">
    <h1>Title : ${prd1.title}</h1>
    <h1> Category : ${prd1.category}</h1>
  <h1> Price(Tunisian Dinars): ${prd1.price}</h1>
  `);

var ch=switchIm(prd1.images);
$('#img0').on('click',function(){
  var getnext=ch();
  this.src=getnext
})

function MakeShop(name){
  return { name:name, 
  list:[],
  add:add,
  deletProd:deletProd ,
  sortByCat:sortByCat,
  }
  }
var add=function(title,category,images,price){
    this.list.push(makeProd(title,category,images,price))
  };

var deletProd=function(idgiven){
    for(var i=0; i<this.list.length; i++){
        if(idgiven===this.list[i].id){
            this.list.splice(i,1)
            return "Deleted"
        }
    }
    return "Cannot find the id you want to delete. "
}

var sortByCat = function(category){
  var acc=[]
  each(this.list,function(element){
      if(element.category === category){
           acc.push(element)
      }
  })
  return acc;
}

function display(item){
$('#shop1').append(`<img src=${shop1.list[0].images} id="img1">
    <h1>Title : ${item.title}</h1>
    <h1> Category : ${item.category}</h1>
  <h1> Price(Tunisian Dinars): ${item.price}</h1>
  `)
}

var shop1=MakeShop("SHOP1");
shop1.add("Primary ink","Primer Products",["https://www.prepressure.com/images/offset-printing-ink-CMYK.jpg","https://dev.rodpub.com/images/262/240_main.jpg","https://5.imimg.com/data5/ANDROID/Default/2020/9/FO/YL/QK/3264623/product-jpeg.jpg"],21);
shop1.add("Plate for Impression","Primer Products",["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIH-TRp-btFxAoeNybmg-LWeX4dubrJIu1gQ&usqp=CAU"],124)



function each(array, func) { 
  for (var i = 0; i < array.length; i++) { 
        func(array[i], i); 
  } 
}

each(shop1.list,function(element,i){
    display(element)
  })

  
  var change=switchIm(shop1.list[0].images);

  $('#img1').on('click',function(){
    var getnext=change()
    this.src=getnext
  })



  