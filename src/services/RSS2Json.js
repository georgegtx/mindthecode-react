export function getData(sources, sourceIndex) {
    return fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(sources[sourceIndex])}`)
        .then(res => res.json())
        .then(data => new Promise((resolve, reject) => {
            const fakeDelay = 1000 + Math.random() * 4000
            setTimeout(() => resolve(data), fakeDelay)
        }))
}