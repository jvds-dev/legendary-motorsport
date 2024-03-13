document.addEventListener("DOMContentLoaded", function() {
    const featuredCars = [
        { vehicle: "Pegassi Vacca", price: "$240,000" },
        { vehicle: "Toundra Panthere", price: "$2,170,000" },
        { vehicle: "Trufade Adder", price: "$1,000,000" },
        { vehicle: "Classique Broadway", price: "$925,000" },
        { vehicle: "Emperor Vectre", price: "$1,785,000" }
    ];

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
        button.textContent = 'DETALHES';
    });
});

let slides = document.querySelectorAll('.slide-img');
let index = 0;
let playing = true;

function updateActiveSlide(clickedIndex) {
    slides.forEach((slide, i) => {
        if (i === clickedIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

slides.forEach((slide, i) => {
    slide.addEventListener('click', () => {
        if (!slide.classList.contains('active')) {
            updateActiveSlide(i);
            index = i;
            playing = false;
        }
    });
});

function autoPlay() {
    if (playing) {
        if (index < slides.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateActiveSlide(index);
    }
}

const container = document.getElementById('slider-container');

container.addEventListener('mouseenter', () => {
    playing = false;
});

container.addEventListener('mouseleave', () => {
    playing = true;
});

setInterval(autoPlay, 8000);
