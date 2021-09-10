chooseDialog({
    positiveText: "Тест",
    neutralText: "Тест 2",
    unpositiveText: "Тест 3",
    positiveFunc: "test",
    neutralFunc: "test2",
    unpositiveFunc: "test3"
});

function test() {
    alert("Hello");
}

function test2() {
    alert("Hello 2");
}

function test3() {
    alert("Hello 3");
}

arrayDialogs = [
    "Hello 1",
    "Hello 2",
];

settingsArray(arrayDialogs);
dialogsInner();