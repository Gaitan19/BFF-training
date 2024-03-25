class BankAccount {
  balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Se depositaron $${amount}. Nuevo saldo: $${this.balance}`);
    } else {
      console.log("El monto a depositar debe ser mayor que cero.");
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Se retiraron $${amount}. Nuevo saldo: $${this.balance}`);
    } else {
      console.log("No se puede retirar fondos. Fondos insuficientes.");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);

console.log("Saldo inicial:", account.getBalance());

account.deposit(500);
account.withdraw(200);
account.withdraw(1500);

console.log("Saldo final:", account.getBalance());
