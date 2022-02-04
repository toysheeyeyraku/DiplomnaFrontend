import { Log, User, UserManager } from 'oidc-client';

class AuthService {
  public userManager: UserManager;
  constructor() {
    const settings = {
      authority: 'https://localhost:5000/',
      client_id: 'oidcClient',
      redirect_uri: window.location.origin + '/signin-callback.html',
      silent_redirect_uri: window.location.origin + '/silent-renew.html',
      post_logout_redirect_uri: window.location.origin,
      response_type: process.env.REACT_APP_RESPONSE_TYPE,
      scope: 'api1.read IdentityServerApi'
    };
    console.log(settings.redirect_uri);
    this.userManager = new UserManager(settings);

    Log.logger = console;
    Log.level = Log.INFO;
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }

  public async getAccessToken(): Promise<any> {
    let user = await authService.getUser();
    return user?.access_token;
    
  }

}

const authService = new AuthService();
export default authService;
