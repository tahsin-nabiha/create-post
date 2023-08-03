/**
 * Function for Validation Alert
*/

const creatAlert = (msg, type='danger') => {
    return `
            <p class="alert alert-${type} d-flex justify-content-between mt-5">${msg}
                <button class="btn-close" data-bs-dismiss="alert"></button>
            </p>
    `;
}


/**
 * Function for Set LS Data
*/

const setLsData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}



/**
 * Function for Get LS Data
*/

const getLsData = (key) => {   

    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    return [];
}




/**
 * Function for Post Time Ago
*/

function timeAgo(date) {
    const secondsAgo = Math.floor((Date.now() - date) / 1000);
  
    const intervals = [
      { name: "year", seconds: 31536000 },
      { name: "month", seconds: 2592000 },
      { name: "week", seconds: 604800 },
      { name: "day", seconds: 86400 },
      { name: "hour", seconds: 3600 },
      { name: "minute", seconds: 60 },
      { name: "second", seconds: 1 },
    ];
  
    let timeAgoString = "Just now";
  
    for (let i = 0; i < intervals.length; i++) {
      const interval = intervals[i];
      const intervalCount = Math.floor(secondsAgo / interval.seconds);
      if (intervalCount >= 1) {
        timeAgoString = `${intervalCount} ${interval.name}${intervalCount === 1 ? "" : "s"} ago`;
        break; // Break the loop once the correct interval is found
      }
    }
  
    return timeAgoString;
  }
  
  
  
  
