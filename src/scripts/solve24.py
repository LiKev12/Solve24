from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import numpy as np
import csv
import pandas as pd
import pyperclip
import sys
import json

import plotly
# plotly.tools.set_credentials_file(username='LiKevin12', api_key='kiVsTvzqaindbLbzGHmc')
import plotly.plotly as py
import plotly.graph_objs as go

from itertools import permutations
from itertools import product

import matplotlib
from matplotlib import cm
import numpy as np


argNum = int(str(sys.argv[1]))

def initializeSolve(nums):
  nums = [float(i) for i in nums]
  ops = '+-·/'
  orders = [1,2,3]
  solveGame(nums,ops,orders)

def helperEvaluate(n1,op,n2):
  if op == '+':
    return n1 + n2;
  elif op == '-':
    return n1 - n2;
  elif op == '/':
    if n2 == 0:
      return -90000
    else:
      return n1 / n2
  else:
    return n1 * n2

def solveGame(nums,ops,orders):
  permNums = list(permutations(nums))      # 24 possible
  combOps = list(product(ops,repeat=3))    # 64 possible
  permOrder = list(permutations(orders))   # 6 possible

  for i in range(len(list(permNums))):
    for j in range(len(list(combOps))):
      for k in range(len(list(permOrder))):
        numList = list(permNums[i])
        opList = list(combOps[j])
        orderList = list(permOrder[k])

        numListCopy = list(permNums[i])
        opListCopy = list(combOps[j])
        orderListCopy = list(permOrder[k])
      
        # evaluates first set of operations
        first = helperEvaluate(numList[orderList[0]-1],opList[orderList[0]-1],numList[orderList[0]])

        numList[orderList[0]-1] = first
        numList[orderList[0]] = first
      
        # evaluates second set of operations
        second = helperEvaluate(numList[orderList[1]-1], opList[orderList[1]-1], numList[orderList[1]])

        numList[orderList[1]-1] = second
        numList[orderList[1]] = second
        numList[orderList[0]-1] = second
        numList[orderList[0]] = second

        if orderList[2]==2:
          numList[1] = first
          numList[2] = second

        # evaluates third set of operations (final answer)
        third = helperEvaluate(numList[orderList[2]-1], opList[orderList[2]-1], numList[orderList[2]])

        if third==24:
        #   print(orderListCopy, type(orderListCopy))
          if (orderListCopy == [1,2,3]):
            ansText = '(((' + str(int(numListCopy[0])) + ' ' + str(opListCopy[0]) + ' ' + str(int(numListCopy[1])) + ') ' + str(opListCopy[1]) + ' ' + str(int(numListCopy[2])) + ') ' + str(opListCopy[2]) + ' ' + str(int(numListCopy[3])) + ')' 
          elif (orderListCopy == [1,3,2]):
            ansText = '((' + str(int(numListCopy[0])) + ' ' + str(opListCopy[0]) + ' ' + str(int(numListCopy[1])) + ') ' + str(opListCopy[1]) + ' (' + str(int(numListCopy[2])) + ' ' + str(opListCopy[2]) + ' ' + str(int(numListCopy[3])) + '))' 
          elif (orderListCopy == [2,1,3]):
            ansText = '((' + str(int(numListCopy[0])) + ' ' + str(opListCopy[0]) + ' (' + str(int(numListCopy[1])) + ' ' + str(opListCopy[1]) + ' ' + str(int(numListCopy[2])) + ')) ' + str(opListCopy[2]) + ' ' + str(int(numListCopy[3])) + ')' 
          elif (orderListCopy == [2,3,1]):
            ansText = '(' + str(int(numListCopy[0])) + ' ' + str(opListCopy[0]) + ' ((' + str(int(numListCopy[1])) + ' ' + str(opListCopy[1]) + ' ' + str(int(numListCopy[2])) + ') ' + str(opListCopy[2]) + ' ' + str(int(numListCopy[3])) + '))' 
          elif (orderListCopy == [3,1,2]):
            ansText = '((' + str(int(numListCopy[0])) + ' ' + str(opListCopy[0]) + ' ' + str(int(numListCopy[1])) + ') ' + str(opListCopy[1]) + ' (' + str(int(numListCopy[2])) + ' ' + str(opListCopy[2]) + ' ' + str(int(numListCopy[3])) + '))' 
          else:
            ansText = '(' + str(int(numListCopy[0])) + ' ' + str(opListCopy[0]) + ' (' + str(int(numListCopy[1])) + ' ' + str(opListCopy[1]) + ' (' + str(int(numListCopy[2])) + ' ' + str(opListCopy[2]) + ' ' + str(int(numListCopy[3])) + ')))'

        #   print(ansText)
          record[tuple(numListCopy)] += 1
          if (ansList[tuple(numListCopy)] == ' '):
            ansList[tuple(numListCopy)] = ansText
        


def getAnswer(limit):
  allNums = [0]*limit
  for i in range(limit):
    allNums[i] = i+1
  combNums = list(product(allNums,repeat=4))

  # initializes record with all combination values at 0
  for nums in list(combNums):
    record.update({ nums : 0})
    ansList.update({nums : ' '})

  # solves for each combination
  for nums in list(combNums):
    initializeSolve(nums)

  # resolves for duplicates in record
  for i in record:
    record[i] = float(record[i]/24)

