import { json } from "stream/consumers"

export const HTTP_ERROR = 404;
export const HTTP_OK = 200;

const myFetch = fetch;
let options: any = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const fetchClient = ({
    url,
    method = 'GET',
    payload
}: any) => {
    if (method === "GET")
        return myFetch(url, options)


    return myFetch(url, {
        ...options,
        method: "POST",
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(payload)
    })
}


export const setHeaders = (token: string) => {
    const nextOptions: any = { ...options }

    nextOptions.headers = {
        ...options?.headers,
        'Authentication': `Bearer ${token}`
    }
    options = nextOptions;

}
