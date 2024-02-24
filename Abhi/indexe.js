let acces_Key = "teqY0bUiSnYcBrj0I-I5_e6E1MbDEDsot_3JCu4U5-A";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let showData = document.querySelector(".showData");
let moreBtn = document.getElementById("moreBtn");
let showDatas = document.getElementById("showDatas");
let footer = document.getElementById("footer");

let page = 1;

const getData = async (searchValue,pageNo) =>{
    let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&per_Page=28&page=${pageNo} age&client_id=${acces_Key}`);
    let jsonData = await fetching.json();
   
      showDatas.style.display="none";
    if(page===1){
         showData.innerHTML=""
    }
    if(searchInput.value==""){
        showData.innerHTML=`<h4 style="color:red; text-align:center; 
         ">Please Search Safe Image</h4>`
        
    }
    else{
        document.querySelector(".loadMore").style.display = "block";
        footer.style.display = "block";
    }
    jsonData.results.forEach(function(data){
        console.log(data);
        let div = document.createElement("div");
        div.classList.add("card");
        showData.appendChild(div);
        div.innerHTML = `<img src="${data.urls.small}" alt="">
         <a href=${data.links.html} target="_blank">${data.alt_description}</a>
         `;
    })
}

searchBtn.addEventListener("click",function(){
    
    let searchValue = searchInput.value ;
    page =1;
    getData(searchValue,page);
})

moreBtn.addEventListener("click",function(){
let searchValue = searchInput.value;
page++;
    getData(searchValue,page);
})
