// Yawatal website — shared behavior

document.addEventListener('DOMContentLoaded', function () {

  /* mobile nav toggle */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* hero verdict cycle — recreates the overlay flipping between GREEN / YELLOW / RED */
  var verdictEl = document.querySelector('[data-verdict-cycle]');
  if (verdictEl) {
    var states = [
      { cls: 'green',  label: 'GREEN · ' + '\u12ED\u12A0\u12CB\u127D\u120D',  fare: '145.00 ETB', sub: '4.2 km · 12 min · 12.1 ETB/min' },
      { cls: 'yellow', label: 'YELLOW · ' + '\u12A0\u12A0\u1275\u1263\u12CD',  fare: '92.00 ETB',  sub: '3.8 km · 11 min · 8.4 ETB/min' },
      { cls: 'red',    label: 'RED · ' + '\u12A0\u12ED\u12C8\u1323\u121D',     fare: '58.00 ETB',  sub: '6.1 km · 17 min · 3.4 ETB/min' }
    ];
    var i = 0;
    var fareEl = document.querySelector('[data-fare]');
    var subEl = document.querySelector('[data-sub]');
    function paint() {
      var s = states[i];
      verdictEl.className = 'verdict-pill ' + s.cls;
      verdictEl.innerHTML = '<span class="dot"></span>' + s.label;
      if (fareEl) fareEl.textContent = s.fare;
      if (subEl) subEl.textContent = s.sub;
      i = (i + 1) % states.length;
    }
    paint();
    setInterval(paint, 2600);
  }

  /* FAQ accordion */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      item.classList.toggle('open', !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
    });
  });

  /* contact form -> mailto (static site, no backend) */
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var topic = form.topic.value;
      var message = form.message.value.trim();
      var subject = encodeURIComponent('Yawatal support — ' + topic);
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Topic: ' + topic + '\n\n' +
        message
      );
      window.location.href = 'mailto:support@yawatal.com?subject=' + subject + '&body=' + body;
    });
  }

  /* footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
