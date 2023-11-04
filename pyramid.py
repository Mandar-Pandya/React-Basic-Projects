s = "Mandar Pandya is a Good Trader"

l = s.split()
l1 = []

for i in range(len(l)):
    if i%2 == 0:
        l1.append(l[i])
    else:
        l1.append(l[i][::-1])

print(l1)