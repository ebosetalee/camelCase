const camelCase = require("../index");

test("change foo-bar to fooBar", () => {
    expect(camelCase("foo-bar")).toBe("fooBar");
});

test("chnage foo_bar to fooBar", () => {
    expect(camelCase("foo_bar")).toBe("fooBar");
});

test("convert Foo-Bar to fooBar", () => {
    expect(camelCase("Foo-Bar")).toBe("fooBar");
});

test("convert Foo-Bar with pascalCase to FooBar", () => {
    expect(camelCase("Foo-Bar", { pascalCase: true })).toBe("FooBar");
});

test("convert --foo.bar to fooBar", () => {
    expect(camelCase("--foo.bar", { pascalCase: false })).toBe("fooBar");
})

test("convert Foo-BAR with upperCase to fooBAR", () => {
    expect(camelCase("Foo-BAR", { uppercase: true })).toBe("fooBAR")
})

test("convert fooBAR with pascalCase and upperCase to FooBAR", () => {
    expect(camelCase("fooBAR", { pascalCase: true, uppercase: true })).toBe("FooBAR")
})

test("convert foo bar to fooBar", () => {
    expect(camelCase("foo bar")).toBe("fooBar");
});

