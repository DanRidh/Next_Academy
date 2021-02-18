def deaf_aunty(name):

    user_input = input("Say something: ")
    counter = 0

    if user_input == "I love you aunty, I have to go now":
        print("ok. Goodbye")
        print(f"{name}, are you there?")
        while counter < 2:
            user_input = input("Say something: ")
            if user_input == "":
                counter += 1
            else:
                deaf_aunty(name)
        return print("ok. Goodbye")
    elif user_input.islower():
        print("WHAT? SPEAK UP!")
        deaf_aunty(name)
    elif user_input.isupper():
        print("YOU ARE VERY RUDE!")
        deaf_aunty(name)
    else:
        print("SHOW SOME RESPECT!")
        deaf_aunty(name)
    

name = input("What is your name: ")
deaf_aunty(name)