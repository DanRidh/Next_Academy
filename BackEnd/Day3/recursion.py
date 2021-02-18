def recursive_factorial(n):
    if n==1:
        return n
    else:
        return n * recursive_factorial(n-1)

print(recursive_factorial(4))


def recursive_fibonacci(n):
    if n<=1:
        return n
    else:
        return recursive_fibonacci(n-1) + recursive_fibonacci(n-2)

print(recursive_fibonacci(6))