document.addEventListener('DOMContentLoaded', function () {


    /*------------------------------------
        image zoom slide
    --------------------------------------*/

    const images = [
        "./assets/img/other-images/article-1.webp",
        "./assets/img/other-images/article-2.webp",
        "./assets/img/other-images/article-3.webp",
        "./assets/img/other-images/cto.webp",
        "./assets/img/other-images/live-1.webp",
        "./assets/img/other-images/live-2.webp",
        "./assets/img/other-images/article-1.webp",
        "./assets/img/other-images/article-2.webp",
        "./assets/img/other-images/article-3.webp",
        "./assets/img/other-images/cto.webp",
        "./assets/img/other-images/live-1.webp",
        "./assets/img/other-images/live-2.webp",
        "./assets/img/other-images/article-1.webp",
        "./assets/img/other-images/article-2.webp",
        "./assets/img/other-images/article-3.webp",
        "./assets/img/other-images/cto.webp",
        "./assets/img/other-images/live-1.webp",
        "./assets/img/other-images/live-2.webp",
        "./assets/img/other-images/article-1.webp",
        "./assets/img/other-images/article-1.webp",
    ];

    const imageGrid = document.getElementById("imageGrid");
    const selectedImageView = document.getElementById("selectedImageView");
    const selectedImage = document.getElementById("selectedImage");
    const closeBtn = document.getElementById("closeBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentImageIndex = 0;

    // Populate image grid
    images.forEach((src, index) => {
        const imgElement = document.createElement("div");
        imgElement.className = "image-item";
        imgElement.innerHTML = `<img src="${src}" alt="Image ${index + 1}">`;
        imgElement.addEventListener("click", () => showImage(index));
        imageGrid.appendChild(imgElement);
    });

    function showImage(index) {
        currentImageIndex = index;
        selectedImage.src = images[index];
        selectedImageView.classList.add("active");
    }

    function hideImage() {
        selectedImageView.classList.remove("active");
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        selectedImage.src = images[currentImageIndex];
    }

    function showPrevImage() {
        currentImageIndex =
            (currentImageIndex - 1 + images.length) % images.length;
        selectedImage.src = images[currentImageIndex];
    }

    closeBtn.addEventListener("click", hideImage);
    nextBtn.addEventListener("click", showNextImage);
    prevBtn.addEventListener("click", showPrevImage);

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (selectedImageView.classList.contains("active")) {
            if (e.key === "ArrowRight") showNextImage();
            if (e.key === "ArrowLeft") showPrevImage();
            if (e.key === "Escape") hideImage();
        }
    });


    /*------------------------------------
        date picker
    --------------------------------------*/
    // Initialize the datepicker on the input field
    $('.datepicker').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        todayHighlight: true,
    });

    // Trigger the datepicker when the calendar icon is clicked
    $('#calendar-icon').on('click', function () {
        $('.datepicker').datepicker('show');
    });


});
