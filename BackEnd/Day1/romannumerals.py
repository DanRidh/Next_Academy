while True:
    try:
        user_input = int(input("Type a number to be converted to it's roman numeral: "))
        break
    except ValueError:
        print("I asked for a number, not gibberish!")

total = user_input
roman_numerals = ["I","IV","V", "IX", "X", "XL","L","XC","C","CD","D","CM","M"]
values = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
result = ""


for i in range(len(values)-1, -1, -1):
    while(total >= values[i]):
        result += roman_numerals[i]
        total -= values[i]

print(f"Your number {user_input} in Roman days would have been {result}")
