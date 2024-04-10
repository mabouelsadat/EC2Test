(async () => {
    try {
        const res = await fetch('https://ipinfo.io/ip');
        const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
        const body = await res.text();
        console.log('IP: ', body);
        console.log('Status Code:', res.status);
        console.log('Date in Response header:', headerDate);
    } catch (err) {
        console.log(err.message); //can be console.error
    }
})();