# s="a4d2b3c3"
# output=""

# for i in s:
#     if i.isalpha():
#         x=i
#     else:
#         d=int(i)
#         output=output+(x*d)

# print(sorted(output))

# strin=''.join(output)

# print(strin)

s="aaabbbdrr"
prev=s[0]
output=""
c=1
i=1

for i in range(1,len(s)):
    if s[i]==prev:
        c=c+1
    else:
        output=output+str(c)+prev
        prev=s[i]
        c=1
    if i==len(s)-1:
        output=output+str(c)+prev

print(output)