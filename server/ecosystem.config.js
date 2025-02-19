/**
 * 配置PM2以管理Node.js应用程序的进程
 */
module.exports = {
  // 定义要由PM2管理的应用程序列表
  apps: [
    {
      // 应用程序的名称
      name: 'vue3-admin-server',
      // 要执行的脚本或命令
      script: 'npm',
      // 传递给脚本的参数
      args: 'start',
      // 实例数量，这里设置为单实例
      instances: 1,
      // 当应用程序崩溃时自动重启
      autorestart: true,
      // 是否启用文件监视以自动重启应用，这里关闭了监视模式
      watch: false,
      // 内存阈值，超过此限制时重启应用程序
      max_memory_restart: '1G',
      // 环境变量配置，适用于开发环境
      env: {
        NODE_ENV: 'development',
      },
      // 生产环境特定的环境变量配置
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
