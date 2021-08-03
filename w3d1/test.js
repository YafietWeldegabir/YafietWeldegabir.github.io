(function () {
    describe("Account", function () {
        beforeEach(function () {
            account = new Account(612758);

        });

        describe("getNumber", function () {
            it("returns account's number", function () {
                assert.equal(account.getNumber(), 612758);
            });
        });

        describe("getBalance", function () {
            it("returns account's balance", function () {
                assert.equal(account.getBalance(), 0);
            });
        });
        describe("deposit", function () {
            it("Adds deposited amount to the balance", function () {
                account.deposit(100);
                assert.equal(account.getBalance(), 100);
            })
        });

        describe("withdraw", function () {
            it("Deducts amount of money from the balance", function () {
                account.deposit(100);
                account.withdraw(50);
                assert.equal(account.getBalance(), 50);
            })
        });

        describe("endOfMonth", function () {
            it("prints account info", function () {
                assert.equal(account.endOfMonth(), '');
            });
        });


        describe("toString", function () {
            it("prints account details", function () {
                assert.equal(account.toString(), `Account ${account.getNumber()}: balance ${account.getBalance()}`);
            });
        });
    });

    describe("SavingsAccount", function () {
        beforeEach(function () {
            savingsAccount = new SavingsAccount(0.05, 612700);

        });

        describe("setInterest", function () {
            it("sets account interest", function () {
                savingsAccount.setInterest(0.05);
                assert.equal(savingsAccount.getInterest(), 0.05);
            });
        });

        describe("addInterest", function () {
            it("deposits balance interest into account", function () {
                savingsAccount.deposit(100);
                savingsAccount.addInterest()
                assert.equal(savingsAccount.getBalance(), 100.05);
            });
        });

        describe("getInterest", function () {
            it("returns account interest", function () {
                assert.equal(savingsAccount.getInterest(), 0.05);
            });
        });

        describe("endOfMonth", function () {
            it("print savings account details", function () {
                savingsAccount.deposit(100);
                savingsAccount.addInterest()
                assert.equal(savingsAccount.endOfMonth(),
                    `SavingsAccount ${savingsAccount.getNumber()}: balance: ${savingsAccount.getBalance()} interest: ${savingsAccount.getInterest()}`);
            });
        });
        describe("toString", function () {
            it("prints savings account info", function () {
                assert.equal(savingsAccount.toString(), `Savings Account ${savingsAccount.getNumber()}: balance ${savingsAccount.getBalance()}: intreset ${savingsAccount.getInterest()}`);
            });
        });

    });

    describe("CheckingAccount", function () {
        beforeEach(() => {
            checkingAccount = new CheckingAccount(100, 6250);
        });

        describe("setOverdraftLimit", function () {
            it("sets checking account overdraftLimit", function () {
                checkingAccount.setOverdraftLimit(100);
                assert.equal(checkingAccount.getOverdraftLimit(), 100);
            });
        });

        describe("getOverdraftLimit", function () {
            it("returns account overdraftLimit", function () {
                assert.equal(checkingAccount.getOverdraftLimit(), 100);
            });
        });


        describe("withdraw", function () {
            it("deducts amount from account balance", function () {
                checkingAccount.deposit(100);
                checkingAccount.withdraw(10);
                assert.equal(checkingAccount.getBalance(), 90);
            });
        });

        describe("endOfMonth", function () {
            describe("when the balance is negative", function () {
                it("print warning details of checking account", function () {
                    checkingAccount.deposit(20);
                    checkingAccount.withdraw(100);
                    assert.equal(checkingAccount.endOfMonth(), `Warning, low balance ${checkingAccount.getNumber()}: balance: ${checkingAccount.getBalance()} overdraftlimit: ${checkingAccount._overdraftLimit}`);
                });
            });

            describe("when the balance is positive", function () {
                it("print details of checking account", function () {
                    assert.equal(checkingAccount.endOfMonth(), '');
                });
            })


            describe("toString", function () {
                it("print checking account info", function () {
                    assert.equal(checkingAccount.toString(), `Checking Account ${checkingAccount.getNumber()}: balance ${checkingAccount.getBalance()}: overdraft limit ${checkingAccount.getOverdraftLimit()}`);
                });
            });
        });
    
    describe("Bank", function() {
        beforeEach(() => {
            bank = new Bank();
        });

        describe("addAccount", function () {
            it("adds an account to Array the returns number of Accounts", function () {
                bank.addAccount(1001);
                assert.equal(bank.addAccount(1002), 2);
            });
        });

        describe("addCheckingAccount", function () {
            it("adds a checking account, and returns number of accounts", function () {
                assert.equal(bank.addCheckingAccount(1000, 2001), 1);
            });
        });

        describe("addSavingsAccount", function () {
            it("adds a savings account, and returns number of accounts", function () {
                assert.equal(bank.addSavingsAccount(0.05, 3001), 1);
            });
        });

        describe("accountReport", function () {
            it("prints accounts' details in the bank", function () {
                bank.addCheckingAccount(100, 2003);
                bank.addAccount(1003);
                bank.addSavingsAccount(0.04, 3003);
                assert.equal(bank.accountReport(), "Checking Account 2003: balance 0: overdraft limit 100\nAccount 1003: balance 0\nSavings Account 612700: balance 0: intreset 0.05");
            });
        });

        describe("endOfMonth", function () {
            it("print endOfMonth report on each account in the Bank", function () {
                bank.addCheckingAccount(100, 2003);
                bank.addAccount(1003);
                bank.addSavingsAccount(0.04, 3003);
                assert.equal(bank.endOfMonth(), "Deposit amount has to be greater than zerodeposit");
            });
        });
    });
    });

})();