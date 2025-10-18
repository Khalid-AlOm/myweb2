const cars = [
    {
      brand: 'BMW',
      model: 'X6',
      price: '$70,000',
      img: 'https://source.unsplash.com/featured/?bmw,car'
    },
    {
      brand: 'Tesla',
      model: 'Model S',
      price: '$85,000',
      img: 'https://source.unsplash.com/featured/?tesla,car'
    },
    {
      brand: 'Mercedes',
      model: 'C-Class',
      price: '$60,000',
      img: 'https://source.unsplash.com/featured/?mercedes,car'
    },
    {
      brand: 'BMW',
      model: 'M5',
      price: '$95,000',
      img: 'https://source.unsplash.com/featured/?bmw,m5'
    }
  ];
  
  const carList = document.getElementById('car-list');
  const brandFilter = document.getElementById('brandFilter');
  
  function displayCars(carsToShow) {
    carList.innerHTML = '';
    carsToShow.forEach(car => {
      const card = document.createElement('div');
      card.className = 'car-card';
      card.innerHTML = `
        <img src="${car.img}" alt="${car.model}">
        <div class="car-info">
          <h3>${car.brand} - ${car.model}</h3>
          <p>السعر: ${car.price}</p>
        </div>
      `;
      carList.appendChild(card);
    });
  }
  
  brandFilter.addEventListener('change', () => {
    const brand = brandFilter.value;
    const filtered = brand === 'all' ? cars : cars.filter(c => c.brand === brand);
    displayCars(filtered);
  });
  
  displayCars(cars);
  