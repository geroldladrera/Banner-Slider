let slideIndex = 0;

setTimeout(showSlides, 3000);

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";   
    }
    
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
        
    }

    slides[slideIndex-1].style.display = "block";  

    setTimeout(showSlides, 1000); // Change image every 1 second
}

fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((completedata)=>{
    console.log(completedata);
    let data_images = "";
    completedata.map((values)=>{
        data_images += `
            <div class="mySlides fade">
                <div class="numbertext">${values.id} / ${Object.keys(completedata).length}</div>
                <img src="${values.image}" alt="img-slider" style="width:100%">
                <div class="text">${values.title}</div>
            </div>
        `
    });
    document.getElementById("mySlider").innerHTML = data_images;
    

}).catch((err)=>{
    console.log(err);    
})