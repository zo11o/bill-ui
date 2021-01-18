// 解决在ios下title不更新的问题
export function refreshTitle() {
  if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    const hackIframe = document.createElement('iframe');
    hackIframe.style.display = 'none';
    hackIframe.src = '/fixIosTitle.html?r=' + Math.random();
    document.body.appendChild(hackIframe);
    setTimeout(() => {
      document.body.removeChild(hackIframe);
    }, 300);
  }
}
