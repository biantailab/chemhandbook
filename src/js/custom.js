// 创建"回到顶部"按钮
const backToTopButton = document.createElement('a');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '回到顶部';
backToTopButton.href = '#'; // 防止页面刷新
document.body.appendChild(backToTopButton);

// 设置初始状态
backToTopButton.style.transform = 'translateY(100px)';
backToTopButton.style.opacity = '0';
backToTopButton.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

// 节流函数
function throttle(callback, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return callback(...args);
  };
}

// 处理滚动逻辑
function handleScroll() {
  const scrollY = window.scrollY;
  if (scrollY > 300) {
    backToTopButton.style.transform = 'translateY(0)';
    backToTopButton.style.opacity = '1';
  } else {
    backToTopButton.style.transform = 'translateY(100px)';
    backToTopButton.style.opacity = '0';
  }
}

// 使用节流处理滚动事件
window.addEventListener('scroll', throttle(handleScroll, 150));

// 点击平滑滚动到顶部
backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});