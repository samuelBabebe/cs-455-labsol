"use strict";
let bankaccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself = {
    name: "john",
    hobbies: ["violin", "cooking"],
    bankaccount: bankaccount
};
