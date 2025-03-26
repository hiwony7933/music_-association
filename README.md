# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

nuxt img 사용 예시
<nuxt-img
  src="/images/hero.jpg"
  format="webp"
  width="600" 
  height="400"
  loading="lazy"
  alt="Hero image"
/>

컴포넌트 지연 로딩
무거운 컴포넌트는 필요할 때만 로드:
<template>

  <div>
    <LazyHeavyComponent v-if="showHeavyComponent" />
    <button @click="showHeavyComponent = true">Load Component</button>
  </div>
</template>

<script setup>
const showHeavyComponent = ref(false);
</script>

// 필요할 때만 모듈 로드
const { data } = await useAsyncData('someData', async () => {
const someModule = await import('~/utils/heavyModule');
return someModule.getData();
});

페이지별 메타 태그

<script setup>
useHead({
  title: '페이지 제목',
  meta: [
    { name: 'description', content: '페이지 설명' },
    { property: 'og:title', content: '소셜 미디어 제목' },
    { property: 'og:image', content: '/images/og-image.jpg' }
  ]
})
</script>

렌더링 성능 최적화
큰 리스트는 가상 스크롤링
<template>
<RecycleScroller
class="scroller"
:items="items"
:item-size="50"
key-field="id"
v-slot="{ item }"

>

    <div class="item">{{ item.name }}</div>

  </RecycleScroller>
</template>

<script setup>
const { data: users } = useUsers()
</script>

---

# Music Association Project

## 프로젝트 개요

Music Association 프로젝트는 Nuxt3 기반의 웹 애플리케이션입니다.

## 기술 스택

- **프레임워크**: Nuxt3
- **언어**: TypeScript
- **상태 관리**: Pinia
- **HTTP 클라이언트**: Axios
- **다국어 지원**: @nuxtjs/i18n
- **스타일**: SCSS

## 개발 환경 설정

### 요구 사항

- Node.js 16.x 이상
- npm 8.x 이상

### 설치 및 실행

```bash
# 종속성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션용 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

## 프로젝트 구조

```
├── assets/
│   ├── css/
│   │   └── reset.css         # CSS 리셋
│   └── scss/                 # SCSS 파일
├── components/               # Vue 컴포넌트
├── composables/              # 컴포저블 함수
├── layouts/                  # 레이아웃 템플릿
├── pages/                    # 페이지 컴포넌트 (자동 라우팅)
├── public/                   # 정적 파일
├── server/                   # 서버 API 루트
├── store/                    # Pinia 스토어
├── .eslintrc.cjs             # ESLint 설정
├── .prettierrc               # Prettier 설정
├── nuxt.config.ts            # Nuxt 설정
└── tsconfig.json             # TypeScript 설정
```

## 주요 설정

### ESLint & Prettier

코드 품질과 일관성을 위한 ESLint와 Prettier가 설정되어 있습니다.

```bash
# 코드 린팅
npm run lint

# 코드 자동 수정
npm run lint:fix
```

### SCSS 지원

SCSS를 사용하여 스타일링할 수 있도록 설정되어 있습니다.

### 다국어 지원 (i18n)

@nuxtjs/i18n을 통해 다국어를 지원합니다.

### 성능 최적화

- 이미지 최적화: @nuxt/image
- 코드 스플리팅 및 지연 로딩
- SEO 최적화를 위한 메타 태그 설정
- API 데이터 캐싱

## 개발 가이드

### 컴포넌트 개발

모든 재사용 가능한 UI 요소는 `components/` 디렉토리에 작성합니다.

### 상태 관리

Pinia를 사용하여 상태를 관리합니다. 스토어는 `store/` 디렉토리에 작성합니다.

### API 통신

Axios를 사용하여 API와 통신합니다. API 관련 설정은 `composables/useApi.ts`에서 관리합니다.

## 배포

```bash
# 프로덕션 빌드
npm run build

# 정적 사이트 생성 (선택사항)
npm run generate
```

## 라이센스

[LICENSE 정보를 추가하세요]
