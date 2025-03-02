/* scripts.js */

document.addEventListener('DOMContentLoaded', function () {
  // Form submission handler (as above)
  
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
