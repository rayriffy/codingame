import sys
import math
import numpy as np

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())
m = int(input())

field = np.zeros((m, m), dtype=int)

for i in range(m):
    battleground = input()
    for j, s in enumerate(battleground):
        if s == 'x':
            field[i, j] = 1
        elif s != '.':
            raise Exception("Invalid symbols")

if n >= m:
    max_casualties = np.sum(field)
else:
    max_casualties = -1
    for i in range(m-n+1):
        for j in range(m-n+1):
            total_casualties = np.sum(field[i:i+n, j:j+n])
            if max_casualties < np.sum(field[i:i+n, j:j+n]):
                max_casualties = total_casualties

# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr)

print(max_casualties)