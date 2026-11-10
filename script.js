const fields = ["food", "transport", "study", "accommodation", "other"];

const money = value =>
  "PKR " + new Intl.NumberFormat("en-PK").format(value);

document.getElementById("calculate").addEventListener("click", () => {
  const income = Math.max(
    0,
    Number(document.getElementById("income").value) || 0
  );

  const expenses = fields.reduce((sum, id) => {
    return sum + Math.max(
      0,
      Number(document.getElementById(id).value) || 0
    );
  }, 0);

  const balance = income - expenses;

  document.getElementById("expenses").textContent = money(expenses);
  document.getElementById("balance").textContent = money(balance);

  const message = document.getElementById("message");

  if (!income) {
    message.textContent = "Add your monthly income.";
  } else if (balance > 0) {
    message.textContent = "Good work! You have money left.";
  } else if (balance < 0) {
    message.textContent = "Your expenses are higher than income.";
  } else {
    message.textContent = "Your budget is balanced.";
  }
});
