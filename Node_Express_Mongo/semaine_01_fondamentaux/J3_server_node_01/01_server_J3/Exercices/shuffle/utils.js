

export const show = (users, className="user") => {

    return `
        <ul class="${className}">${users.map(user => (`<li>${user}</li>`)).join("")}</ul>
    `;
}

export const shuffle = (users, className="user") => {

    // users.sort((a, b) => a - b  );
    users.sort( _ => Math.random() - .5 );

    return `
        <ul class="${className}">${users.map(user => (`<li>${user}</li>`)).join("")}</ul>
    `;
}