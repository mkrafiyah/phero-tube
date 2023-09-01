const handleCategory = async() =>{
    const response = await fetch(' https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const allData = data.data;
    console.log(allData);
   
    const tabContainer = document.getElementById('tab-container');
    allData.forEach((data) => {
            
            const div = document.createElement('div');
            div.innerHTML = `
            <a onclick = allClick('${data.category_id}') class="tab">${data.category}</a> 
            `;
            tabContainer.appendChild(div);
        
          });   
    
};
const allClick = async (categoryId) => {
     const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
     const data = await response.json();
     const cardData =  data.data;
     console.log(cardData)
     const cardContainer = document.getElementById('card-container');

     cardData.forEach((data)=>{
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card card-compact bg-base-100 shadow-xl">
                <figure> <img class="h-56 w-80" src="${data?.thumbnail}"></figure>
                <div class="card-body">
                    <div class="flex  gap-4">
                    
                 
                  <img class="w-10 h-10 rounded-full" src="${data.authors[0].profile_picture}">
                 <div> <h2 class="card-title">${data.title}</h2> 
                 <p>${data.authors[0].profile_name}</p>
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
handleCategory();

