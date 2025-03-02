/* scripts.js */

document.addEventListener('DOMContentLoaded', function () {
  // Navigation button active state (optional enhancement)
  const currentLocation = location.href;
  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach(function(button) {
    if (button.href === currentLocation) {
      button.classList.add('active');
    }
  });

  // Team member modal functionality
  const teamMembers = document.querySelectorAll('.team-member');
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');

  if (teamMembers.length > 0) {
    teamMembers.forEach(function(member) {
      member.addEventListener('click', function () {
        const memberName = this.querySelector('h3').textContent;
        const memberTitle = this.querySelector('p strong').textContent;
        const memberBio = this.querySelectorAll('p')[1].textContent;
        const memberImgSrc = this.querySelector('img').getAttribute('src');

        // Populate modal with team member details
        modalBody.innerHTML = `
          <img src="${memberImgSrc}" alt="${memberName}" style="width:150px; height:150px; border-radius:50%;">
          <h2>${memberName}</h2>
          <p><strong>${memberTitle}</strong></p>
          <p>${memberBio}</p>
        `;

        // Display the modal
        modal.style.display = 'block';
      });
    });

    // Close the modal when the user clicks on <span> (x)
    modalClose.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // Close the modal when the user clicks anywhere outside of the modal
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });

    // Close modal on 'Esc' key press
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  }
});
