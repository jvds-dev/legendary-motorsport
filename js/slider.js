let slides = document.querySelectorAll('.slide-img');

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        if(!slide.classList.contains('active')){
            slides.forEach(s => s.classList.remove('active'));
            slide.classList.add('active');
        }
    })
})

const featuredCars = [
    { vehicle: "Pegassi Vacca", price: "$240,000" },
    { vehicle: "Toundra Panthere", price: "$2,170,000" },
    { vehicle: "Trufade Adder", price: "$1,000,000" },
    { vehicle: "Classique Broadway", price: "$925,000" },
    { vehicle: "Emperor Vectre", price: "$1,785,000" }
];

document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.slider');

    featuredCars.forEach((car, index) => {
        const slideImg = sliderContainer.querySelectorAll('.slide-img')[index];
        const carName = slideImg.querySelector('.car-name');
        const carPrice = slideImg.querySelector('.car-price');
        const button = slideImg.querySelector('button');

        carName.textContent = car.vehicle;
        carPrice.textContent = car.price;

        const file_name = car.vehicle.toLowerCase().replace(/\s+/g, '_');
        const url = `https://raw.githubusercontent.com/jvds-dev/legendary-motorsport/main/assets/cars/${file_name}.webp`

        // slideImg.style.backgroundImage = `url(../assets/cars/${file_name}.webp)`;
        slideImg.style.backgroundImage = `url(${url})`
        slideImg.style.backgroundSize = 'cover';
        slideImg.style.backgroundPosition = 'center';
        button.textContent = 'SEE DETAILS';
    });
});