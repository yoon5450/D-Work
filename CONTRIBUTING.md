
* 들여쓰기는 2간 스페이스로 한다.
* 변수이름 camelCase로 한다.
* 클래스 이름은 PascalCase로 한다.
* 마침표시 ;으로 한다.
* 선언부와 실행부는 두줄씩 띄운다.
* 모듈로 함수 만들었으면 함수이름=모듈파일이름
* 모든 함수는 동사가 포함되어야한다.


## ✅ Commit 규칙 (Conventional Commits 기반)

## 1. 작업 단위 기준

- 기능 하나당 커밋 하나
- 스타일 수정, 오타 수정 등은 기능 커밋과 분리해서 커밋

---

## 2. 커밋 메시지 포맷 (Conventional Commits)

```
<타입>(옵션): 변경사항 요약
```

## 3. 커밋 메세지 예시

```
feat: 로그인 기능 추가
fix: 비밀번호 입력 버그 수정
docs: README 파일 오탈자 수정
style: 코드 포맷팅 적용 (Prettier)
refactor: 중복 코드 리팩토링
chore: eslint 설정 파일 수정
test: 유닛 테스트 추가
```

## 🚫 금지 규칙

실수 방지 및 협업을 위해 아래 명령은 금지합니다:

git add .
→ 의도치 않은 파일까지 추가됨
→ 대신 명시적으로 git add 파일명 사용

의미 없는 커밋 메시지
예: temp, test, 수정, commit 등
→ 작업 목적 파악이 어렵습니다

git push -f (force push)
→ 협업 중 이력 손상 위험
→ 꼭 필요한 경우 --force-with-lease로 제한적으로 사용

## 시작하기

다 읽으셨다면 이제 시작하시면 됩니다.

```
# 내 컴퓨터로 가져오기
git clone https://github.com/yoon5450/D-Work.git

# 브랜치 변경
git checkout -b <브랜치 이름>

# 본인 브랜치에서는 마음대로 사용하시면 됩니다.
git add .
git commit -m "feat: 헤더 컴포넌트 추가"
git push origin yoon
```