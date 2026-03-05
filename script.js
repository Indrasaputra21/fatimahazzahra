// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Fade-in on scroll
const sections = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + window.innerHeight - 100;
  sections.forEach(sec => {
    if(scrollY > sec.offsetTop){
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});

// Animate progress bars
const progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(bar => {
  const progress = bar.getAttribute('data-progress');
  setTimeout(() => { bar.style.width = progress + '%'; }, 500);
});

// Charts
const ctx1 = document.getElementById('chart1').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels:['Jan','Feb','Mar','Apr','May'],
    datasets:[{label:'Cash Flow (IDR Million)', data:[50,60,55,70,65], borderColor:'#0F172A', tension:0.3}]
  },
  options:{responsive:true}
});

const ctx2 = document.getElementById('chart2').getContext('2d');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels:['Jan','Feb','Mar','Apr','May'],
    datasets:[{label:'Budget vs Actual', data:[80,90,75,95,85], backgroundColor:'#0F172A'}]
  },
  options:{responsive:true}
});