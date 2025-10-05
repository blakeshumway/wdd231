const myInfo = new URLSearchParams(window.location.search);

console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p><strong>First Name: </strong>${myInfo.get('first')}</p>
<p><strong>Last Name: </strong>${myInfo.get('last')}</p>
<p><strong>Title: </strong>${myInfo.get('title')}</p> 
<p><strong>Email: </strong>${myInfo.get('email')}</p>
<p><strong>Cell Phone: </strong>${myInfo.get('phone')}</p>
<p><strong>Organization Name: </strong>${myInfo.get('organization')}</p>
<p><strong>Membership Level: </strong>${myInfo.get('membership')}</p>
<p><strong>Organization Description: </strong></p>
<p class="org-description">${myInfo.get('organization-description')}</p>

<p><strong>Date Submitted: </strong>${myInfo.get('timestamp')}</p>

`;