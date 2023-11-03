import numpy as np
height=[188,192,170,167,189,200]
count=0
for i in height:
	if i>=188:
		count+=1
print(count)
print(sum([(i>=188) for i in height]))
height=np.array(height)
print((height>=188).sum())
hi=np.array([[[1,2],[3,4]],[[5,6],[7,8]]])
print(hi.shape)
print(hi)