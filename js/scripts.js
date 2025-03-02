/* scripts.js */

document.addEventListener('DOMContentLoaded', function () {
  // Form submission handler
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Form validation (optional)
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
      }
      
      // Basic email format validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Handle form submission logic
      alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
      
      form.reset();
    });
  }
  
  // Load header and footer
  loadComponent('header.html', function (response) {
    const header = document.createElement('header');
    header.innerHTML = response;
    document.body.insertBefore(header, document.body.firstChild);
  });

  loadComponent('footer.html', function (response) {
    const footer = document.createElement('footer');
    footer.innerHTML = response;
    document.body.appendChild(footer);
  });
  
  // Optional: Add interactivity to team members
  const teamMembers = document.querySelectorAll('.team-member');
  teamMembers.forEach(function(member) {
    member.addEventListener('click', function () {
      const memberName = this.querySelector('h3').textContent;
      alert('You clicked on ' + memberName + '. More information can be displayed here.');
      // Implement additional interactivity if desired
    });
  });
});

function loadComponent(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
