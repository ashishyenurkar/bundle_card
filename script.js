function toggleBundle(bundleId) {
    const allBundles = document.querySelectorAll('.bundle-box');
    const allOptions = document.querySelectorAll('.bundle-options');
    const radios = document.querySelectorAll('input[name="bundle"]');
  
    allBundles.forEach((box, index) => {
      if (index + 1 === bundleId) {
        box.classList.add('active');
        radios[index].checked = true;
        allOptions[index].style.display = 'block'; // Show dropdowns
      } else {
        box.classList.remove('active');
        radios[index].checked = false;
        allOptions[index].style.display = 'none'; // Hide other dropdowns
      }
    });
  
    // Update total price dynamically
    const totalPrice = document.getElementById('totalPrice');
    let price = '';
    if (bundleId === 1) price = 'DKK 360.00';
    else if (bundleId === 2) price = 'DKK 345.00';
    else price = 'DKK 528.00';
  
    totalPrice.textContent = price;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    toggleBundle(1); // Default to first bundle
  });
  