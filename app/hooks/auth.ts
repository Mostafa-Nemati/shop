import Cookies from "universal-cookie"

export const storeLoginToken = async (token: string, days: number = 10) => {
    await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    })

}

export const removeLoginToken = async () => {
    //let cookie = new Cookies();
    //cookie.remove('shop_Token');

    //httpOnly
    await fetch('/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}