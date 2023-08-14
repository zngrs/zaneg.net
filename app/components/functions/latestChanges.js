function getTimeAgoString(date) {
    const now = new Date();
    const elapsedTime = now - date;

    if (elapsedTime < 1000) {
        return "Just now";
    }

    const seconds = Math.floor(elapsedTime / 1000);
    if (seconds < 60) {
        return seconds + " seconds ago";
    }

    const minutes = Math.floor(elapsedTime / (1000 * 60));
    if (minutes < 60) {
        return minutes + " minutes ago";
    }

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    if (hours < 24) {
        return hours + " hours ago";
    }

    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    if (days < 30) {
        return days + " days ago";
    }

    const months = Math.floor(days / 30);
    if (months < 12) {
        return months + " months ago";
    }

    const years = Math.floor(months / 12);
    return years + " years ago";
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

export default async function latestChanges() {
    const data = await getData();

    let r = { message: "", date: "" };

    r.message = data[0].commit.message;
    r.date = data[0].commit.committer.date;

    const dateObject = new Date(r.date);
    r.ago = getTimeAgoString(dateObject);
    return r;
}
