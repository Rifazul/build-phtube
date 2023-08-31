
const loadCategoryName = async()=>{
 const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
 const data = await res.json()
 const categories = data?.data
 displayShowName(categories)
}


const displayShowName = (categories) =>{
  const tabContainer = document.getElementById('tab-container')
  
  categories.forEach(category =>{
  const tabDiv = document.createElement('div')
   tabDiv.classList = `ml-4`
  tabDiv.innerHTML = `
   <a onclick="handlerIdLoad('${category?.category_id}')" class="tab btn-ghost normal-case bg-slate-200 rounded"> ${category?.category} </a> 
  `
  tabContainer.appendChild(tabDiv)

  })

}

// handler categoryId 
const handlerIdLoad= async(categoryId="1000") =>{
   const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
   const data = await res.json()
   const categories = data.data;
   handlerCategoryCard(categories)
}

//default id call 
handlerIdLoad()


const handlerCategoryCard = (categories) =>{
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
 
  // Error Message Not found
  const errorMessage = document.getElementById('error-message')

  if(categories.length === 0){
     errorMessage.classList.remove('hidden')
  }else{
       errorMessage.classList.add('hidden')
  }



   categories.forEach(category =>{
   const cardDiv = document.createElement('div')
   cardDiv.classList = `card card-compact bg-base-300 shadow-xl p-2`
   cardDiv.innerHTML = `
         <figure><img class="h-40 w-full" src="${category?.thumbnail}" alt="Shoes" /></figure>
         <div class="card-body">
         <h2 class="card-title"> ${category?.title}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
       <button class="btn btn-primary">Buy Now</button>
     </div>
   </div>   
   
   `
    cardContainer.appendChild(cardDiv)
   })
}



loadCategoryName()