# Transfers answer into list format
def getData1(limit):
  x1, x2, x3, x4 = ([0]*(limit+1) for i in range(4))
  getAnswer(limit)
  for key, value in record.items(): 
    x1[list(key)[0]] += value
    x2[list(key)[1]] += value
    x3[list(key)[2]] += value
    x4[list(key)[3]] += value    

# Gets PyPlot Graph
def getPyPlot(a,b,c,d,n):
      # https://stackoverflow.com/questions/41215272/z-axis-scaling-and-limits-in-a-3-d-scatter-plot-in-matplotlib
  # https://matplotlib.org/3.1.0/api/_as_gen/mpl_toolkits.mplot3d.axes3d.Axes3D.html (more help for axis labels)
  fig = plt.figure()
  ax = Axes3D(fig)

  # https://matplotlib.org/tutorials/colors/colormaps.html
  img = ax.scatter(a, b, c, c=n, cmap='coolwarm', s=n*10)
  fig.colorbar(img)

  ax.set_xlabel('x')
  ax.set_ylabel('y')
  ax.set_zlabel('z')

  plt.show()


# Helper function to convert matplotlib colorscale to plotly colorscale
def matplotlib_to_plotly(cmap, pl_entries):
    h = 1.0/(pl_entries-1)
    pl_colorscale = []

    for k in range(pl_entries):
        C = list(map(np.uint8, np.array(cmap(k*h)[:3])*255))
        pl_colorscale.append([k*h, 'rgb'+str((C[0], C[1], C[2]))])

    return pl_colorscale

# Gets Plotly plot
def getPlotly(a,b,c,d,n,limit,cutoff,sect):
  fromMPL_cmap = matplotlib.cm.get_cmap('Spectral_r')

  fromMPL_rgb = []
  norm = matplotlib.colors.Normalize(vmin=0, vmax=255)

  for i in range(0, 255):
    k = matplotlib.colors.colorConverter.to_rgb(fromMPL_cmap(norm(i)))
    fromMPL_rgb.append(k)
  fromMPL = matplotlib_to_plotly(fromMPL_cmap, 255)
#   fromMPL = list(map(int,fromMPL))
  trace1 = go.Scatter3d(
    x=a,
    y=b,
    z=c,
    mode='markers',
    marker=dict(
        size=n*1.5,
        color=n,                # set color to an array/list of desired values
        colorscale=fromMPL,   # choose a colorscale
        opacity=0.4,
        colorbar = dict(
          thickness=20,
          title='<b>Number of Solutions</b>')
    )
  )
  data = [trace1]
  titleText = 'Viewing 24Solver with Range = ' + '<b>' + str(limit) + '</b>' + ', Cutoff = ' + '<b>' + str(cutoff) + '</b>' + ' and d = ' + '<b>' + str(sect) + '</b>'
#   titleText = 'Viewing 24Solve with Range = ' + '<b>' + str(limit) + '</b>' + ' and d = ' + '<b>' + str(sect) + '</b>'
#   titleText = 'Top 100 Inputs with the Most Solutions'
  layout = go.Layout(
    font=dict(
      family='Courier New, monospace',
      size=16,
      color='#7f7f7f'
    ),
    title=go.layout.Title(
      text=titleText
    ),
    scene = dict(
        xaxis = dict(title='<b>a</b>'),
        yaxis = dict(title='<b>b</b>'),
        zaxis = dict(title='<b>c</b>')
    ),
    hovermode='closest',
        autosize=False,
    width=1000,
    height=600,
  )
#   layout = go.Layout(
#     legend=dict(
#     orientation="h")
#   )
  fig = go.Figure(data=data, layout=layout)
  fig = dict(data= data, layout=layout)
#   plotly.offline.plot(fig, filename='name.html')
  py.plot(fig, filename='3d-scatter-color')
#   strJson = json.dumps(fig)
  divGraph = plotly.offline.plot(data, include_plotlyjs=False, output_type='div')
#   print(plotly.offline.plot(data, include_plotlyjs=False, output_type='div'))
  pyperclip.copy(divGraph)

# gets the CSV file 
def getCSV(a,b,c,d,n,nameFile):
  with open(nameFile, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',', quoting=csv.QUOTE_NONNUMERIC)
    for i in range(len(a)):
      writer.writerow([a[i], b[i], c[i], d[i], n[i]])

  with open(nameFile) as file:
    reader = csv.reader(file)
    for row in reader:
      row = [float(i) for i in row]

