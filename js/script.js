function checkCode() {
  const code = document.getElementById('codeInput').value;
  if (code === '0310') {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainPage').classList.remove('hidden');
  } else {
    alert('Wrong number! Try again 💔');
  }
}
function showTimeTogether() {
  const startDate = new Date("2024-10-03T00:00:00"); 
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  const result = `We’ve been together for 💕 ${days} days, ${hours} hours, and ${minutes} minutes!`;
  document.getElementById("timeTogether").innerText = result;
  document.getElementById("timeTogether").classList.remove("hidden");
}

document.getElementById('envelope').addEventListener('click', () => {
  document.getElementById('loveLetter').classList.toggle('hidden');
});

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    musicToggle.innerText = "🔈 Music Off";
  } else {
    bgMusic.pause();
    musicToggle.innerText = "🔊 Music On";
  }
  isPlaying = !isPlaying;
});
