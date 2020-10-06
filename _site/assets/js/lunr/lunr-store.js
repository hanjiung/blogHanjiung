var store = [{
        "title": "webhacking.kr old 01",
        "excerpt":"분석 php 코드를 분석 문제이다. PHP 코드 &lt;?php // php 파일 config include \"../../config.php\"; // 만약 view-source 요청이 들어왔을시 view_source() 함수 실행 if($_GET['view-source'] == 1){ view_source(); } // 만약 user_lv 값이 없다면 실행 if(!$_COOKIE['user_lv']){ // user_lv 값을 1로 설정한다. SetCookie(\"user_lv\",\"1\",time()+86400*30,\"/challenge/web-01/\"); // url을 명시하지 않았으니, 현재 url을 refresh 해준다. echo(\"&lt;meta http-equiv=refresh...","categories": ["webhacking.kr"],
        "tags": ["coding","php"],
        "url": "http://localhost:4000/webhacking.kr/webhacking01/",
        "teaser": null
      },{
        "title": "github.io 블로그 시작하기",
        "excerpt":"1 첫번째 흥미  GitHub Blog 서비스인 github.io 블로그 시작하기로 했다.   따라서, 흥미로운 글들을 여기다 적어볼까 합니다.   2. 두번째  흥미     마크다운 언어를 배워야할 것 같다.    3 활용도  num_list = ['one', 'two', 'three'] for num in num_list:   print(num)   이 글의 제목은 github.io 블로그 시작하기이고 마지막으로 수정된 시간은 2020-06-06 08:10:00 -2000이다.  ","categories": ["Blog"],
        "tags": ["Blog","MarkDown"],
        "url": "http://localhost:4000/blog/first-post/",
        "teaser": null
      },{
        "title": "webhacking.kr old 06",
        "excerpt":"분석 php 코드를 분석 및 암호 PHP CODE 중요한 문장만 해석 &lt;html&gt; &lt;head&gt; &lt;title&gt;Challenge 6&lt;/title&gt; &lt;style type=\"text/css\"&gt; body { background:black; color:white; font-size:10pt; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;?php // 쿠키의 user 값을 decode_id 변수에 담는다. $decode_id=$_COOKIE['user']; // 쿠키의 password 값을 decode_pw 변수에 담는다. $decode_pw=$_COOKIE['password']; // str_repace( // 1번째 인수 : 변경대상...","categories": ["webhacking.kr"],
        "tags": ["php","python","code"],
        "url": "http://localhost:4000/webhacking.kr/webhacking06/",
        "teaser": null
      },{
        "title": "BOJ 1247 부호 - PYTHON",
        "excerpt":"코드 import sys class beakjoon1247: #변수 설정 def __init__(self): self.A = 3 self.op = list() #결과값 출력 def beakjoon_1(self): for i in range(self.A): cnt = int(sys.stdin.readline()) tmp = 0 for j in range(cnt): tmp += int(sys.stdin.readline()) if tmp == 0 : self.op.append(\"0\") elif tmp &gt; 0 : self.op.append(\"+\") else: self.op.append(\"-\")...","categories": ["BOJ"],
        "tags": ["Python","coding"],
        "url": "http://localhost:4000/boj/beakjoon1247/",
        "teaser": null
      },{
        "title": "BOJ 1333 부재중전화 - PYTHON",
        "excerpt":"코드 import sys class beakjoon1333: #변수 설정 def __init__(self): self.A = list(map(int,sys.stdin.readline().split())) #결과값 출력 def beakjoon_1(self): numList = list() for i in range(self.A[0]): for j in range(self.A[1]): numList.append(False) for k in range(5): numList.append(True) cnt1 = self.A[2] cnt2 = 0 while True: #부등호 조심 = 안붙이면 런타임 오류난다. if cnt2 &gt;=...","categories": ["BOJ"],
        "tags": ["Python","coding"],
        "url": "http://localhost:4000/boj/beakjoon-1333/",
        "teaser": null
      },{
        "title": "webhacking.kr old 08 - 버프슈트를 이용한 문제풀이 ",
        "excerpt":"PHP 코드분석 &lt;?php include \"../../config.php\"; if($_GET['view_source']) view_source(); ?&gt;&lt;html&gt; &lt;head&gt; &lt;title&gt;Challenge 8&lt;/title&gt; &lt;style type=\"text/css\"&gt; body { background:black; color:white; font-size:10pt; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;br&gt;&lt;br&gt; &lt;center&gt; &lt;?php $agent=trim(getenv(\"HTTP_USER_AGENT\")); // 웹 사이트를 접속한 컴퓨터의 웹브라우저 정보 $ip=$_SERVER['REMOTE_ADDR']; // 웹 서버에 접속한 접속자의 IP정보를 $ip 변수에 입력 if(preg_match(\"/from/i\",$agent)){ // '/from/i' 문자열 검색, 매칭 성공시...","categories": ["webhacking.kr"],
        "tags": ["PHP","coding"],
        "url": "http://localhost:4000/webhacking.kr/webhacking-08/",
        "teaser": null
      },{
        "title": "BOJ 1598 꼬리를 무는 숫자 나열 - PYTHON",
        "excerpt":"코드 import sys class beakjoon1598: # 변수 설정 def __init__(self): self.A = list(map(int, sys.stdin.readline().split())) # 결과값 계산후 출력 def beakjoon_1(self): # -1을 해줘야 올바른 값이 나온다. # 왜냐하면 -1 안해주면 마지막 값이 0이 되기 때문에 의도한 값이 나오지 않는다. per1 = ((self.A[0] - 1) // 4) par1 = ((self.A[0] -1)...","categories": ["BOJ"],
        "tags": ["Python","coding"],
        "url": "http://localhost:4000/boj/beakjoon1598/",
        "teaser": null
      },{
        "title": "BOJ 1703 생장점 - PYTHON",
        "excerpt":"코드   import sys  def beakjoon1703():      while True:          A = list(map(int, sys.stdin.readline().split()))         branch = 1                  # 입력값이 0일 때에 종료되게 설정         if A[0] == 0 :             break         else:             for i in range(1, len(A), 2) :                 branch = branch * A[i] - A[i+1]          print(branch)  beakjoon1703()     문제출처   백준           읽어주셔서 감사합니다.  ","categories": ["BOJ"],
        "tags": ["Python","coding"],
        "url": "http://localhost:4000/boj/beakjoon1703/",
        "teaser": null
      },{
        "title": "webhacking.kr old 11 ",
        "excerpt":"처음 문제에 들어가면 소스코드를 해석하는 문제라는 것을 확인할 수 있다. PHP 코드 분석 &lt;?php include \"../../config.php\"; if($_GET['view_source']) view_source(); ?&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;Challenge 11&lt;/title&gt; &lt;style type=\"text/css\"&gt; body { background:black; color:white; font-size:10pt; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;center&gt; &lt;br&gt;&lt;br&gt; &lt;?php // $_SERVER[REMOTE_ADDR] 서버의 접속한 접속자의 IP // [1-3] 1~3 중 하나의 문자, [a-f]{5}...","categories": ["webhacking.kr"],
        "tags": ["webhacking.kr","coding"],
        "url": "http://localhost:4000/webhacking.kr/webhacking11/",
        "teaser": null
      },{
        "title": "webhacking.kr old 18 ",
        "excerpt":"처음 소스코드 분석해 sqli를 진행하는 것을 확인할 수 있다. PHP 코드 분석 &lt;?php include \"../../config.php\"; if($_GET['view_source']) view_source(); ?&gt;&lt;html&gt; &lt;head&gt; &lt;title&gt;Challenge 18&lt;/title&gt; &lt;style type=\"text/css\"&gt; body { background:black; color:white; font-size:10pt; } input { background:silver; } a { color:lightgreen; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;br&gt;&lt;br&gt; &lt;center&gt;&lt;h1&gt;SQL INJECTION&lt;/h1&gt; &lt;form method=get action=index.php&gt; &lt;table border=0 align=center cellpadding=10...","categories": ["webhacking.kr"],
        "tags": ["webhacking.kr","coding"],
        "url": "http://localhost:4000/webhacking.kr/webhacking18/",
        "teaser": null
      },{
        "title": "webhacking.kr old 20",
        "excerpt":"처음 2초안에 id, cmt, captcha를 전송해야 한다. 이번 문제는 파이썬 프로그래밍으로 풀 수 있었던 문제였다. 다른 분들이 푸는 방법도 구글링해서 찾아봤는데 다른 방법도 존재하는 것 같다. 이번 풀이에서는 파이썬 코딩으로 문제를 풀겠다. html 코드 &lt;html&gt; &lt;head&gt; &lt;title&gt;Challenge 20&lt;/title&gt; &lt;style type=\"text/css\"&gt; body { background:black; color:white; font-size:10pt; } input { background:silver; color:black;...","categories": ["webhacking.kr"],
        "tags": ["webhacking.kr","coding"],
        "url": "http://localhost:4000/webhacking.kr/webhacking20/",
        "teaser": null
      },{
        "title": "webhacking.kr old 24 ",
        "excerpt":"분석 문제에 들어가면 소스코드를 해석하는 문제라는 것을 확인할 수 있다. PHP 코드 분석 &lt;?php // extract는 배열을 일반 변수로 변환한다. extract($_SERVER); // extract는 배열을 빈반 변수로 변환한다. extract($_COOKIE); // REMOTE_ADDR로 IP를 받아와 ip변수로 넘긴다. $ip = $REMOTE_ADDR; // HTTP_USER_AGENT 값을 agent 변수로 설정한다. $agent = $HTTP_USER_AGENT; // REMOTE_ADDR 값이 존재한다면...","categories": ["webhacking.kr"],
        "tags": ["webhacking.kr","coding"],
        "url": "http://localhost:4000/webhacking.kr/webhacking24/",
        "teaser": null
      },{
        "title": "BOJ 16204 카드 뽑기 - PYTHON",
        "excerpt":"코드 속도 64 ms import sys class beakjoon16204: def __init__(self): self.A = list(map(int, sys.stdin.readline().split())) def beakjoon_1(self): O = self.A[2] X = self.A[0] - self.A[2] ans = 0 if self.A[1] &lt; O : ans += self.A[1] else: ans += O if self.A[0] - self.A[1] &lt; X: ans += (self.A[0] - self.A[1])...","categories": ["BOJ"],
        "tags": ["Python","coding"],
        "url": "http://localhost:4000/boj/beakjoon16204/",
        "teaser": null
      },{
        "title": "BOJ 1964 오각형, 오각형, 오각형 - PYTHON",
        "excerpt":"리스트 활용한 풀이 속도 2000 ms import sys class beakjoon1964: def __init__(self): self.A = int(sys.stdin.readline()) self.B = list() def beakjoon_1(self): G = 2 for i in range(self.A): self.B.append(G) G += 3 if self.A == 1: print(5) else: ans = self.A * 5 + sum(self.B[:self.A-1]) print(ans % 45678) K = beakjoon1964()...","categories": ["BOJ"],
        "tags": ["python","coding"],
        "url": "http://localhost:4000/boj/beakjoon1964/",
        "teaser": null
      },{
        "title": "BOJ 2445 별 찍기 (8) - PYTHON",
        "excerpt":"코드 import sys def beakjoon(): A = int(sys.stdin.readline()) for i in range(A): print(\"*\" * (i+1) + \" \" * (((A-1) - i) * 2) + \"*\" * (i+1)) A -= 1 for i in range(A): print(\"*\" * (A - i) + \" \" * ((i+1) * 2) + \"*\" *...","categories": ["BOJ"],
        "tags": ["Python","coding"],
        "url": "http://localhost:4000/boj/beakjoon2445/",
        "teaser": null
      },{
        "title": "BOJ 2010 플러그 - PYTHON",
        "excerpt":"코드   import sys  class beakjoon2010:      def __init__(self):          self.A = int(sys.stdin.readline())         self.B = sum([ int(sys.stdin.readline()) for _ in range(self.A)]) + 1      def beakjoon_1(self):          print(self.B - self.A)  K = beakjoon2010()  K.beakjoon_1()     문제출처   백준           읽어주셔서 감사합니다.  ","categories": ["BOJ"],
        "tags": ["Python","coding"],
        "url": "http://localhost:4000/boj/beakjoon2010/",
        "teaser": null
      },{
        "title": "webhacking.kr old 42",
        "excerpt":"첫페이지 분석 &lt;html&gt; &lt;head&gt; // title &lt;title&gt;Challenge 42&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;table border=1 align=center width=300&gt; &lt;tr&gt;&lt;td width=50&gt;no&lt;/td&gt;&lt;td&gt;subject&lt;/td&gt;&lt;td&gt;file&lt;/td&gt;&lt;/tr&gt; // down= 다음으로 dGVzdC50eHQ= 이라는 문자열이 있다. // 끝에 = 붙은 것으로 보아서, base64 인코딩된 것으로 추측된다. &lt;tr&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;test&lt;/td&gt;&lt;td&gt;test.txt [&lt;a href=?down=dGVzdC50eHQ=&gt;download&lt;/a&gt;]&lt;/tr&gt; // flag.docx 링크를 누르면 Access Denied 경고창이 나온다. &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;read me&lt;/td&gt;&lt;td&gt;flag.docx [&lt;a href=javascript:alert(\"Access%20Denied\")&gt;download&lt;/a&gt;]&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt; &lt;/body&gt;...","categories": ["webhacking.kr"],
        "tags": ["webhacking","python"],
        "url": "http://localhost:4000/webhacking.kr/webhacking42/",
        "teaser": null
      },{
        "title": "BOJ 2566 최대값 - PYTHON",
        "excerpt":"CODE   import sys  def boj2556():      cnt = 1     i = 0     m = 0      for i in range(9):         A = list(map(int, sys.stdin.readline().split()))          if max(A) &gt; m :             index = A.index(max(A))             m = max(A)             x = cnt          cnt += 1       print(m)     print(x, index + 1)  boj2556()      ","categories": ["BOJ"],
        "tags": ["BOJ","python"],
        "url": "http://localhost:4000/boj/beakjoon2566/",
        "teaser": null
      },{
        "title": "BOJ 2547 사탕 선생 고창영 - PYTHON",
        "excerpt":"CODE   import sys  class boj2547:          def __init__(self):          self.A = int(sys.stdin.readline())       def bojf1(self):           for i in range(self.A):              B = input()             h = int(sys.stdin.readline())             ch = 0              for i in range(h):                  ch += int(sys.stdin.readline())              if ch % h == 0:                 print(\"YES\")             else:                 print(\"NO\")   K = boj2547() K.bojf1()    ","categories": ["BOJ"],
        "tags": ["BOJ","PYTHON"],
        "url": "http://localhost:4000/boj/boj2547/",
        "teaser": null
      },{
        "title": "webhacking.kr old 36",
        "excerpt":"분석 While editing index.php file using vi editor in the current directory, a power outage caused the source code to disappear. Please help me recover. vi 에디터를 쓰다가 소스가 사라졌다고 한다. 보통 vi를 쓰시는 분이라면 금방 풀리는 문제다. 소스코드를 쓰다가 날리면 swp파일이 생성된다. 주소/.index.php.swp 적어주면 파일이 다운로드 된다. vi으로 열어보니...","categories": ["webhacking.kr"],
        "tags": ["reasoning"],
        "url": "http://localhost:4000/webhacking.kr/webhacking36/",
        "teaser": null
      },{
        "title": "BOJ 2754 학점계산 - PYTHON",
        "excerpt":"PYTHON CODE   class boj2754:      def __init__(self):          self.A = {              \"A+\": 4.3,             \"A0\": 4.0,             \"A-\": 3.7,              \"B+\": 3.3,             \"B0\": 3.0,             \"B-\": 2.7,              \"C+\": 2.3,             \"C0\": 2.0,             \"C-\": 1.7,              \"D+\": 1.3,             \"D0\": 1.0,             \"D-\": 0.7,              \"F\" : 0.0         }          self.B = input()      def bojf(self):          print(self.A[self.B])     K = boj2754() K.bojf()   출처  백준  ","categories": ["BOJ"],
        "tags": ["PYTHON","BOJ"],
        "url": "http://localhost:4000/boj/boj2754/",
        "teaser": null
      },{
        "title": "webhacking.kr 목차",
        "excerpt":"미완성 현재 완성 목록 사진 링크 문제 주소 풀이 1 https://webhacking.kr/old.php 1번 풀이 2     3     4     5     6     7     8     9     10     11     12     13     14...","categories": ["webhacking.kr"],
        "tags": ["webhacking.kr","목차"],
        "url": "http://localhost:4000/webhacking.kr/webContent/",
        "teaser": null
      },{
        "title": "BOJ 2511 카드놀이 - PYTHON",
        "excerpt":"PYTHON CODE import sys class boj2511: def __init__(self): self.A = list(map(int, sys.stdin.readline().split())) self.B = list(map(int, sys.stdin.readline().split())) # 비기는 경우를 주의해야한다. def bojf(self): aScore = 0 bScore = 0 same = '' for i in range(10): if self.A[i] &gt; self.B[i] : aScore += 3 same = 'A' elif self.A[i] &lt; self.B[i]...","categories": ["BOJ"],
        "tags": ["PYTHON","BOJ"],
        "url": "http://localhost:4000/boj/boj2511/",
        "teaser": null
      },{
        "title": "BOJ 2570 세탁소 사장 동혁 - PYTHON ",
        "excerpt":"PYTHON CODE ''' 25 10 5 1 ''' import sys class boj2720: def __init__(self): self.A = int(sys.stdin.readline()) self.M = [25,10,5,1] def bojf(self): for i in range(self.A): money = int(sys.stdin.readline()) a1 = money // self.M[0] a2 = money % self.M[0] // self.M[1] a3 = money % self.M[0] % self.M[1] // self.M[2]...","categories": ["BOJ"],
        "tags": ["BOJ","PYTHON"],
        "url": "http://localhost:4000/boj/boj2570/",
        "teaser": null
      },{
        "title": "BOJ 2903 중앙 이동 알고리즘 - PYTHON",
        "excerpt":"PYTHON 코드 import sys class boj2903: def __init__(self): self.A = int(sys.stdin.readline()) # 가로와 세로의 점의 개수는 같다. # 한변의 개수는 전 단계의 개수 * 2 - 1 이다. def bojf(self): numList = list() numList = [2] for i in range(self.A + 1): numList.append(numList[i] * 2 - 1) print(numList[self.A] * numList[self.A])...","categories": ["BOJ"],
        "tags": ["BOJ","PYTHON"],
        "url": "http://localhost:4000/boj/boj2903/",
        "teaser": null
      },{
        "title": "BOJ2935 소음 - PYTHON",
        "excerpt":"PYTHON CODE    class boj2935:      def __init__(self):         self.A = list()          for i in range(3):              self.A.append(input())      def bojf(self):          if self.A[1] == \"+\":              print(int(self.A[0]) + int(self.A[2]))         else:             print(int(self.A[0]) * int(self.A[2]))  A = boj2935() A.bojf()    문제출처   BOJ   ","categories": ["BOJ"],
        "tags": ["BOJ","PYTHON"],
        "url": "http://localhost:4000/boj/boj2935/",
        "teaser": null
      },{
        "title": "BOJ2991 사나운 개 - PYTHON",
        "excerpt":"PYTHON CODE import sys class boj2991: def __init__(self): self.A = list(map(int, sys.stdin.readline().split())) self.B = list(map(int, sys.stdin.readline().split())) # 0이 되는 경우는 불포함하기 때문에 주의한다. def bojf(self): for i in range(len(self.B)): cnt = 0 for j in range(0, len(self.A), 2): if (self.B[i] % (self.A[j] + self.A[j+1])) == 0: continue if(self.B[i] % (self.A[j]...","categories": ["BOJ"],
        "tags": ["PYTHON","BOJ"],
        "url": "http://localhost:4000/boj/boj2935/",
        "teaser": null
      },{
        "title": "BOJ3028 창영마을 - PYTHON",
        "excerpt":"PYTHON CODE class boj3028: def __init__(self): self.cycle = list(input()) # tmp 변수를 이용해서 위치를 변경했다. # ball[0], ball[1] = ball[1], ball[0] 으로 변경하는 방법도 있다. def bojf(self): ball = [1,0,0] tmp = 0 for i in self.cycle: if i == \"A\" : tmp = ball[0] ball[0] = ball[1] ball[1] =...","categories": ["BOJ"],
        "tags": ["PYTHON","BOJ"],
        "url": "http://localhost:4000/boj/boj3028/",
        "teaser": null
      },{
        "title": "BOJ4010 크냐? - PYTHON",
        "excerpt":"PYTHON CODE   import sys  class boj4101:      def bojf(self):          while True :              A = list(map(int, sys.stdin.readline().split()))              if A[0] == 0 &amp; A[1] == 0:                 break              elif A[0] &gt; A[1] :                  print('YES')             else:                 print('NO')    K = boj4101() K.bojf()   문제출처  BOJ   감사합니다.   ","categories": ["BOJ"],
        "tags": ["python","boj"],
        "url": "http://localhost:4000/boj/boj4010/",
        "teaser": null
      },{
        "title": "BOJ4619 맞은 사람 - PYTHON",
        "excerpt":"PYTHON CODE import sys def boj4619(): while True: cnt = 1 ans = list() A, B = map(int, sys.stdin.readline().split()) ans.append(cnt ** B - A) if A == 0 &amp; B == 0: break while True: cnt += 1 tmp = cnt ** B - A if abs(ans[-1]) &lt;= abs(tmp) :...","categories": ["BOJ"],
        "tags": ["boj","python"],
        "url": "http://localhost:4000/boj/boj4619/",
        "teaser": null
      },{
        "title": "BOJ3029 경고 - PYTHON",
        "excerpt":"PYTHON CODE import sys class boj3029: def __init__(self): self.A = list(map(int,sys.stdin.readline().split(':'))) self.B = list(map(int,sys.stdin.readline().split(':'))) def boj3029(self): timeA = self.A[0] * 60 * 60 + self.A[1] * 60 + self.A[2] timeB = self.B[0] * 60 * 60 + self.B[1] * 60 + self.B[2] time24 = 24 * 60 * 60 #...","categories": ["BOJ"],
        "tags": ["python","boj"],
        "url": "http://localhost:4000/boj/boj3029/",
        "teaser": null
      },{
        "title": "BOJ5073 삼각형과 세 변 - PYTHON",
        "excerpt":"PYTHON CODE import sys def boj5073(): while True : N = 0 treeLength = list(map(int, sys.stdin.readline().split())) treeLength.sort() if treeLength[0] == 0 and treeLength[1] == 0 and treeLength[2] == 0: break if treeLength[2] &lt; treeLength[0] + treeLength[1]: for i in treeLength: N = max(N, treeLength.count(i)) if N == 1 : print('Scalene')...","categories": ["BOJ"],
        "tags": ["python","boj"],
        "url": "http://localhost:4000/boj/boj5073/",
        "teaser": null
      },{
        "title": "BOJ5217 쌍의 합 - PYTHON",
        "excerpt":"PYTHON CODE import sys class boj5043: def __init__(self): self.s = int(sys.stdin.readline()) def bojf(self): for i in range(self.s): N = int(sys.stdin.readline()) op = f\"Pairs for {N}: \" op = f'Pairs for {N}: ' for j in range(1, N//2+1): for k in range(N//2 + 1, N + 1): if j + k...","categories": ["BOJ"],
        "tags": ["boj","python"],
        "url": "http://localhost:4000/boj/boj5217/",
        "teaser": null
      },{
        "title": "BOJ3034 앵그리 창영 - PYTHON",
        "excerpt":"PYTHON CODE import sys class boj3034: def __init__(self): self.boxSize = list(map(int, sys.stdin.readline().split())) def bojf(self): #박스에 들어갈 수 있는 크기인지 묻는 문제이다. #대각선 길이가 가장 크므로, 변의 길이를 알려주고 있어서 피타고라스 공식을 이용 #대각선의 길이와 성냥의 길이를 비교한다. for i in range(self.boxSize[0]): if int(sys.stdin.readline()) &gt; (((self.boxSize[1]**2) + (self.boxSize[2]**2))** 0.5): print('NE') else:...","categories": ["BOJ"],
        "tags": ["boj","python"],
        "url": "http://localhost:4000/boj/boj3034/",
        "teaser": null
      },{
        "title": "vimrc Plug 공유",
        "excerpt":"Plug-Manager 설치 가이드에 따라서 설치해줘야 한다. vim-plug 설치 주의 명령어 vim ~/.vimrc 주피터는 Plug 실패했다. 추후 수정해서 올리겠습니다. .vimrc 코드 \"- For Neovim: stdpath('data') . '/plugged' \" - Avoid using standard Vim directory names like 'plugin' call plug#begin('~/.vim/plugged') \" Make sure you use single quotes set hlsearch set backspace=indent,eol,start set...","categories": [],
        "tags": ["vim","plug"],
        "url": "http://localhost:4000/vimrc/",
        "teaser": null
      }]
