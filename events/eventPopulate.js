// Function to populate the HTML elements with data from the JSON object
function populateEventData() {
    document.getElementById("title").textContent = eventData.title;
    document.getElementById("description").textContent = eventData["main-content"].description;

    document.getElementById("nit").textContent = "NIT Srinagar Students: " + eventData["main-content"].entry_fee["NIT Srinagar Students"][0];
    document.getElementById("other").textContent = "Other Institute Students: " + eventData["main-content"].entry_fee["Other Institute Students"][0];

    // Create and populate the list of contacts
    const contactsList = eventData["main-content"].contacts;
    populateContacts("contactsList", contactsList);

    // Populate the rest of the data
    const rulesList = eventData.tabs["Rules/Prizes"].rules;
    const prizesList = eventData.tabs["Rules/Prizes"].prizes;
    const criteriaList = eventData.tabs["Judging Criteria"].criteria;

    populateCriteria("eventRules", rulesList);
    populateCriteria("eventPrizes", prizesList);
    populateCriteria("judgingCriteria", criteriaList);
}

// Function to populate a list of contacts
function populateContacts(elementId, contacts) {
    const element = document.getElementById(elementId);
    const ul = document.createElement("ul");

    contacts.forEach(contact => {
        const li = document.createElement("li");
        li.textContent = `${contact.name} (${contact.phone})`;
        ul.appendChild(li);
    });

    element.appendChild(ul);
}

function populateCriteria(elementId, criteria) {
    const element = document.getElementById(elementId);
    const div = document.createElement("div");

    for (const key in criteria) {
        if (criteria.hasOwnProperty(key)) {
            const li = document.createElement("p");
            li.textContent = `${key}: ${criteria[key]}`;
            div.appendChild(li);
        }
    }

    element.appendChild(div);
}