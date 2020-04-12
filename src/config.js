// export const axiosBaseUrl = 'http://13.126.172.69:3000';
export const axiosBaseUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:3002/' : 'http://api.league-app.com/';
// https://api.paisajeet.com/

const appUrl = encodeURIComponent(process.env.NODE_ENV !== 'production' ? 'http://13.235.50.69:3000/' : 'http://api.league-app.com/');

export const facebookUrl = 'https://www.facebook.com/dialog/share?app_id=162911467985829&display=popup&u=' + appUrl;
export const LinkedInUrl = '?mini=true&source=' + appUrl;

export const googleClientId = process.env.NODE_ENV !== 'production' ?
    '366862635690-ecl51tttjto9kdjgnt1te6hkl5aol9id.apps.googleusercontent.com'
    :
    '923778317040-l3qdops5rimpbmg5fclhlk8kk0g6i6p0.apps.googleusercontent.com';

export const facebookAppId = process.env.NODE_ENV !== 'production' ? '880883362326999' : '508741089833759';