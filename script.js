<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Image Slider with Previous and Next Buttons</title>
  <link rel="stylesheet" href="styles.css">
  <style type="text/css">
     /* styles.css */

body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

.slider-wrapper {
  position: relative;
  width: 80%;
  overflow: hidden;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.slider {
  display: flex;
  width: 400%;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  width: 25%;
}

.slide img {
  width: 100%;
  height: auto;
  display: block;
}

button.prev, button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}

button.prev:hover, button.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

  </style>
</head>
<body>
   <script type="text/javascript">
      // script.js

let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const translateX = -currentIndex * 100 / totalSlides;
  slides.style.transform = `translateX(${translateX}%)`;
}

   </script>
  <div class="slider-wrapper">
    <div class="slider">
      <div class="slides">
        <div class="slide"><img src="stu.jpg" alt="Image 1"></div>
        <div class="slide"><img src="stu.jpg" alt="Image 2"></div>
        <div class="slide"><img src="stu.jpg" alt="Image 3"></div>
        <div class="slide"><img src="stu.jpg" alt="Image 4"></div>
        <div class="slide"><img src="stu.jpg" alt="Image 1"></div>
        <div class="slide"><img src="stu.jpg" alt="Image 2"></div>
        <div class="slide"><img src="stu.jpg" alt="Image 3"></div>
        <div class="slide"><img src="stu.jpg" alt="Image 4"></div>
      </div>
    </div>
    <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
    <button class="next" onclick="moveSlide(1)">&#10095;</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
