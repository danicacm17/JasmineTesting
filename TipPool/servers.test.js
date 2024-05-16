describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // Setup logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers and update the server table', function() {
    // Simulate a submit event
    submitServerInfo();

    // Expect a server to be added to allServers
    expect(Object.keys(allServers).length).toBe(1);
    expect(allServers['server1']).toBeDefined();

    // Expect the server table to be updated
    let serverTableRow = document.querySelector('#serverTable tbody tr');
    expect(serverTableRow).toBeTruthy();
  });

  it('should not add a new server if serverName is empty', function() {
    // Set serverNameInput value to empty
    serverNameInput.value = '';

    // Simulate a submit event
    submitServerInfo();

    // Expect no servers to be added to allServers
    expect(Object.keys(allServers).length).toBe(0);

    // Expect server table not to be updated
    let serverTableRow = document.querySelector('#serverTable tbody tr');
    expect(serverTableRow).toBeFalsy();
  });
});

describe("updateServerTable", function() {
  beforeEach(function() {
    // Reset serverTbody before each test
    serverTbody.innerHTML = '';
  });

  it('should update the server table with correct server names and earnings', function() {
    // Add servers to allServers
    allServers['server1'] = { serverName: 'Server 1' };
    allServers['server2'] = { serverName: 'Server 2' };

    // Call updateServerTable
    updateServerTable();

    // Expect two rows in the server table
    let serverTableRows = document.querySelectorAll('#serverTable tbody tr');
    expect(serverTableRows.length).toBe(2);

    // Expect correct server names and earnings in the table
    expect(serverTableRows[0].querySelector('td:nth-child(1)').textContent).toBe('Server 1');
    expect(serverTableRows[0].querySelector('td:nth-child(2)').textContent).toContain('$');

    expect(serverTableRows[1].querySelector('td:nth-child(1)').textContent).toBe('Server 2');
    expect(serverTableRows[1].querySelector('td:nth-child(2)').textContent).toContain('$');
  });

  it('should not update the server table if allServers is empty', function() {
    // Call updateServerTable with empty allServers
    updateServerTable();

    // Expect no rows in the server table
    let serverTableRows = document.querySelectorAll('#serverTable tbody tr');
    expect(serverTableRows.length).toBe(0);
  });
});
  
describe("appendDeleteBtn(tr) function", function() {
  let tr;

  beforeEach(function() {
    // Create a new table row for each test
    tr = document.createElement('tr');
  });

  it("should add a delete button to the provided table row", function() {
    // Call the function to append delete button
    appendDeleteBtn(tr);

    // Check if the table row contains a td element with class 'delete-btn'
    let deleteBtnTd = tr.querySelector('.delete-btn');
    expect(deleteBtnTd).toBeTruthy();
  });

  it("should set the text of the delete button to 'X'", function() {
    // Call the function to append delete button
    appendDeleteBtn(tr);

    // Check if the text of the delete button is 'X'
    let deleteBtnTd = tr.querySelector('.delete-btn');
    expect(deleteBtnTd.innerText).toBe('X');
  });

  it("should remove the parent table row when delete button is clicked", function() {
    // Call the function to append delete button
    appendDeleteBtn(tr);

    // Simulate a click on the delete button
    let deleteBtnTd = tr.querySelector('.delete-btn');
    deleteBtnTd.dispatchEvent(new Event('click'));

    // Check if the parent table row is removed
    expect(tr.parentElement).toBeFalsy(); // Parent should be null after removal
  });
});

afterEach(function() {
  // Teardown logic
  serverNameInput.value = ''; // Reset the serverNameInput value after each test
  allServers = {}; // Reset allServers after each test
  serverId = 0; // Reset serverId after each test
  serverTbody.innerHTML = ''; // Clear the server table body after each test
});