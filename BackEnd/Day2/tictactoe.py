import random as r

def start_game(game_mode):
    board = [
        ["-","-","-"],
        ["-","-","-"],
        ["-","-","-"]
    ]

    player = "X"
    computer = "O"
    winner = ""
    valid_input = False
    gameover = False
    
    if game_mode == 1:          #vs Computer
        while not gameover:
            print("\n")
            print(f"Player turn\n===========")

            x = get_x()
            y = get_y()

            while not valid_input:
                if board[x][y] == "-":
                    board[x][y] = player
                    valid_input = True
                else:
                    print("Sorry but that spot is already taken")
                    x = get_x()
                    y = get_y()
            valid_input = False
            
            print("Here is the output\n")
            for row in board:
                print(row)

            gameover = check_winner(board, x, y)

            if gameover:
                winner = "Player"
                break
            else:
                while not valid_input:
                    x = random_int()
                    y = random_int()
                    if board[x][y] == "-":
                        board[x][y] = computer
                        valid_input = True
                    else:
                        valid_input = False
                valid_input = False

            print("\n")
            print(f"Computer turn\n==============")
            print("Here is the output\n")
            for row in board:
                print(row)
            
            gameover = check_winner(board, x, y)
            if gameover:
                winner = "Computer"
                break

            if check_tie(board):
                gameover = True
                winner = "None"

        if winner == "None":
            print("\nGame is tied")
        else:
            print(f"\n{winner} is the winner")

    elif game_mode == 2:            #vs Player
        while not gameover:
            print("\n")
            print(f"Player {player} turn\n=============")
            
            x = get_x()
            y = get_y()

            while not valid_input:
                if board[x][y] == "-":
                    board[x][y] = player
                    valid_input = True
                else:
                    print("Sorry but that spot is already taken")
                    x = get_x()
                    y = get_y()
            valid_input = False

            print("Here is the output\n")
            for row in board:
                print(row)

            gameover = check_winner(board, x, y)

            if not gameover:
                if player == "X":
                    player = "O"
                elif player == "O":
                    player = "X"
                gameover = check_tie(board)
                winner = "None"
        
        if winner == "None":
            print("\nGame is tied")
        else:
            print(f"\nPlayer {player} is the winner")


def get_x():
    valid_x = False
    while not valid_x:     
        x = int(input("Put in your X coordinate: "))
        if x > 2 or x < 0:
            print("hey, it's outta the tic-tac-toe board!")
        else:
            valid_x = True
    return x


def get_y():
    valid_y = False
    while not valid_y:     
        y = int(input("Put in your Y coordinate: "))
        if y > 2 or y < 0:
            print("hey, it's outta the tic-tac-toe board!")
        else:
            valid_y = True
    return y


def check_winner(board, x, y):
    if board[x][0] == board[x][1] == board [x][2]:          #horizontal check based on latest move
        return True
    if board[0][y] == board[1][y] == board [2][y]:          #vertical check based on latest move
        return True
    if x == y and board[0][0] == board[1][1] == board [2][2]:
        return True
    if x + y == 2 and board[0][2] == board[1][1] == board [2][0]:
        return True
    
    return False


def check_tie(board):
    for i in range(len(board)):
        for j in range(len(board)):
            if board[i][j] == "-":
                return False
    return True


def random_int():
    return r.randint(0,2)


#starts here
valid_mode = False
print("For singleplayer, please enter 1\nFor multiplayer, please enter 2")

while not valid_mode:
    user_selectmode = int(input("Which mode would you like to play today? "))
    if user_selectmode == 1 or user_selectmode == 2:
        valid_mode = True
    else:
       print("Please enter either 1 or 2")

start_game(user_selectmode)


