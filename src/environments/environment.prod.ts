export const environment = {
  production: true,
  apiUrl: 'https://mypersonalpiggybank.azurewebsites.net',
  tokenAllowedDomains: [ /mypersonalpiggybank.azurewebsites.net/ ],
  tokenDisallowedRoutes: [/\/oauth\/token/],
};
