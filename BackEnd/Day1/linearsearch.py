def linear_search(target, my_list):
    
    for i in range(len(my_list)):
        if my_list[i] == target:
            return i
    return "It aint in the list my guy"

random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37]

print(linear_search(18, random_numbers))  # 2 (it returns the position of the number)
print(linear_search(9, random_numbers))   # not found



def global_linear_search(target, my_list):
    
    index_arr = []
    for i in range(len(my_list)):
        if my_list[i] == target:
            index_arr.append(i)

    if not index_arr:
        return "It aint in the word my guy"
    else:
        return index_arr

bananas_arr = list("bananas")   #  ["b", "a", "n", "a", "n", "a", "s"]
print(global_linear_search("a", bananas_arr))   # [1, 3, 5]