try {
  var t = localStorage.getItem('rk-theme-v2') || 'dark'
  document.documentElement.dataset.theme = t
  document.documentElement.style.colorScheme = t
  var m = document.querySelector('meta[name="theme-color"]')
  if (m) m.setAttribute('content', t === 'dark' ? '#05070f' : '#f5f2ec')
} catch (e) {}
