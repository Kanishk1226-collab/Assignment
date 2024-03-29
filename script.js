// api url
const api_url = "https://api.myzila.com/LiveDashboard";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>sales</th>
          <th>total_sale_24_hour</th>
          <th>user_last_24_hour</th>
          <th>users</th>
         </tr>`;
    
    // Loop to access all rows 
    let r = data
        tab += `<tr> 
    <td>${r.data.sales} </td>
    <td>${r.data.total_sale_24_hour}</td>
    <td>${r.data.user_last_24_hour}</td> 
    <td>${r.data.users}</td>          
</tr>`;
    
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
     console.log(JSON.stringify(data, null, 2));

}

                 
