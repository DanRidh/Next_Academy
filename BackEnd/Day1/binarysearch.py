def binary_search(target, my_list):
    start = 0
    end = len(my_list)-1
    
    while (start<=end):
        mid = (start + end) // 2
        if my_list[mid] == target:
            return mid
        
        if my_list[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    return "It aint in the list my guy"


print(binary_search(56, list(range(1, 201))))
