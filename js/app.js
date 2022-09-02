const loadPhones = async(searchText, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data, dataLimit);
}

const displayPhones = ( phones, dataLimit) =>{
    const phonesContainer = document.getElementById('phone-container')
    phonesContainer.textContent = '';

    // display 10 phones only
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
      phones = phones.slice(0,10);
      showAll.classList.remove('d-none')
    }
    else{
      showAll.classList.add('d-none')
    }
    // display no phone found
    const noFound = document.getElementById('no-found-messege');
    if(phones.length === 0){
      noFound.classList.remove('d-none')
    }
    else{
      noFound.classList.add('d-none')
    }
    // display all phone
    phones.forEach(phone =>{
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top w-75" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary px-5" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
        </div>
      </div>               
        `;
        phonesContainer.appendChild(phoneDiv)
    });
    // stop spinner or loader
        toggleSpinner(false);
}

//proccess search
const proccessSearch = (dataLimit) =>{
  toggleSpinner(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhones(searchText, dataLimit);
}

// handle search button click
document.getElementById('btn-search').addEventListener('click', function(){
  // start loader
  proccessSearch(10)
})

// handle input field by click enter
document.getElementById('search-field').addEventListener('keypress', function(event){
  // console.log(event.key)
  if(event.key === 'Enter'){
    proccessSearch(10);
  }
})

// set loader
const toggleSpinner = isLoading =>{
  const loaderSection = document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none');
  }
  else{
    loaderSection.classList.add('d-none')
  }
}

// Not the best way to show all
document.getElementById('btn-show-all').addEventListener('click', function(){
  proccessSearch();
})

const loadPhoneDetails = async id =>{
  const url =  `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetail(data.data)
}

const displayPhoneDetail = phone =>{
  console.log(phone);
  const modalTitle = document.getElementById('phoneDetailModalLabel');
  modalTitle.innerText = phone.name ;
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = `
    <img src="${phone.image}">
    <p>Release Date: ${phone.releaseDate? phone.releaseDate : 'Release Date not found'} </p>
    <h4> Features: </h4>
    <p>Storage: ${phone.mainFeatures.storage} </p>
    <p>Display Size: ${phone.mainFeatures.displaySize} </p>
    <p>ChipSet: ${phone.mainFeatures.chipSet} </p>
  `
}

loadPhones('apple')