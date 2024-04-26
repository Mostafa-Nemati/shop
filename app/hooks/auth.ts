import Cookies from 'universal-cookie';

export const storeLoginToken = ( token : string, days: number = 10) => {
    const cookies = new Cookies(null, { path: '/' , maxAge: (days * 24 * 3600) });
    cookies.set('shop_Token', token);
}