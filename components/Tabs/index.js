// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

var topics;

axios.get('https://lambda-times-backend.herokuapp.com/topics').then((response) => { topics = response.data.topics; buildTabs(topics); }).catch((error) => console.log(error)).finally(() => {});

function buildTabs(data) {

    for (const index in data) {

        const tab = document.createElement('div');

        tab.className = 'tab';
        tab.setAttribute('data-type', index);
        tab.innerHTML = data[index];

        document.querySelector('.topics').appendChild(tab);

    }

}