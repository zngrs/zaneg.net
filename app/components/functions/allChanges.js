function getTimeAgoString(date) {
    const now = new Date();
    const elapsedTime = now - date;

    if (elapsedTime < 1000) {
        return 'Just now';
    }

    const seconds = Math.floor(elapsedTime / 1000);
    if (seconds < 60) {
        return seconds === 1 ? '1 second ago' : seconds + ' seconds ago';
    }

    const minutes = Math.floor(elapsedTime / (1000 * 60));
    if (minutes < 60) {
        return minutes === 1 ? '1 minute ago' : minutes + ' minutes ago';
    }

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    if (hours < 24) {
        return hours === 1 ? '1 hour ago' : hours + ' hours ago';
    }

    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    if (days < 30) {
        return days === 1 ? '1 day ago' : days + ' days ago';
    }

    const months = Math.floor(days / 30);
    if (months < 12) {
        return months === 1 ? '1 month ago' : months + ' months ago';
    }

    const years = Math.floor(months / 12);
    return years === 1 ? '1 year ago' : years + ' years ago';
}



async function getData() {
    const res = await fetch(
        "https://api.github.com/repos/zngrs/zaneg.net/commits"
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function allChanges() {
    const data = await getData();


    let r = data;
    return r;
}

