<!-- 全集变来那个 -->
<script type="text/javascript">
const colorList = [
  '#F9F900',
  '#6FB7B7',
  '#9999CC',
]
const colorListLength = 3
function getRandColor () {
  var tem = Math.round(Math.random() * colorListLength)
  return colorList[tem]
}
export default
{
  colorList,
  colorListLength,
  getRandColor
}
</script>