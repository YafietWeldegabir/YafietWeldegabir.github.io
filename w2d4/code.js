String.prototype.filter= function(...bannedWords) {
    return this.replace(new RegExp(bannedWords.join("|"), "gi"),'');
}


