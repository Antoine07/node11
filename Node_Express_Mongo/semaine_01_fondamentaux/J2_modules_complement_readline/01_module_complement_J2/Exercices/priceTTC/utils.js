
export const init = {
    PRECISION : 10
}

export function priceTTC( price, tva){

    return Math.floor(price * (1 + tva) * init.PRECISION)/ init.PRECISION;
}