print("Python test file")
# variable = container for a value. Behaves as the value it contains
first_name = "Carson" #convention in Python is to use _ for multi- word variables
last_name = "Hess"
full_name = first_name + " " + last_name
print("Hello "+full_name)
age = 29
print("You are: " + str(age) + " years old")

#strings, ints, floats, booleans

#float = floating point number (decimal). Int cannot store decimal values. Only full number
height = 250.5 #indicates it's a floatig point number
print("Your height is " + str(height) + "cm")
#boolean = class = 'bool'
bool_var = False

# Multiple assignment - declare multiple variables at the same time with one line of code
# use commas if values are different; if values are the same, do = = = 
# example - if two things are different values var1, var2 = var1_value, var2_value 
# if they are same value --> var 1 = var 2 = var_value

# string methods
name = "johnny"
print(len(name))
print(name.find("j")) #finds index of first matching element
print(name.capitalize()) #capitalizes first letter in string. Not the first letter in subsequent elements
print(name.upper()) #all uppercase
print(name.lower()) #all lowercase
print(name.isdigit()) #prints false if it is not a digit
print(name.isalpha()) #does the string contain only letters? Returns false if there is a space in there
print(name.count("n")) #counts number of characters in string. Needs an input argument
print(name.replace("n", "m"))

#type casting
# can move integers to floating point numbers, strings, etc. 

#accepting user input
# name = input("Enter username: ") # input is always a string
# print("Welcome " + name)
# age = int(input("How old are you?: "))
# age = age + 1
# print("Next year you'll be: " + str(age))

# Math functions

import math
pi = 3.14
x, y, z = 1, 2, 3
print(round(pi)) # rounds to nearest whole integer
print(math.ceil(pi)) # rounds up to neareest whole integer
print(math.floor(pi)) # rounds down
print(abs(pi)) # returns absolute value of input argument
print(math.floor(pow(pi, 2))) # requires the base element and the exponent element. Here, pi ^ 2. Layered with math.floor to round down
print(math.sqrt(pi)) # square root
print(max(x,y,z))
print(min(x,y,z))

# string slicing
# create a substring by extracting elements from another string
# indexing[] or slice()
# [start:stop:step] note that the stopping index is exclusive as opposed to inclusive.
#step is an optional field we can set a value to. Default value of "step" is 1. 

# using indexing
name = "Bro Code"
first_name = name[:3]
print(first_name)
last_name = name[4:]
print(last_name)
reversed_name = name[::-1]
print(reversed_name)

# using slice function 
website1 = "https://carsonhessre.com"
website2 = "https://wikipedia.com"
#exclude https:// and .com
# negative indexing - character all the way at the end has index of -1
new_string = slice(8,-4) #separate each value with a comma instead of a colon. 
print(website1[new_string])
print(website2[new_string])

# if statements - executes code if some condition is true
#age = int(input("How old are you?: "))
#if age == 100: #uses == otherwise python thinks you are trying to assign a variable
 #   print("You are a centunarian")
#elif age >= 18:
 #   print("You are an adult")
    # if it's not true, we skip over it at this point
#elif age < 0:
 #   print("Age cannot be < 0")
#else: 
 #   print("You are not an adult")

# logical operators - and, or, not
temp = 20
if not(temp >= 0 and temp <= 30):
    print("Temperature is not good")
elif not(temp < 0 or temp > 30):
    print("Temperature is good")
#not - can check if two or more conditions are not true

#while loop - executes some code while some condition is true
#name = ""
#while len(name) == 0:
#    name = input("Enter your name: ")  
#print("Hello " + name) 
#another way to write this
#name = None
#while not name:
 #   name = input("Enter your name: ")
#print("Hello " + name)

# for loops
for i in range(10):
    print(i+1)

for i in range(50,100+1,2): #last number is incrementor
    print(i)

for i in "Carson":
    print(i)

#nested loops - inner loop will finish its iterations before the outer loop
rows = 10
columns = 10
symbol = "$ "
# inner for loop - rows
for i in range(rows):
    for j in range(columns):
        print(symbol, end = "")
    print()
# outer for loop - columns

# break, continue, pass - loop control statements
# break - used to terminate a loop entirely
# continue - skips to next iteration of a loop
# pass - does nothing, acts as a placeholder

name = "Carson Hess"
while True:
    # name = input("Enter your name: ")
    if name != "":
        break

