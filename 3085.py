import sys

class boj3085:

    def __init__(self):

        self.A = int(sys.stdin.readline())


    def bojf(self):

        for i in range(self.A):
            N = list()
            B = list(map(int, sys.stdin.readline().split()))

            for j in B :

                if j % 2 == 0 :

                    N.append(j)

            print(sum(N), min(N))

K = boj3085()
K.bojf()

                

                    



