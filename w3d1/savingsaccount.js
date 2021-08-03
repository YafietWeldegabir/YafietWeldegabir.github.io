
class SavingsAccount extends Account {

    constructor(interest, number) {
        super(number); 
        this._intreset = interest;
    }

    getInterest() {
        return this._intreset;
    }

    setInterest(intreset) {
        this._intreset = intreset;
    }


    addInterest() {
        this.deposit(this.getBalance() * this.getInterest() / 100);
    }

    endOfMonth() {
        this.addInterest();
        return `SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this._intreset}`;
    }


    toString() {
        return `Savings Account ${savingsAccount.getNumber()}: balance ${savingsAccount.getBalance()}: intreset ${savingsAccount.getInterest()}`;
    }
}