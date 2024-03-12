const vehicles = [
    {vehicle: "Pegassi Vacca", price: "$240,000", img: ''},
    {vehicle: "Toundra Panthere", price: "$2,170,000", img: '' },
    {vehicle: "Trufade Adder", price: "$1,000,000", img: '' },
    {vehicle: "Classique Broadway", price: "$925,000", img: '' },
    {vehicle: "Emperor Vectre", price: "$1,785,000", img: '' },
    {vehicle: "Annis 300R", price: "$2,075,000", img: '' },
    {vehicle: "Överflöd Entity MT", price: "$2,355,000", img: '' },
    {vehicle: "Pfister Comet S2 Cabrio", price: "$1,797,000", img: '' },
    {vehicle: "Överflöd Zeno", price: "$2,820,000", img: '' },
    {vehicle: "Pegassi Ignus", price: "$2,765,000", img: '' },
    {vehicle: "Dewbauchee Champion", price: "$2,995,000", img: '' },
    {vehicle: "Übermacht Cypher", price: "$1,550,000", img: '' },
    // {vehicle: "", price: "", img: '' },    
];

const vehiclesContainer = document.querySelector('.vehicles-container');
const applyFiltersBtn = document.getElementById('apply-filters');

document.addEventListener("DOMContentLoaded", function () {
    renderCars(vehicles);
});

function renderCars(cars){
    vehiclesContainer.innerHTML='';
    cars.forEach(vehicle => {
        const vehicleItem = document.createElement('div');
        vehicleItem.classList.add('vehicle-item');

        const vehicleImg = document.createElement('img');
        const imgSrcName = vehicle.vehicle.replace(/ /g, "_").toLowerCase();
        vehicleImg.src = `../assets/cars/${imgSrcName}.webp`;

        const vehicleName = document.createElement('p');
        vehicleName.textContent = vehicle.vehicle;

        const vehiclePrice = document.createElement('p');
        vehiclePrice.textContent = vehicle.price;

        vehicleItem.appendChild(vehicleImg);
        vehicleItem.appendChild(vehicleName);
        vehicleItem.appendChild(vehiclePrice);

        vehiclesContainer.appendChild(vehicleItem);
    });
}
applyFiltersBtn.addEventListener('click', function () {
    const sortOrder = document.getElementById('sort-order').value;

    let sortedCars = vehicles.slice();
    if (sortOrder === 'asc') {
        sortedCars.sort((a, b) => parseInt(a.price.replace(/\$|,/g, '')) - parseInt(b.price.replace(/\$|,/g, '')));
    } else if (sortOrder === 'desc') {
        sortedCars.sort((a, b) => parseInt(b.price.replace(/\$|,/g, '')) - parseInt(a.price.replace(/\$|,/g, '')));
    }
    renderCars(sortedCars);
});
renderCars(vehicles);