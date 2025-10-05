const myInfo = new URLSearchParams(window.location.search);

console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p>First Name: ${myInfo.get('first')}</p>
<p>Last Name:  ${myInfo.get('last')}</p>
<p>Title: ${myInfo.get('title')}</p> 
<p>Email: ${myInfo.get('email')}</p>
<p>Cell Phone: ${myInfo.get('phone')}</p>
<p>Organization Name: ${myInfo.get('organization')}</p>
<p>Membership Level: ${myInfo.get('membership')}</p>
<p>Organization Description:</p>
<p>${myInfo.get('organization-description')}</p>

<p>Date Submitted: ${myInfo.get('timestamp')}</p>

`;