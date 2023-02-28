document.addEventListener('DOMContentLoaded', function () {
  const bars = document.querySelectorAll('.bar');

  bars.forEach(bar => {
    bar.style.width = '0%'; // Inicializa el ancho en cero
  });

  bars.forEach(bar => {
    bar.parentElement.addEventListener('mouseover', () => {
      bar.style.width = bar.dataset.width;
    });
    bar.parentElement.addEventListener('touchstart', () => {
      bar.style.width = bar.dataset.width;
    });
    bar.parentElement.addEventListener('mouseout', () => {
      bar.style.width = '0%';
    });
    bar.parentElement.addEventListener('touchend', () => {
      bar.style.width = '0%';
    });
  });
});

function showImage(img) {
  document.getElementById("modalImage").src = img.src;
  $('#imageModal').modal('show');
}