def getChart(limit,cutoff,sect):
  c1, c2, c3, c4, z = ([] for i in range(5))
  getAnswer(limit)
  i = 0
  for key, value in record.items():
    c1.append(key[0])
    c2.append(key[1])
    c3.append(key[2])
    c4.append(key[3])
    z.append(value)

  # output raw before introducing fixes
  with open('others.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',', quoting=csv.QUOTE_NONNUMERIC)
    for i in range(len(c1)):
      writer.writerow([c1[i], c2[i], c3[i], c4[i], z[i]])

#   removes combinations with minimal solutions
  arrToRemove = [];
  for i in range(len(z)):
    if z[i] < cutoff:    
      arrToRemove.append(i)

  for i in arrToRemove[::-1]:
    c1.pop(i)
    c2.pop(i)
    c3.pop(i)
    c4.pop(i)
    z.pop(i)

# defines cross section (dictates which value for c4)
  lenAdjust = len(c4)-1;
  for index,val in enumerate(c4[::-1]):
    if val != sect:
      c1.pop(lenAdjust-index)
      c2.pop(lenAdjust-index)
      c3.pop(lenAdjust-index)
      c4.pop(lenAdjust-index)
      z.pop(lenAdjust-index)

  a = np.asarray(c1)
  b = np.asarray(c2)
  c = np.asarray(c3)
  d = np.asarray(c4)
  n = np.asarray(z)

  nameFile = str(limit) + str(cutoff) + str(sect) + '.csv'

#   getCSV(a,b,c,d,n,nameFile)
  getPlotly(a,b,c,d,n, limit, cutoff, sect)
#   getPyPlot(a,b,c,d,n)


ansList = {}
record = {}
# d1, d2, d3, d4, f = ([] for i in range(5))
getChart(3,0,2)


def solveMax(limit, cutoff, sect):
  c1, c2, c3, c4, z = ([] for i in range(5))
  with open('all20.csv') as file:
    reader = csv.reader(file)
    for row in reader:
      row = [float(i) for i in row]

      c1.append(row[0])
      c2.append(row[1])
      c3.append(row[2])
      c4.append(row[3])
      z.append(row[4])

  #   removes combinations with minimal solutions
  arrToRemove = [];
  for i in range(len(z)):
    if z[i] < cutoff:    
      arrToRemove.append(i)

  for i in arrToRemove[::-1]:
    c1.pop(i)
    c2.pop(i)
    c3.pop(i)
    c4.pop(i)
    z.pop(i)

# defines cross section (dictates which value for c4)
  lenAdjust = len(c4)-1;
  for index,val in enumerate(c4[::-1]):
    if val != sect:
      c1.pop(lenAdjust-index)
      c2.pop(lenAdjust-index)
      c3.pop(lenAdjust-index)
      c4.pop(lenAdjust-index)
      z.pop(lenAdjust-index)

  a = np.asarray(c1)
  b = np.asarray(c2)
  c = np.asarray(c3)
  d = np.asarray(c4)
  n = np.asarray(z)

  getPlotly(a,b,c,d,n,limit,cutoff,sect)

# gets the top 100 highest occurring solutions
def getTop100(limit, cutoff, sect):
  c1, c2, c3, c4, z = ([] for i in range(5))
  with open('all20.csv') as file:
    reader = csv.reader(file)
    for row in reader:
      row = [float(i) for i in row]

      c1.append(row[0])
      c2.append(row[1])
      c3.append(row[2])
      c4.append(row[3])
      z.append(row[4])
  
  c1 = np.asarray(c1)
  c2 = np.asarray(c2)
  c3 = np.asarray(c3)
  c4 = np.asarray(c4)
  z = np.asarray(z)

  zsort = np.argsort(z)
  zinv=zsort[::-1]

  topc1, topc2, topc3, topc4, topz = ([] for i in range(5))
  for i in range(0,99):
    topc1.append(c1[zinv[i]])
    topc2.append(c2[zinv[i]])
    topc3.append(c3[zinv[i]])
    topc4.append(c4[zinv[i]])
    topz.append(z[zinv[i]])

  # output raw before introducing fixes
  with open('testTop100raw.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',', quoting=csv.QUOTE_NONNUMERIC)
    for i in range(len(topc1)):
      writer.writerow([topc1[i], topc2[i], topc3[i], topc4[i], topz[i]])

  
  
  # defines cross section (dictates which value for c4)
  lenAdjust = len(topc4)-1;
  for index,val in enumerate(topc4[::-1]):
    if val != sect:
      topc1.pop(lenAdjust-index)
      topc2.pop(lenAdjust-index)
      topc3.pop(lenAdjust-index)
      topc4.pop(lenAdjust-index)
      topz.pop(lenAdjust-index)

  a = np.asarray(topc1)
  b = np.asarray(topc2)
  c = np.asarray(topc3)
  d = np.asarray(topc4)
  n = np.asarray(topz)

  getPlotly(a,b,c,d,n, limit, cutoff, sect)


  
# solveMax(20, 10, argNum)

# getTop100(20, 0, argNum)

# pyperclip.copy("hi there this is text")
  

# for key, value in ansList.items(): 
#     print(key, ":", value) 

  # output raw before introducing fixes
for key, value in ansList.items(): 
  print(key," : ", value)

with open('solverPlayground.csv', 'w', newline='') as csvfile:
  writer = csv.writer(csvfile, delimiter=',', quotechar = '"', quoting = csv.QUOTE_ALL)
  for key, value in ansList.items(): 
    writer.writerow([list(key), int(record.get(key)), value])
