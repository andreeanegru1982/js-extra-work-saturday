console.log('Historical event');

const apiKey = 'Cyrks1o/4EilPs2PAy/cCg==Zt893I3oMkEeY0hO';

// const requestOptions = {
//     year: 1492,
//     month: '',
//     day: '',
//     text: ''
// }

const getEventsBtn = document.querySelector('#get-events-btn');

getEventsBtn.addEventListener('click', () => {
    
    const year = document.querySelector('#year').value;
    const month = document.querySelector('#month').value;
    const day = document.querySelector('#day').value;
    const text = document.querySelector('#event').value;

    const requestOptions = {
        year: year,
        month: month,
        day: day,
        text: text
    }

    getHistoricalEvents(apiKey, requestOptions)
        .then(data => {
            console.log(data);
            displayHistoricalEvents(parentElement, data);
        })
        .catch(error => console.log(error))

    document.querySelector('#year').value = '';
    document.querySelector('#month').value = '';
    document.querySelector('#day').value = '';
    document.querySelector('#event').value = '';

})

function getHistoricalEvents(apiKey, requestOptions) {
    // Step 1: Validate requestOptions
    const nonEmptyParams = Object.keys(requestOptions)
        .filter(key => requestOptions[key] !== '' && requestOptions[key] !== undefined);


    if (nonEmptyParams.length === 0) {
        return Promise.reject(new Error('Error: year, month and day are missing.'));
    }

    // Step 2: Build query string
    const queryParams = nonEmptyParams
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(requestOptions[key])}`)
        .join('&');

    const apiUrl = `https://api.api-ninjas.com/v1/historicalevents?${queryParams}`;

    // Step 3: Validate API key
    if (!apiKey || apiKey.trim() === '') {
        return Promise.reject(new Error('Error: API key is missing.'));
    }

    // Step 4: Make API request
    return fetch(apiUrl, {
        headers: {
            'X-Api-Key': apiKey,
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 403 || response.status === 401) {
            throw new Error('Error: API key is incorrect or unauthorized.');
        } else if (!response.ok) {
            throw new Error(`Error: Request failed with status ${response.status}`);
        }
        return response.json();
    });
}

// getHistoricalEvents(apiKey, requestOptions)
//     .then(data => {
//         console.log(data);
//         displayHistoricalEvents(parentElement, data);
//     })
//     .catch(error => console.log(error))

// const eventList = [
//     {
//         "year": "1200",
//         "month": "05",
//         "day": "22",
//         "event": "King John of England and King Philip II of France sign the Treaty of Le Goulet."
//     },
//     {
//         "year": "1200",
//         "month": "08",
//         "day": "24",
//         "event": "King John of England, signer of the first Magna Carta, marries Isabella of Angoul\u00eame in Angoul\u00eame Cathedral."
//     },
//     {
//         "year": "1200",
//         "month": "10",
//         "day": "08",
//         "event": "Isabella of Angoul\u00eame is crowned Queen consort of England."
//     }
// ]

const parentElement = document.querySelector('#list');

function displayHistoricalEvents(parentElement, eventsList){
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }

    // Prepare field strings
    let years = '';
    let months = '';
    let days = '';
    let events = '';

    eventsList.forEach(event => {
        years += `${event.year} `;
        months += `${event.month} `;
        days += `${event.day} `;
        events += `${event.event} `;
    });
    
    const ol = document.createElement('ol');
    ol.id = 'ol-list';
    parentElement.appendChild(ol);

    eventsList.forEach(event => {

        const li = document.createElement('li');
        li.id = 'list-item';
        ol.appendChild(li);

        const yearSpan = document.createElement('span');
        yearSpan.textContent = `${event.year} - `;
        yearSpan.classList.add('event-year');
        li.append(yearSpan);

        const monthSpan = document.createElement('span');
        monthSpan.textContent = `${event.month} - `;
        monthSpan.classList.add('event-month');
        li.append(monthSpan);

        const daySpan = document.createElement('span');
        daySpan.textContent = `${event.day}  `;
        daySpan.classList.add('event-day');
        li.append(daySpan);

        const eventSpan = document.createElement('span');
        eventSpan.textContent = `${event.event}  `;
        eventSpan.classList.add('event-text');
        li.append(eventSpan);

    })
} 


// https://github.com/andreeanegru1982/js-extra-work-saturday/tree/8ee663d0533eb1073a6ff5cbfbd5aca8e4bae49f/session-10/ex1