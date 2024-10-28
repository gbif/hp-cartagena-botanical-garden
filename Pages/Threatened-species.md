---
lang-ref: Threatened-species
lang: en
layout: home
klass: home
title: Threatened Species
description: Endangered species of the Colombian Caribbean in the Franklinia project
background: assets/images/threatened-species/Franklinia_01.jpg
hasTextShadow: true
height: 85vh
parallax: true
navbar:
  color: white
  hasWhiteText: false
  floating: true
composition:
 - type: heroImage
 - type: pageMarkdown  # render markdown in this file
 - type: split
   data: threatened-species.list.aspidosperma-polyneuron
 - type: split
   data: threatened-species.list.clavija-sanctae-martae
 - type: split
   data: threatened-species.list.handroanthus-coralibe
 - type: split
   data: threatened-species.list.libidibia-punctata
 - type: split
   data: threatened-species.list.pachira-quinata
 - type: split
   data: threatened-species.list.pelliciera-benthamii
 - type: split
   data: threatened-species.list.pterocarpus-acapulsensis
permalink: /threatened-species
---

# Franklinia Project

In its efforts to conserve, preserve, restore and enrich the ecosystems of the Colombian Caribbean region, the Cartagena Botanical Garden developed a project to strengthen the populations of seven threatened species of native trees in the Colombian Caribbean region by propagating and planting new individuals. The project consisted of mapping and identifying the current and potential distribution, as well as threats and suitable locations for developing planting activities. Secondly, two new local nurseries were installed and one was improved for the propagation of threatened species. Thirdly, data on phenology and regeneration of the species were collected. Finally, courses on propagation of threatened species, nursery management and planting were held for local gardeners.

![image](assets/images/threatened-species/Franklinia_03.jpg)

<section id="gallery">
    <div class="gallery-container">
        <figure class="gallery-item">
            <img src="assets/images/threatened-species/Franklinia_03.jpg" alt="Imagen 1">
            <figcaption>Descripción de la imagen 1</figcaption>
        </figure>
        <figure class="gallery-item">
            <img src="assets/images/threatened-species/Franklinia_02.jpg" alt="Imagen 2">
            <figcaption>Descripción de la imagen 2</figcaption>
        </figure>
        <figure class="gallery-item">
            <img src="assets/images/threatened-species/Franklinia_01.jpg" alt="Imagen 3">
            <figcaption>Descripción de la imagen 3</figcaption>
        <figure class="gallery-item">
            <img src="assets/images/threatened-species/Franklinia_04.jpg" alt="Imagen 3">
            <figcaption>Descripción de la imagen 4</figcaption>
        <figure class="gallery-item">
            <img src="assets/images/threatened-species/Franklinia_05.jpg" alt="Imagen 3">
            <figcaption>Descripción de la imagen 5</figcaption>
        <figure class="gallery-item">
            <img src="assets/images/threatened-species/Franklinia_06.jpg" alt="Imagen 3">
            <figcaption>Descripción de la imagen 6</figcaption>
    </div>
    <nav class="gallery-navigation">
        <button class="nav-button prev-button">Anterior</button>
        <button class="nav-button next-button">Siguiente</button>
    </nav>
</section>
#gallery {
   width: 80%;
   margin: auto;
   overflow: hidden;
}

.gallery-container {
   display: flex;
   transition: transform 0.5s ease-in-out;
}

.gallery-item {
   min-width: 100%;
   box-sizing: border-box;
}

.gallery-item img {
   width: 100%;
   display: block;
}

/* Navegación del Slider */
.gallery-navigation {
   display: flex;
   justify-content: space-between;
   position: relative;
   top: -50px;
}

.nav-button {
   background-color: #008CBA;
   color: white;
   border: none;
   padding: 10px 20px;
   cursor: pointer;
   border-radius: 5px;
}

.nav-button:hover {
background-color: #005f5f;
}

<script>
let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}
</script>


The selected species and the information obtained about their distribution and phenology are listed below:
