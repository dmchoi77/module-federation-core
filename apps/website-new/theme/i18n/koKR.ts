import { EN_US } from './enUS';

export const KO_KR: Record<keyof typeof EN_US, string> = {
  Configuration: '설정',
  coldStart: '콜드 스타트',
  coldBuild: '콜드 빌드',
  hmrRoot: 'HMR(루트 변경)',
  hmrLeaf: 'HMR(리프 변경)',
  moduleCount: '모듈 수',
  guide: '가이드',
  quickStart: '빠른 시작',
  features: '기능',
  compatibility: '호환성',
  migration: '마이그레이션',
  cli: 'CLI',
  friendLink: '생태계',
  community: '커뮤니티',
  benchmarkTitle: '빌드 성능',
  benchmarkDesc:
    'TypeScript와 Rust, 병렬화된 아키텍처를 결합해 뛰어난 개발자 경험을 제공합니다.',
  benchmarkDetail: '벤치마크 자세히 보기',
  announcementVideo:
    'https://module-federation-assest.netlify.app/document/announcement/blog/announcement/announcement-video.mp4',
  announcementVideoPoster:
    'https://module-federation-assest.netlify.app/document/announcement/blog/announcement/announcement-video-poster.png',
};
