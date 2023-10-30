console.log("Let's get this party started!");

$('#search-form').on('submit',function(e){
    e.preventDefault();
    const searchedWord = $('input[name=search-word]').val();
    console.log(searchedWord);
    
    getGIF(searchedWord).then((data)=>{
        
        createLI(data)
    })
    this.reset()
})

async function getGIF(keyword){
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {params:{api_key:'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym',q:keyword}});
    const {data} = response.data;
    console.log(data[0])
    console.log(data[0].embed_url)
    return data[0].images.original.url;
}

function createLI(img_url){
    let newImg = $(`<img/>`);
    newImg.attr('src', img_url);
    let newLI = $("<li></li>").append(newImg)
    $('ul').prepend(newLI)
    console.log(newImg)
}

$('button').on('click',function(){
    $('ul').empty();
})