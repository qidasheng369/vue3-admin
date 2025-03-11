<script setup lang="tsx">
defineOptions({
  name: 'GlobalFooter',
});
</script>

<template>
  <DarkModeContainer class="h-full flex-center">
    <ASpace direction="vertical" align="center" :size="0">
      <ASpace>
        <a href="https://github.com/qidasheng369/react-admin" target="_blank" rel="noopener noreferrer">React Admin</a>
        <a href="https://github.com/qidasheng369/vue3-admin" target="_blank" rel="noopener noreferrer">
          <SvgIcon icon="ri:github-fill" class="text-base" />
        </a>
        <a href="https://github.com/qidasheng369/next-admin" target="_blank" rel="noopener noreferrer">Next Admin</a>
      </ASpace>
      <ASpace>
        Copyright MIT ©
        <a href="https://xworker.icu" target="_blank" rel="noopener noreferrer">齐大胜～</a>
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">豫ICP备2022024624号</a>
      </ASpace>
    </ASpace>
  </DarkModeContainer>
</template>

<style scoped></style>
