$(document).ready(function () {
  var carTableBody = $('#carTableBody');

  
  nextBtn.addEventListener('click', function () {
    console.log("Button Clicked");
});
  $('#nextBtn').on('click', function () {
      // Extract form data
      var type = $('#type').val();
      var name = $('#name').val();
      var model = $('#model').val();
      var year = $('#int').val();
      var capacity = $('#capacity').val();

      if (!type || !name || !model || !year || !capacity) {
          alert('Please fill in all fields.');
          return;
      }
    
    
      var newRow = $('<tr>');
      newRow.html(`<td>${type}</td><td>${name}</td><td>${model}</td><td>${year}</td><td>${capacity}</td><td></td>`);

      carTableBody.append(newRow);

   
      $('#createform')[0].reset();

      var cars = JSON.parse(localStorage.getItem('cars')) || [];
      cars.push({
          type: type,
          name: name,
          model: model,
          year: year,
          capacity: capacity
      });
      localStorage.setItem('cars', JSON.stringify(cars));
  });

  // Load existing data from local storage on page load
  var storedCars = JSON.parse(localStorage.getItem('cars')) || [];
  for (var i = 0; i < storedCars.length; i++) {
      var newRow = $('<tr>');
      newRow.html(`<td>${storedCars[i].type}</td><td>${storedCars[i].name}</td><td>${storedCars[i].model}</td><td>${storedCars[i].year}</td><td>${storedCars[i].capacity}</td><td></td>`);
      carTableBody.append(newRow);
  }

  // Initialize DataTable
  $('#carTable').DataTable();
});