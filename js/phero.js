const handleCategory = async() =>{
    const response = await fetch(' https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const allData = data.data;
    console.log(allData);
   
    const tabContainer = document.getElementById('tab-container');
    allData.forEach((data) => {
            
            const div = document.createElement('div');
            
            div.innerHTML = `
            <button class="btn bg-gray-300 gap-8 flex justify-between" onclick = allClick('${data.category_id}')><a>${data.category}</a></button>
             `;
             tabContainer.appendChild(div);
            });   
    
};
//load data
let cardData = [];
const allClick = async (categoryId) => {
     console.log(categoryId)
     const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
     const data = await response.json();
     cardData =  data.data;
     console.log(cardData.length)
     const cardContainer = document.getElementById('card-container');

     cardContainer.innerHTML = "";
     // show nodata image
     const noDataContainer = document.getElementById('no-data-container');
     if(cardData.length === 0){
      noDataContainer.classList.remove('hidden')
     }else{
          noDataContainer.classList.add('hidden') 
     }
     cardData.forEach((data)=>{
          let timeText = "";
      if(data.others.posted_date){
       const hour =  parseInt(data.others.posted_date/3600);
       const minute = parseInt((data.others.posted_date % 3600) / 60);
       timeText = hour + "hrs " + minute + "min " + "ago";
       console.log(hour, minute)};
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card card-compact bg-base-100 shadow-xl">
                <figure> <div class="relative h-56 w-80 "> <img class="h-56 w-80 " src="${data?.thumbnail}"></div>
                <div class="text-xs text-white bg-black p-1 rounded-md absolute -mb-40 -mr-40">${timeText}</div>
                </figure>
                 
                <div class="card-body">
                    <div class="flex  gap-4">
                    <img class="w-10 h-10 rounded-full" src="${data.authors[0].profile_picture}">
                 <div> <h2 class="card-title">${data.title}</h2> 
                 <p class="inline">${data.authors[0].profile_name}<img class="w-5 inline" src="${data.authors[0].verified? "./images/verified.jpg" : ""}" alt="">
                 </p>
               
                 <p>${data.others.views}</p>
                 </div>
                    </div>
                  <div class="">
                  
                  </div>
                </div>
              </div>
    
    `;
   
    cardContainer.appendChild(div);
     })
};

// blog answer
function blogBtn(){
     window.location.href = 'blog.html';
};
// sorting data
function sortData(){
const sortData = document.getElementById('sort-data');
cardData.sort(function(a, b){

     let firstViews = a.others.views;
     firstViews = firstViews.replace("K","");
     firstViews = firstViews * 1000;
    
     let secondViews = b.others.views;
     secondViews = secondViews.replace("K","");
     secondViews = secondViews*1000;
     
     if ( firstViews < secondViews ){
          return 1;
        }
        if ( firstViews > secondViews ){
          return -1;
        }
        return 0;
});
const sortingCard = document.getElementById("card-container");
sortingCard.innerHTML = "";
const noDataContainer = document.getElementById('no-data-container');
     if(cardData.length === 0){
      noDataContainer.classList.remove('hidden')
     }else{
          noDataContainer.classList.add('hidden') 
     }
     cardData.forEach((data)=>{
          let timeText = "";
      if(data.others.posted_date){
       const hour =  parseInt(data.others.posted_date/3600);
       const minute = parseInt((data.others.posted_date % 3600) / 60);
       timeText = hour + "hrs " + minute + "min " + "ago";
       console.log(hour, minute)};
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card card-compact bg-base-100 shadow-xl">
                <figure> <div class="relative h-56 w-80 "> <img class="h-56 w-80 " src="${data?.thumbnail}"></div>
                <div class="text-xs text-white bg-black p-1 rounded-md absolute -mb-40 -mr-40">${timeText}</div>
                </figure>
                 
                <div class="card-body">
                    <div class="flex  gap-4">
                    <img class="w-10 h-10 rounded-full" src="${data.authors[0].profile_picture}">
                 <div> <h2 class="card-title">${data.title}</h2> 
                 <p class="inline">${data.authors[0].profile_name}<img class="w-5 inline" src="${data.authors[0].verified? "./images/verified.jpg" : ""}" alt="">
                 </p>
               
                 <p>${data.others.views}</p>
                 </div>
                    </div>
                  <div class="">
                  
                  </div>
                </div>
              </div>
    
    `;
   
    sortingCard.appendChild(div);
     })

console.log(cardData)
}
handleCategory();
allClick('1000');


