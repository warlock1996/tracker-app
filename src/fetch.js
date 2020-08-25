async function doFetch (url = {}) {
    const response = await fetch(url)
    return await response.json()    
}

export default function fetchResource (url) {
    let status = 'loading'
    let result
    let promise = doFetch(url).then(response => {
        status = 'success'
        result = response
    }).catch (e => {
        status = 'failed'
        result = e
    })
    return {
        read () {
            if (status === "loading") 
                throw promise
            else if (status === "success") 
                return result
            else if (status === "failed")
                return result 
        }
    }
    
}