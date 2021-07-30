String.prototype.filter= function(...bannedWords) {
    return this.replace(new RegExp(bannedWords.join("|"), "gi"),'');
}

console.log("This house is note nice!".filter("not"));

