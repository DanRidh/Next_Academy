while True:
    try:
        user_input = int(input("Please enter a number: "))
        break
    except ValueError:
        print("bruh a number cmon man")

if (user_input % 3 == 0 and user_input % 5 == 0):
    print("FizzBuzz")
elif user_input % 3 == 0:
    print("Fizz")
elif user_input % 5 == 0:
    print("Buzz")
else:
    print(user_input)

