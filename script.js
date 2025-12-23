// small interactivity: mobile nav toggle and year
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('nav');
  const btn = document.getElementById('nav-toggle');
  btn.addEventListener('click', ()=> nav.classList.toggle('show'));

  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Replace placeholder email (optional)
  const emailLink = document.getElementById('email-link');
  if(emailLink && emailLink.href.includes('you@example.com')){
    // leave as-is — replace with real email before publishing
  }
});
