const myInfo = new URLSearchParams(window.location.search);

console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p><strong>First Name: </strong>${myInfo.get('first')}</p>
<p><strong>Last Name: </strong>${myInfo.get('last')}</p>
<p><strong>Email: </strong>${myInfo.get('email')}</p>
<p><strong>Cell Phone: </strong>${myInfo.get('phone')}</p>
<p><strong>Favorite Game: </strong>${myInfo.get('game')}</p>

<p><strong>Date Submitted: </strong>${myInfo.get('timestamp')}</p>

`;