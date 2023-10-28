import random

def computer_guess(x):
    low=1
    high=x
    feedback=''
    while feedback !='c':
        if low != high:
            guess= random.randint(1,x)
        else:
            guess = low  
        
        feedback=input(f'{guess} is too high(h) too low (l) , or correct (c) ').lower()
        if feedback == 'h':
            high=guess-1
        elif feedback =='l':
            low= guess+1
    print(f'yay , the pc guess the number{guess} correctly:')

computer_guess(2000)


