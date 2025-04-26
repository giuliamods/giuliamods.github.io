
  const button = document.getElementById('theme-button');
  const image = document.getElementById('theme-image');

  button.addEventListener('click', () => {
    image.classList.add('opacity-0');
    setTimeout(() => {
      image.src = '/mnt/data/5e195565-f58b-45b5-a215-f5222c1a28de.png'; // Caminho da nova imagem
      image.classList.remove('opacity-0');
    }, 300);
  });
