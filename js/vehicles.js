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
    {vehicle: "Pfister Growler", price: "$1,220,250", img: '' },    
    {vehicle: "Pfister Comet S2", price: "$1,878,000", img: '' },    
    {vehicle: "Dinka Jester RR", price: "$1,970,000", img: '' },    
    {vehicle: "Annis ZR-350", price: "$1,615,000", img: '' },    
    {vehicle: "Annis Euros", price: "$1,800,000", img: '' },    
    {vehicle: "Grotti Itali RSX", price: "$3,465,000", img: '' },    
    {vehicle: "Lampadati Tigon", price: "$2,310,000", img: '' },    
    {vehicle: "Invetero Coquette D10", price: "$1,510,000", img: '' },    
    {vehicle: "Överflöd Imorgon", price: "$2,165,000", img: '' },    
    {vehicle: "Grotti Furia", price: "$2,740,000", img: '' },    
    {vehicle: "Pegassi Zorrusso", price: "$1,925,000", img: '' },    
    {vehicle: "Benefactor Krieger", price: "$2,875,000", img: '' },    
    {vehicle: "Ocelot Locust", price: "$1,625,000", img: '' },
    {vehicle: "Progen Emerus", price: "$2,750,000", img: '' },     
    {vehicle: "Vysser Neo", price: "$1,875,000", img: '' }, 
    {vehicle: "Truffade Thrax", price: "$2,325,000", img: '' }, 
    
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

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info');

        const vehicleName = document.createElement('p');
        vehicleName.classList.add('name');
        vehicleName.textContent = vehicle.vehicle;

        const vehiclePrice = document.createElement('p');
        vehiclePrice.classList.add('price');
        vehiclePrice.textContent = vehicle.price;

        const purchaseBtn = document.createElement('button');
        purchaseBtn.classList.add('purchase-btn');
        purchaseBtn.textContent = "BUY NOW";

        infoContainer.appendChild(vehicleName);
        infoContainer.appendChild(vehiclePrice);
        infoContainer.appendChild(purchaseBtn);


        vehicleItem.appendChild(vehicleImg);
        vehicleItem.appendChild(infoContainer);
        // vehicleItem.appendChild(vehicleName);
        // vehicleItem.appendChild(vehiclePrice);

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