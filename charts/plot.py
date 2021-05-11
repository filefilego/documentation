
import matplotlib.pyplot as plt

Year = [1,2,3,4,5,6,7,8,9,10,11]

Rate = [476348000,440870000,399479000,355131500,309305750,262740875,215806437.5,168687218.75,121475609.375,74217804.6875,26936902.34375]


plt.plot(Year, Rate)
plt.title('Coin Supply Vs Year')
plt.xlabel('Year')
plt.ylabel('Coin Supply')
plt.show()