phone_number = "123-456-7890"

print(phone_number.replace("-", "")) #another way to do the below
for i in phone_number:
    if i == "-":
        continue
    print(i, end="")

for i in range(1, 21):
    if i == 13:
        pass
    else: 
        print(i)

# lists - used to store multiple items in a single variable
food = ["pizza", "hamburgers", "hot dog", "spaghetti"]
#print(food)
# each item in a list is an "element"
print(food[1])
food[0] = "sushi"
print(food[0])
for x in food:
    print(x)

#food.append("ice cream") #adds element to end of the list
#food.remove("hot dog") #removes element from list
#food.pop() #removes last element
#food.insert(0,"cake")
#food.sort() #sorts a list alphabetically
#food.clear() #removes all elements of a list

#2D lists - list of lists
drinks = ["water", "OJ", "coffee", "Soda"]
dinner = ["chicken wings", "pizza", "hamburger", "hot dog"]
dessert = ["tiramasu", "ice cream"]

food = [drinks, dinner, dessert] #list of lists
print(food)
print(food[0]) #returns first list
print(food[0][0]) #returns first element of first list

#tuples - collections that are ordered and unchangeable used to group together related data
student = ("carson", 29, "male") # kind of like an object
print(student.count("carson"))
print(student.index("male")) #count and index methods available for tuples

for x in student:
    print(x)

if 29 in student:
    print(29)

#sets - collection that is unordered and unindexed. Does not allow duplicate values
utensils = {"fork", "spoon", "knife"}
dishes = {"plate", "bowl", "cup", "knife"}
# print(utensils) # may not return elements in the same order with each iteration
# if you tried to add a bunch of duplicate elemnts to the above, you will just get one unique element
utensils.add("napkin")
utensils.remove("fork")
#utensils.clear()
#utensils.update(dishes)
dinner_table = utensils.union(dishes)
#see what utensils has that dishes doesn't
print(utensils.difference(dishes))
#see what the two sets have in common
print(utensils.intersection(dishes))

#dictionaries - changeable, unordered collection of unique key-value pairs. Allow us to access a value quickly
capitals = {'USA':'Washington D.C.', 
            'India':'New Dehli',
            'China':'Beijing',
            'Russia':'Moscow'}
#since they are unordered, you can't access by index. Access by associated key
print(capitals['Russia'])
print(capitals.get('Germany')) #returns none - get method prevents us from encountering an error
print(capitals.keys) #prints only the keys and not the values
print(capitals.values) #prints only the values and not the keys
print(capitals.items) #prints entire dictionary
#update
capitals.update({'Germany':'Berlin'}) #updates dictionary with new key:value pair
capitals.update({'USA':'Philadephia'}) #updates existing key with new value
capitals.pop('Russia') #removes this key-value pair by accessing key
#also have .clear() method
#can use a for loop
for key,value in capitals.items():
    print(key, value)

# indexing - index operator - [] - gives access to a sequence's elements - strings, lists, tuplets
name = "carson Hess"
first_name = name[:3]
last_name = name[-4:]
print(first_name.upper())
print(last_name.upper())

# functions - a block of code that is executed when it's called ("Invoking a function")
def hello(first_name, last_name, age):
    print("Hello " + first_name + " " + last_name)
    print("You are " + str(age) + " years old")
    print("Have a great day")
hello("Carson", "Hess", 29)

# return statement - Functions send Python values/objects back to the caller. 
#these values/objects are known as the functions "return value(s)"
def multiply_function(number1, number2):
    result = number1 * number2
    return result

print(multiply_function(6,8)) #prints the value that's returned from the multiply function

# keyword arguments - arguments that are pre-seeded by an identifier when passed into a function. 
#order of these does not matter, unlike positional arguments (last section)
def hello1(first_name, last_name, middle_name):
    print("Hello " + first_name + " " + middle_name + " " +last_name)

hello1(last_name = "Hess", middle_name = "Jay", first_name = "Carson")

# Nested function calls - function calls inside of other function calls. 
# innermost functions are resolved first. 
# return value is used for the next outer function

#scope = the region a variable is recognized. 
# a variable is only available from inside the region it is created. 
# global and locally scoped versions of a variable can be created.
#python uses indentation to figure out when a function block ends. 

# *args - parameter that will pack all arguments into a tuple 
#   useful so that a function can accept varying number of arguments
# tuples are immutable. Helpful in applications like coordinates

