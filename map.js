var map=new Array();
for(i=0;i<10;++i)
{
	map[i]=new Array();
	for(j=0;j<10;++j)
	{
		map[i][j]=0;
	}
}//chushihua
function changelevel(){
	if(level==1)
	{
		for(j=0;j<10;++j)
		{
			map[0][j]=3;
			map[9][j]=3;
		}

		for(i=0;i<10;++i)
		{
			map[i][0]=3;
			map[i][9]=3;
		}
		map[2][1]=map[2][3]=map[2][4]=map[2][5]=map[2][6]=map[3][6]=map[3][7]=map[4][1]=map[4][2]=map[4][4]=map[4][5]=map[4][6]
		=map[5][6]=map[6][1]=map[6][2]=map[6][3]=map[6][4]=map[6][6]=map[6][8]=map[8][4]=map[8][6]=3;//wall

		map[3][8]=map[4][3]=map[7][4]=map[7][6]=1;//door1
		map[2][2]=map[6][7]=2;//door2
		
		map[2][8]=map[3][2]=map[7][8]=map[8][7]=11;//monster
		
		map[3][1]=17;//sword
		
		map[1][5]=16;//+hp
		
		map[7][1]=map[5][2]=map[3][5]=map[5][8]=8;//key1
		map[1][8]=map[8][8]=9;//key2
		
		map[1][1]=map[7][2]=10;
	}
	else if(level==2)
	{
		hero.x=1;
		hero.y=8;
		for(j=0;j<10;++j)
		{
			map[0][j]=3;
			map[9][j]=3;
		}

		for(i=0;i<10;++i)
		{
			map[i][0]=3;
			map[i][9]=3;
		}
		
		
		
		
	}
	else if(level==3){}
	else if(level==4){}
	else if(level==5){}
}
