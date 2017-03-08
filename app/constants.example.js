let pushoverApiToken = '';          // pushover App Token
let updateInterval = 60 * 1000;     // Interval for Braumeister

if (process.env.NODE_ENV === 'development') {
    pushoverApiToken = 'app token';
    updateInterval = 30 * 1000;
} else if (process.env.NODE_ENV === 'production') {
    pushoverApiToken = 'app token';
}

export const PUSHOVER_API_TOKEN = pushoverApiToken;
export const UPDATE_INTERVAL = updateInterval;