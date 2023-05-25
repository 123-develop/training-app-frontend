// https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=openid%20email%20profile

const generateOauthGoogleLink = (client_id, redirect_uri) => {
 const origin = window.location.origin + '/oauth/google'
 const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&scope=openid%20email%20profile&service=lso&o2v=2&flowName=GeneralOAuthFlow";

 if (redirect_uri) 
  return baseUrl + "&client_id=" + client_id + "&redirect_uri=" + encodeURIComponent(redirect_uri);

  return baseUrl + "&client_id=" + client_id + "&redirect_uri=" + encodeURIComponent(origin);
}

export default generateOauthGoogleLink