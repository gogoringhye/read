# useEffect - 폴더 src 4 참조하기

# useEffect(()=>{},[])

# useEffect(()=>{},[]) ==> 배열이 비어있을 경우에는 component가 실행될 때 처음 한번만 실행된다.
![image](https://github.com/gogoringhye/read/assets/145514996/438e97cf-7ad3-410c-8314-6925001a15d7)

# useEffect(()=>{},[products]) ==> component가 실행될 때 처음 한번 실행된 후 products 값이 바뀔때마다 useEffect가 실행됨
![image](https://github.com/gogoringhye/read/assets/145514996/c4dbe176-1d92-4e13-9b14-91da8a9a754d)

# useEffect(()=>{},[products, count]) ==> component가 실행될 때 처음 한번 실행된 후 products와 count 중에 하나라도 값이 바뀌면 useEffect가 실행됨(2개 다 바뀌어도 한번만 실행됨)
![image](https://github.com/gogoringhye/read/assets/145514996/c4dbe176-1d92-4e13-9b14-91da8a9a754d)

# useEffect()가 종료되는 시점에 데이터가 변경된다.
![image](https://github.com/gogoringhye/read/assets/145514996/19c4c8bd-4838-4fe3-9048-c638d2283003)
