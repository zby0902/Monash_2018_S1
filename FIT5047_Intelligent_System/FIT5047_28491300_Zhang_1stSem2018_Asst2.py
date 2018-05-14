#This is  simple python file simulating the algorithm simulated annealing
# Since the mutation of the variable is on a stochastic basis, it may not reach the known maximum of the z function.
# The Temperature T determine the tollerance of value that may reduce the value score z. The higher the T is, the higher
#the tollerance is
import argparse
import random
import math

parser = argparse.ArgumentParser()
parser.add_argument('-no')
parser.add_argument('-u')
parser.add_argument('-v')
parser.add_argument('-w')
parser.add_argument('-y')
args = parser.parse_args()





def rng(l=0, u=1):
    """
    a funtion return a random float between 0 and 1(not included)
    """
    return round(random.uniform(l,u), 5)

def cal_p(delta, T):
    """
    Calculate the probility of a event going backward but we will take it
    """
    return math.exp(delta/T)

def mutate(p):
    """
    Doing mutation to transform the current variable to the next candidate,
    the detail of transformation:
    find the distance of the value to the upper(1) and lower(-1) bound,
    then add a random value in the range of the two distance.
    So this mutation substancially make the current variable random value closer to the bound
    so that it gradually cover the whole range [-1,1]
    """
    d1 = p + 1
    d2 = 1 - p
    return p + rng(-1*d1,d2)

def z(u,v=1,w=1,y=1):
    """
    The value function of the simulated annealing process
    """
    pi = math.pi
    a = (u*v**2 + math.sin(pi*w)) * math.sin(v/(0.01 + u**2)) * math.sin(pi*w/2)
    b = u**3 * v**2  *w * math.sin(v**3/(0.001*math.sin(pi*w/2)**2 + u**4 + (w-1)**2))
    return round((a+b) * y, 5)

def simulated_annealing_2a(u, init_T=5000, threshold=100, cool_rate = 0.05):
    """
    The main function of the simulated annealing process
    Parameters:
  
    u -- if -2, then u will be randomly generated, else specify the value 0 or other values

    init_t -- the initial temperature of the process, the default value is 5000
    threshold -- the threshold of temperature, when the temperature is lower than it, the process ends, default is 100
    cool_rate --  the cooling rate of the annealing process, it affect the rate the temperature goes down
    """
    if u == -2.:
        u = rng(-1)
    curr = u
    maxi = curr # maxi keep track of the of u value corresponding to the current largest z score
    T =  init_T
    while T >= threshold: #the outer loop represent the number of epoch to process
        T = T - cool_rate*T
        print("Temperature T:{}, u:{}, value z:{}".format(T,curr,z(u)))
        for i in range(100):# the inner loop is number of picking random neighbour
            cand = mutate(curr)
            print("u:{}, value z:{}".format(curr,z(curr)))
            delta = z(cand) - z(curr)
            if delta > 0:
                curr = cand
            else:
                if cal_p(delta, T) > rng():
                    curr = cand
                else:
                    pass
            if z(curr) > z(maxi):
                maxi = curr                
    print ("Temperature:{}, maxi:{}, z score:{}".format(T,maxi, z(maxi)))
def sa_2b(u,v,init_T=5000, threshold=100, cool_rate = 0.05):
    if u == -2.:
        u = rng(-1)
    if v == -2.:
        v = rng(-1)
    curr_u = u
    curr_v = v
    maxi = u,v
    T =  init_T
    while T >= threshold: #the outer loop represent the number of epoch to process
        T = T - cool_rate*T
        print("Temperature T:{}, u:{}, v:{},value z:{}".format(T,curr_u,curr_v,z(curr_u,curr_v)))
        for i in range(100):# the inner loop is number of picking random neighbour
            cand_u = mutate(curr_u)
            cand_v = mutate(curr_v)
            print("u:{}, v:{}, value z:{}".format(curr_u,curr_v, z(curr_u,curr_v)))
            delta = z(cand_u,cand_v) - z(curr_u,curr_v)
            if delta >0:
                curr_u = cand_u
                curr_v = cand_v
            else:
                if cal_p(delta,T) > rng():
                    curr_u = cand_u
                    curr_v = cand_v
                else:
                    pass
            if z(curr_u,curr_v) > z(maxi[0],maxi[1]):
                maxi = curr_u,curr_v              
    print ("Temperature:{}, maxi:{}, z score:{}".format(T,maxi, z(maxi[0],maxi[1])))
