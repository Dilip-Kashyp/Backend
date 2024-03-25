const cartButton = document.getElementById('cartButton');
const cartSection = document.getElementById('cartSection');
const closeButtion = document.getElementById('closeButtion');

cartButton.addEventListener('click', function () {
    cartSection.classList.toggle('hidden');
});

closeButtion.addEventListener('click', function () {
    cartSection.classList.toggle('hidden');
})