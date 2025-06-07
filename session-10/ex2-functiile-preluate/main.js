console.log('Historical events-- Functiile preluate');

const apiKey = 'Cyrks1o/4EilPs2PAy/cCg==Zt893I3oMkEeY0hO';

const getEventsBtn = document.querySelector('#get-events-btn');

getEventsBtn.addEventListener('click', (event) => {
    event.preventDefault()
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

const getHistoricalEvents = async (apiKey, requestOptions = {}) => {
    if (!apiKey) throw new Error("API Key not provided");
  
    const { year, month, day, text } = requestOptions;
  
    let url = "https://api.api-ninjas.com/v1/historicalevents";
    const params = [];
  
    if (year) params.push(`year=${year}`);
    if (month) params.push(`month=${month}`);
    if (day) params.push(`date=${day}`);
    if (text) params.push(`text=${encodeURIComponent(text)}`);
  
    if (params.length > 0) {
      url += "?" + params.join("&");
    } else {
      throw new Error("You should provide at least a year, month or text");
    }
  
    const urlOptions = {
      headers: {
        "X-Api-Key": apiKey,
        "Content-type": "application/json",
      },
    };
  
    try {
      const response = await fetch(url, urlOptions);
  
      if (!response.ok) {
        let message = `Status ${response.status}`;
        try {
          const errorData = await response.json();
          message += `: ${
            errorData.error || errorData.message || "Unknown error"
          }`;
        } catch (e) {
          message += " (Invalid JSON response)";
        }
        throw new Error(message);
      }
  
      const data = await response.json();
      const reorderedData = data.sort((a, b) => a.year - b.year);
  
      return reorderedData;
    } catch (error) {
      console.error("API Error:", error.message);
      throw error;
    }
  };

const parentElement = document.querySelector('#list');  

function displayHistoricalEvents(parentElement, eventsList) {
    parentElement.innerHTML = "";
  
    eventsList.forEach((eventDate) => {
      const listItem = document.createElement("li");
  
      const daySpan = document.createElement("span");
      daySpan.classList.add("day");
      daySpan.textContent = eventDate.day ? eventDate.day + " " : "";
  
      const monthSpan = document.createElement("span");
      monthSpan.classList.add("month");
      monthSpan.textContent = eventDate.month ? eventDate.month + " " : "";
  
      const yearSpan = document.createElement("span");
      yearSpan.classList.add("year");
      yearSpan.textContent = eventDate.year || "";
  
      const eventSpan = document.createElement("span");
      eventSpan.classList.add("event");
      eventSpan.textContent = ": " + eventDate.event;
  
      listItem.appendChild(daySpan);
      listItem.appendChild(monthSpan);
      listItem.appendChild(yearSpan);
      listItem.appendChild(eventSpan);
  
      parentElement.appendChild(listItem);
    });
  }