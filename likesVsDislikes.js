const likeOrDislike = buttons => buttons.reduce((result, currentButton) => {
    if (currentButton === result) {
        return "Nothing";
    } else {
        return currentButton;
    }
}, "Nothing");

console.log(likeOrDislike([Dislike,Like]))