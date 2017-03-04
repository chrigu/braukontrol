let pushoverApiToken = '';

if (process.env.NODE_ENV === 'development') {
    pushoverApiToken = 'your key';
} else if (process.env.NODE_ENV === 'production') {
    pushoverApiToken = 'your key';
}

export const PUSHOVER_API_TOKEN = pushoverApiToken;