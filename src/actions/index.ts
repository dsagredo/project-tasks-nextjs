import { getCookie, hasCookie, setCookie } from 'cookies-next';

export const getCookieCart = (): { [id: string]: number } => {
    if (hasCookie('cart')) {
        return JSON.parse((getCookie('cart') as string) ?? '{}');
    }
    return {};
};

export const addProductCart = (id: string): void => {
    const cookieCart = getCookieCart();
    if (cookieCart[id]) {
        cookieCart[id] = cookieCart[id] + 1;
    } else {
        cookieCart[id] = 1;
    }
    setCookie('cart', JSON.stringify(cookieCart));
};

export const removeProductCart = (id: string): void => {
    const cookieCart = getCookieCart();
    delete cookieCart[id];
    setCookie('cart', JSON.stringify(cookieCart));
};

export const removeSingleCart = (id: string): void => {
    const cookieCart = getCookieCart();
    if (!cookieCart[id]) return;
    const itemCart = cookieCart[id] - 1;
    if (itemCart <= 0) {
        delete cookieCart[id];
    } else {
        cookieCart[id] = itemCart;
    }
    setCookie('cart', JSON.stringify(cookieCart));
};
