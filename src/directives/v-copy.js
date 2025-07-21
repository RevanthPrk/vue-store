export default {
  mounted(el, binding) {
    el.style.cursor = 'pointer'
    el.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(binding.value)
        alert(`Copied: ${binding.value}`)
        el.classList.add('copied')
        setTimeout(() => el.classList.remove('copied'), 1000)
      } catch (err) {
        console.error('Failed to copy text:', err)
      }
    })
  }
}
