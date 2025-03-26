// composables/useUsers.js
export function useUsers() {
  return useFetch('/api/users', {
    key: 'users-list',
    default: () => ({ items: [] }),
    server: true, // 서버에서 캐싱
    client: true, // 클라이언트에서 캐싱
    cache: true, // 캐싱 활성화
    watch: false, // 의존성 변화 감시 비활성화
    timeout: 5000, // 요청 타임아웃(ms)
    immediate: true, // 즉시 실행
  })
}
