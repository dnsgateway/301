// basic tab switcher
document.querySelectorAll('.tabs .nav-link').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const tab = link.dataset.tab;
    link.closest('.tabs').querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
    link.classList.add('active');

    link.closest('.booking-card').querySelectorAll('.tab-pane').forEach(pane=>{
      pane.classList.toggle('active', pane.id === `tab-${tab}`);
    });
  });
});

// smooth-scroll to mock-up when CTA pressed
document.getElementById('demo-btn').addEventListener('click',()=>{
  document.querySelector('.mockup-wrapper').scrollIntoView({behavior:'smooth',block:'center'});
});