def sa_2c(u, v, w, init_T=5000, threshold=100, cool_rate = 0.05):
    if u == -2.:
        u = rng(-1)
    if v == -2.:
        v = rng(-1)
    if w == -2.:
        w = rng(-1)
    
    curr_u = u
    curr_v = v
    curr_w = w
    maxi = u,v,w
    T =  init_T
    while  T >= threshold: #the outer loop represent the number of epoch to process
        T = T - cool_rate*T
        print("Temperature T:{}, u:{}, v:{},w:{}, value z:{}".format(T,curr_u,curr_v,curr_w,z(curr_u,curr_v,curr_w)))
        for i in range(100):# the inner loop is number of picking random neighbour
            cand_u = mutate(curr_u)
            cand_v = mutate(curr_v)
            cand_w = mutate(curr_w)
            print("u:{}, v:{},w:{}, value z:{}".format(curr_u,curr_v,curr_w, z(curr_u,curr_v,curr_w)))
            delta = z(cand_u,cand_v,cand_w) - z(curr_u,curr_v,curr_w)
            if delta >0:
                curr_u = cand_u
                curr_v = cand_v
                curr_w = cand_w
            else:
                if cal_p(delta,T) > rng():
                    curr_u = cand_u
                    curr_v = cand_v
                    curr_w = cand_w
                    
                else:
                    pass
            if z(curr_u,curr_v,curr_w) > z(maxi[0],maxi[1],maxi[2]):
                maxi = curr_u,curr_v, curr_w              
    print ("Temperature:{}, maxi:{}, z score:{}".format(T,maxi, z(maxi[0],maxi[1],maxi[2])))

def sa_2d(u,v,w,y, init_T=5000, threshold=100, cool_rate = 0.05):
    if u == -2.:
        u = rng(-1)
    if v == -2.:
        v = rng(-1)
    if w == -2.:
        w = rng(-1)
    if y == -2.:
        y = random.choice([-1,0,1])
    curr_u = u
    curr_v = v
    curr_w = w
    curr_y = y
    maxi = u,v,w,y
    T =  init_T
    while  T >= threshold: #the outer loop represent the number of epoch to process
        T = T - cool_rate*T
        print("Temperature T:{}, u:{}, v:{},w:{}, y:{}, value z:{}".format(T,curr_u,curr_v,curr_w,curr_y,z(curr_u,curr_v)))
        for i in range(100):# the inner loop is number of picking random neighbour
            cand_u = mutate(curr_u)
            cand_v = mutate(curr_v)
            cand_w = mutate(curr_w)
            cand_y = random.choice([-1,0,1])
            print("u:{}, v:{},w:{}, y:{}, value z:{}".format(curr_u,curr_v,curr_w,curr_y,z(curr_u,curr_v,curr_w,curr_y)))
            print("! {} {}".format(curr_y,i))
            delta = z(cand_u,cand_v,cand_w,cand_y) - z(curr_u,curr_v,curr_w,cand_y)
            if delta >0:
                curr_u = cand_u
                curr_v = cand_v
                curr_w = cand_w
                curr_y = cand_y
                
            else:
                if cal_p(delta,T) > rng():
                    curr_u = cand_u
                    curr_v = cand_v
                    curr_w = cand_w
                    curr_y = cand_y
                    
                else:
                    pass
            if z(curr_u,curr_v,curr_w,curr_y) > z(maxi[0],maxi[1],maxi[2],maxi[3]):
                maxi = curr_u,curr_v, curr_w, curr_y             
    print ("Temperature:{}, maxi:{}, z score:{}".format(T,maxi, z(maxi[0],maxi[1],maxi[2],maxi[3])))

def main(no,u,v,w,y):
    if int(no) == 1:
        simulated_annealing_2a(float(u))
    if int(no) == 2:
        sa_2b(float(u), float(v))
    if int(no) == 3:
        sa_2c(float(u), float(v), float(w))
    elif int(no) == 4:
        sa_2d(float(u), float(v), float(w), int(y))
        

main(args.no, args.u, args.v, args.w, args.y)
