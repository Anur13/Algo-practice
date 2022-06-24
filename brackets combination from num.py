def generate(cur, open, close, n):
    if len(cur) == 2 * n:
        if open == close:
            print(cur)
        return
    generate(cur + "(", open + 1, close, n)
    if close < open:
        generate(cur + ")", open, close + 1, n)


def parens(n):
    generate("", 0, 0, n)


print(parens(3))
