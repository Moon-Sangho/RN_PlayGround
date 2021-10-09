# RN_PlayGround

React-Native CLI와 emotion을 기반으로 UI나 기능 구현 연습을 위해 만든 레포지토리입니다.


<div>
  <image alt="screen-shot" src="https://user-images.githubusercontent.com/62928788/136643352-61cebf80-eaee-4566-88b3-4bb1b6234031.png" width=400 />
</div>

## 애플리케이션 실행

### 1. React-Native 개발환경 구축

- [맥(Mac)에 react native 개발 환경 구축하기](https://dev-yakuza.posstree.com/ko/react-native/install-on-mac/)
- [윈도우(Windows)에 react native 개발 환경 구축하기](https://dev-yakuza.posstree.com/ko/react-native/install-on-windows/)

### 2. 패키지 다운로드

```
$ yarn install
```

### 3. iOS Pod 설치

```
$ cd ios && pod install
```

### 4. 실행

#### - iOS Simulator

```
$ yarn ios
```

#### - Android Emulator

```
$ yarn android
```

### 5. 폴더구조


```
src
├── App.tsx
├── components
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   └── templates
├── contexts
├── screens
├── styles
├── types
└── utils
```

#### 1. App.tsx
컴포넌트 중 최상위 파일이자 작업의 시작점입니다.

#### 2. components

프로젝트 전역에서 재사용될 수 있는 컴포넌트들을 모아둔 폴더입니다. [아토믹 디자인](https://kciter.so/posts/effective-atomic-design)을 통해 컴포넌트 관리에 대한 고민을 해보고 싶어서 적용했습니다.

<div>
  <image alt="screen-shot" src="https://user-images.githubusercontent.com/62928788/136643970-15291df9-90d4-421f-bbe8-04bf3f92a382.png" />
</div>


- atoms : 더 이상 쪼갤 수 없는 단위에 해당하는 요소들이 모여 있는 폴더입니다.

- molecules : 여러 개의 atom이 모여 목적성이 있는 하나의 컴포넌트가 되는 요소들이 있는 폴더입니다.

- organisms : 사용자에게 의미 있는 정보를 제공하거나 인터랙션 할 수 있는 UI를 제공하는 등 서비스로서 의미를 가지는 인터페이스들이 모여 있는 폴더입니다.

- templates : 실제 콘텐츠가 입혀지기 전 UI 요소, 레이아웃, 기능이 어떻게 배치될지 정하는 와이어 프레임들이 모여 있는 폴더입니다.

#### 3. contexts

프로젝트 전역에서 상태값을 공유하기 위해 만든 폴더입니다. <br />
(ContextAPI를 도입했으며, 비밀번호 설정을 라이트하게 연습해보고자 만든 context라 보안에 대한 설정은 따로 하지 않았습니다.)

#### 4. screens

프로젝트의 실질적인 View에 관련된 컴포넌트들이 모여있는 폴더입니다. 아토믹 디자인 중 pages에 해당합니다.

#### 5. styles

프로젝트 전역에서 재사용 할 수 있는 스타일들을 모아둔 폴더입니다. 현재 color만 설정되어 있습니다. (emotion의 theme 적용)

#### 6. types

프로젝트 전역에서 import 없이 재사용할 수 있는 타입들을 모아둔 폴더입니다.

#### 7. utils

프로젝트 전역에서 재사용할 수 있는 공통 함수들을 모아둔 폴더입니다.
