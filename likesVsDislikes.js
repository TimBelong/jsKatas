function likeOrDislike(buttons) {
    let likeButton = false;
    let dislikeButton = false;

    for (const button of buttons) {
        if (button === "Like") {
            likeButton = !likeButton && !dislikeButton;
            dislikeButton = false;
        } else if (button === "Dislike") {
            dislikeButton = !dislikeButton && !likeButton;
            likeButton = false;
        }
    }

    if (likeButton)
        return "Like";
    else if (dislikeButton)
        return "Dislike";
    else
        return "Nothing";
}

console.log(likeOrDislike([Like,Like,Like]))