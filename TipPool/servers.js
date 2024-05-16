let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');

let serverTbody = document.querySelector('#serverTable tbody');

let allServers = {};
let serverId = 0;

serverForm.addEventListener('submit', submitServerInfo);

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;

  if (serverName !== '') {
    serverId++;
    allServers['server' + serverId] = { serverName };

    updateServerTable();

    serverNameInput.value = '';
  }
}

// Function to append a delete button 'td' element to the provided 'tr' element
function appendDeleteBtn(tr) {
  let deleteBtnTd = document.createElement('td');
  deleteBtnTd.innerText = 'X';
  deleteBtnTd.classList.add('delete-btn'); // Add a class for styling

  // Set click event listener on the delete button
  deleteBtnTd.addEventListener('click', function() {
    // Remove the parent 'tr' element when the delete button is clicked
    tr.remove();
  });

  tr.appendChild(deleteBtnTd);
}

// Function to update the server table
function updateServerTable() {
  serverTbody.innerHTML = '';

  // Check if allServers is empty
  if (Object.keys(allServers).length === 0) {
    return; // If allServers is empty, do not update the table
  }

  let totalTipAmt = sumPaymentTotal('tipAmt');
  let totalServers = Object.keys(allServers).length;
  let tipAverage = totalServers !== 0 ? totalTipAmt / totalServers : 0;

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2)); // Set earnings to the average tip amount
    appendDeleteBtn(newTr);

    serverTbody.append(newTr);
  }
}