def add(*args):
    sum = 0
    for i in args:
        sum += i
    return sum

print(add(1, 2))

#**kwargs = parameter that will pack all arguments into a dictionary
#    useful so that a function can accept a varying number of keyword arguments
#   args will accept a varying number of positional arguments and pack them into a tuple
#   while kwargs will accept a varying number of keyword arguments and pack them into a dictionary

def hello1(**kwargs):
    # print("Hello" + " " + kwargs['first'] + " " + kwargs['last'])
    print("Hello", end = " ")
    for key, value in kwargs.items():
        print(value, end = " ")
    print() # adds a new line at the end, so that the next block of code that gets run doesn't end up on the same line

hello1(title = 'Mr.', first = 'Carson', middle = 'Jay', last = 'Hess')

# like args and kwargs, the important thing is to have the * and **, respectively, 
#   you can actually name them whatever you want, as long as you have * / **

# string format str.format() = optional method that gives users more control when displaying output
animal = "cow"
item = "moon"
# print("The " + animal + " jumped over the " + item)
print("The {} jumped over the {}".format(animal, item)) #string.format() where our string is the text to the left of the method
print("The {1} jumped over the {0}".format(item, animal)) # uses positional arguments instead
print("The {animal} jumped over the {item}".format(animal = "horse", item = "hurdle")) # uses keyword arguments instead
text = "The {} jumped over the {}"
# alternative way of doing it
print(text.format(animal, item))
number = 3.1415
print("The value of pi is {:.2f}".format(number)) #:.2f fixes it to two decimal points of floating point number. Note this also rounds the number

#random module
import random
x = random.randint(1, 6) 
y = round(random.random(), 2) #generates random floating point number between 0 - 1 and rounds it to two deciml places
print(x)
print(y)

my_list = ['rock', 'paper', 'scissors']
z = random.choice(my_list)
print(z)

cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
random.shuffle(cards) #shuffle method
print(cards)

# exception handling
# exception = events detected during execution that interrupt the flow of a program 
# best practice is to surround things in a "try" block for any sort of dangerous code like input
# then have an except Exception block
# note that there are a number of built in Exceptions, such as ZeroDivisionError
# when you do the as e and print e, it'll also print the specific error
#try: 
 #   numerator = int(input('Enter in a numerator'))
  #  denominator = int(input('Enter in a denominator'))
   # result = numerator / denominator
#except ZeroDivisionError as e:
 #   print('Cannot divide by zero')
  #  print(e)
#except ValueError as e: #for example, dividing by a string
   # print('Cannot divide by a string')
 #   print(e)
#except Exception as e:  
 #   print('Something went wrong')
  #  print(e)
#else: 
 #   print(result)
#finally: # always gets executed, like finally in JS
 #   print("this will always execute, whether or not we encounter an exception")

# File detection
import os #included with standard python library, but still need to import it
path_var = "/Users/carson.hess@gong.io/Documents/HTML/test.txt"
path_var1 = "/Users/carson.hess@gong.io/Desktop/Expenses"
if os.path.exists(path_var):
    print("That location exists")
    if os.path.isfile(path_var):
        print("That is a file")
else: 
    print("That location does not exist")
# isdir - is directory - ie a folder 
if os.path.isdir(path_var1):
    print("That directory exists")

# reading a file in Python. Good to wrap them as try/except in case the file can't be opened for one reason or another
try:
    with open('test.txt') as file: # if this was outside of the directory that this file is in, you'd want to list the full file path
        print(file.read())
except FileNotFoundError as e:
    print("Cannot read this file")
    print(e)

# write a file in Python. 
text = "Yooooooooooo \nThis is some text. \nHave a good one"
with open('test1.txt', 'w') as file: #by default, the open('filepath', 'mode') mode is 'r' for read, by default. Can change it to 'w' for write
    file.write(text)

# can use 'a' mode to append
text1 = "\nHere is some new text"
with open('test1.txt', 'a') as file: #note that regardless of how many times we run this file, it will not continue to append the same text over and over again. unlike flag method in node.js
    file.write(text1)

# copy files in Python
# copyfile() - copies the contents of a file
# copy() - copyfile() + permission mode + destination can be a directory
# copy2() - copy() + copies all metadata (file's creation and modification times)

import shutil # imports copyfile(), copy() and copy2()
shutil.copyfile() #scr and destination arguments