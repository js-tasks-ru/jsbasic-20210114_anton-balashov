"use strict";

let calculator = {
  read(a, b) {
    if (
      typeof a !== "number" ||
      isNaN(a) ||
      a > Number.MAX_SAFE_INTEGER ||
      a < Number.MIN_SAFE_INTEGER
    ) {
      throw new Error("first argument must be a valid number");
    }

    if (
      typeof b !== "number" ||
      isNaN(b) ||
      b > Number.MAX_SAFE_INTEGER ||
      b < Number.MIN_SAFE_INTEGER
    ) {
      throw new Error("second argument must be a valid number");
    }

    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
