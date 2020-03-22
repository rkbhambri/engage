// export const axiosBaseUrl = 'http://13.126.172.69:3000';
export const axiosBaseUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:3001/' : 'http://api.league-app.com/';
// https://api.paisajeet.com/

const appUrl = encodeURIComponent(process.env.NODE_ENV !== 'production' ? 'http://13.235.50.69:3000/' : 'http://api.league-app.com/');

export const facebookUrl = 'https://www.facebook.com/dialog/share?app_id=162911467985829&display=popup&u=' + appUrl;
export const LinkedInUrl = '?mini=true&source=' + appUrl;
