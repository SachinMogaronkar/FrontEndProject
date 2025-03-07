let currentSlide = 0;
const slides = document.querySelectorAll('.carousel .card');
const description = document.getElementById('description');

const descriptions = [
  "Kedarnath: Kedarnath is one of the holiest places in India, located in the Indian state of Uttarakhand. It is famous for the Kedarnath Temple, dedicated to Lord Shiva, which attracts thousands of pilgrims every year. The temple is situated amidst the snow-capped peaks of the Himalayas.",
  "Kashi: Kashi, also known as Varanasi, is one of the oldest living cities in the world, located on the banks of the river Ganges. It is known for its rich cultural heritage, temples, and ghats. The city is a major pilgrimage destination for Hindus.",
  "Ayodhya: Ayodhya, a city in Uttar Pradesh, is considered the birthplace of Lord Ram. It is a significant site for Hindu pilgrims and holds great cultural and religious importance. The city has numerous temples and is known for its historical significance."
];

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
      const placeName = descriptions[index].split(":")[0]; // Extract place name
      const descriptionText = descriptions[index].split(":")[1]; // Extract description
      description.innerHTML = `<p><span class="place-name">${placeName}</span>: ${descriptionText}</p>`; // Dynamically add bold and bigger place name
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

document.addEventListener('DOMContentLoaded', () => {
  updateSlide();
});
