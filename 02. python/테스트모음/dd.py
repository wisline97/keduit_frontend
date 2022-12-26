i = 1
while i <= 24:
    garo = i
    sero = 24 // i
    if 24 % i == 0 :
        if garo > sero and garo  > sero * 2 and garo  < sero * 3:
            print(garo , sero)

    i += 1